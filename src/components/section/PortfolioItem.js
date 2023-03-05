import classes from "./PortfolioItem.module.css";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const PortfolioItem = (props) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      className={classes.portfolioItem}
      data-aos='fade-up'
      data-aos-duration='2000'
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
