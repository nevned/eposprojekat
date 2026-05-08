
// rafce
import React from 'react'
import OneProduct from './OneProduct'
import { Product } from '../models/Product'

const product1 = new Product(1, "Proizvod 1", "Opis proizvoda 1", 0);

interface ProductsProps{
  productsProps: Product[];
  onAdd:(id:number) => void;
}

const Products:React.FC<ProductsProps> = ({productsProps, onAdd}) => {
  return (
    <div className='all-products'>
      {/* CTRL + ALT + strelica na gore/dole */}
        {/* <OneProduct productProps ={productsProps[0]}/>
        <OneProduct productProps = {productsProps[1]}/>
        <OneProduct productProps = {productsProps[2]}/>
        <OneProduct productProps = {productsProps[3]}/> */}

        {/* map funkcija */}
        {productsProps.map((productMap)=>(
          <OneProduct key = {productMap.id} productProps = {productMap} onAdd={() => onAdd(productMap.id)}/>
        ))}

    </div>
  )
}

export default Products