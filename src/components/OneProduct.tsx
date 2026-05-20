import React from "react";
import { Product } from "../models/Product";

interface OneProductProps {
  productProps: Product;
  onAdd: (id: number) => void;
}

const OneProduct: React.FC<OneProductProps> = ({ productProps, onAdd }) => {
  // function addToCart(){
  //     console.log(`Dodat proizvod ${productProps.name} u korpu!`);
  //     productProps.amount ++;
  //     console.log(`Trenutna kolicina proizovda ${productProps.id} je ${productProps.amount}!`);
  // }
  const stil = {
    margin: 10,
    borderStyle: "dashed",
  };
  return (
    // border-style: solid;
    // <div className='card' style={{margin:10, borderStyle: 'solid'}}>
    <div className="card" style={stil}>
      <img
        className="card-img-top"
        src={productProps.image}
        width="200"
        height="200"
        alt="Slika proizvoda"
      />
      <div className="card-body">
        {/* <h3 className='card-title'>{props.productProps.name}</h3> */}
        <h3 className="card-title">{productProps.name}</h3>
        <p className="card-text">{productProps.description}</p>
        <a className="btn" onClick={() => onAdd(productProps.id)}>
          +
        </a>
        <a href="" className="btn">
          -
        </a>
      </div>
    </div>
  );
};

export default OneProduct;
