
// rafce
import React from 'react'
import OneProduct from './OneProduct'
import { Product } from '../models/Product'


interface ProductsProps{
  productsProps: Product[];
  onAdd:(id:number) => void;
}

const Cart:React.FC<ProductsProps> = ({productsProps, onAdd}) => {
  return (
    <div className='cart-items'>
        {productsProps.map((productMap)=>(
          <OneProduct key = {productMap.id} productProps = {productMap} onAdd={() => onAdd(productMap.id)}/>
        ))}

    </div>
  )
}

export default Cart