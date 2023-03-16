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
      <div className={classes.portfolioItemWrap}>
        <Link to={`/Portfolio/Detail/${props.idx}`}>
          <div className={classes.portfolioItem} item={props.item} data-aos='fade-up' data-aos-duration='2000'>
            <img src={props.item.img} alt='portfolioImg' />
            <div className={classes.portfolioInner}>
              <p className={classes.portfolioText}>{props.item.text}</p>
            </div>
          </div>
        </Link>
        <div className={classes.portfolioDesc}>
          <p>
            기술 스택<span>{props.item.tech}</span>
          </p>
          <p>
            페이지 수<span>{props.item.page}</span>
          </p>
          <p>
            작업 기간<span>{props.item.date}</span>
          </p>
          <p style={{ marginTop: 10, marginBottom: 10 }}>
            <span>{props.item.desc}</span>
          </p>
          <Link to={props.item.url}>
            <div className={classes.pfbtn}>구현 화면</div>
          </Link>
          {props.item.git && (
            <Link to={props.item.git}>
              <div className={classes.pfbtn}>깃허브 주소</div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
