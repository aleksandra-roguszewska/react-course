import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.showCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
