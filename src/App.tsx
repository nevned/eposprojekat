import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import TestComponent from "./components/TestComponents";
import { Product } from "./models/Product";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useFetch } from "./hooks/useFetch";

type ApiProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

type ProductsAPIResponse = {
  products: ApiProduct[];
  total: number;
  skip: number;
  limit: number;
};

// const products: Product[] = [
//   new Product(1, "Proizvod 1", "Opis proizvoda 1", 0),
//   new Product(2, "Proizvod 2", "Opis proizvoda 2", 0),
//   new Product(3, "Proizvod 3", "Opis proizvoda 3", 0),
//   new Product(4, "Proizvod 4", "Opis proizvoda 4", 0),
// ];

function App() {
  const [cartNum, setCartNum] = useState(0);

  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  // const [products, setProducts] = useState<Product[]>([]);

  const productApiUrl = import.meta.env.VITE_PRODUCTS_API_URL;
  const { data, loading, error } = useFetch<ProductsAPIResponse>(productApiUrl);

  const products: Product[] =
    data?.products.map(
      (apiProduct) =>
        new Product(
          apiProduct.id,
          apiProduct.title,
          apiProduct.description,
          0,
          apiProduct.thumbnail,
        ),
    ) ?? [];

  if (loading) {
    return <p>Ucitavanje proizvoda...</p>;
  }
  if (error) {
    return <p>Greska prilikom ucitavanja proizvoda: {error}</p>;
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("/productsData.json");
  //     console.log(response.data);

  //     const productsArray: Product[] = response.data.products.map(
  //       (product: any) => {
  //         return new Product(
  //           product.id,
  //           product.name,
  //           product.description,
  //           product.amount,
  //         );
  //       },
  //     );
  //     console.log(productsArray);
  //     setProducts(productsArray);
  //   };
  //   fetchData();
  // }, []);

  function refreshCart() {
    products.forEach((element) => {
      if (element.amount > 0) {
        let prom = [...cartProducts, element];
        setCartProducts(prom);
      }
    });
  }

  const addToCart = (id: number) => {
    console.log(`Dodat proizvod ${id} u korpu!`);
    products.map((product) => {
      if (product.id === id) {
        product.amount++;
        setCartNum(cartNum + 1);
        console.log(
          `Trenutna kolicina proizvoda ${product.id} je ${product.amount}!`,
        );
        refreshCart();
      }
    });
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<NavBar cartNum={cartNum} />}>
            <Route
              path="/"
              element={<Products productsProps={products} onAdd={addToCart} />}
            />
            <Route
              path="/cart"
              element={<Cart productsProps={cartProducts} onAdd={addToCart} />}
            />
          </Route>

          <Route path="*" element={<h1>404 Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
