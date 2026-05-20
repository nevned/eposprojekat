//rfce
//rafce
import React from "react";
import { Link, Outlet } from "react-router-dom";

interface NavBarProps {
  cartNum: number;
}

function NavBar(props: NavBarProps) {
  return (
    <>
      <div className="navBar">
        <Link to="/">ElabStore</Link>
        <p className="cart-num">{props.cartNum}</p>
        <Link to="/cart" className="cart-num">
          Cart
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
