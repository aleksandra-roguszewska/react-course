import React from "react";
import mealsImage from "../../assets/pizza-background.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton showCartHandler={props.showCartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A pizza" />
      </div>
    </React.Fragment>
  );
};

export default Header;
