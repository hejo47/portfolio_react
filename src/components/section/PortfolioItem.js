import classes from "./PortfolioItem.module.css";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
const PortfolioItem = (props) => {
  console.info(props.url);
  return (
    <div
      className={classes.portfolioItem}
      onClick={() => {
        window.open(props.url);
      }}
    >
      <img src={props.img} alt='portfolioImg' />
      <div className={classes.portfolioInner}>
        <p className={classes.portfolioText}>{props.text}</p>
      </div>
    </div>
  );
};
export default PortfolioItem;
