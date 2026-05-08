//rfce
//rafce
import React from 'react'

interface NavBarProps{
  cartNum:number;
}

function NavBar(props:NavBarProps) {
  return (
    <div className='navBar'>
        <a href="">ElabStore</a>
        <p className="cart-num">{props.cartNum}</p>
    </div>
  )
}

export default NavBar