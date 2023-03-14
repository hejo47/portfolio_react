import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import classes from "./PortfolioItem.module.css";
import { Link } from "react-router-dom";
const PortfolioItem = (props) => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div>
        <div className={classes.portfolioItem} item={props.item} data-aos='fade-up' data-aos-duration='2000'>
          <img src={props.item.img} alt='portfolioImg' />
          <div className={classes.portfolioInner}>
            <p className={classes.portfolioText}>{props.item.text}</p>
          </div>
        </div>
      </div>
      <div className={classes.portfolioDesc}>
        <p>
          기술스택<span>{props.item.tech}</span>
        </p>
        <p>
          작업 페이지 수<span>{props.item.page}</span>
        </p>
        <p>
          작업 기간<span>{props.item.date}</span>
        </p>
        <p style={{ marginTop: 10, marginBottom: 10 }}>
          <span>{props.item.desc}</span>
        </p>
        <Link to={props.item.url}>
          <i className='ri-arrow-right-circle-fill'></i>
        </Link>
        {props.item.git && (
          <Link to={props.item.git}>
            <i className='ri-github-fill'></i>
          </Link>
        )}
      </div>
    </>
  );
};

export default PortfolioItem;
