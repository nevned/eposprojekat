import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import { Product } from "./models/Product";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";

type ApiProduct = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
};

type ProductsAPIResponse = {
  products: ApiProduct[];
};



function App() {
  const [cartNum, setCartNum] = useState(0);

  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const imageUrl = `${apiBaseUrl}/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80`;

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
      <img src={imageUrl} alt="IT kurs" style={{width: '100%',maxHeight: '350px',objectFit:'cover'}}/>
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
