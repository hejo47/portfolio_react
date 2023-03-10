import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import classes from "./PortfolioItem.module.css";
const PortfolioItem = (props) => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      <div className={classes.portfolioItem} item={props.item} data-aos='fade-up' data-aos-duration='2000'>
        <img src={props.item.img} alt='portfolioImg' />
        <div className={classes.portfolioInner}>
          <p className={classes.portfolioText}>{props.item.text}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
