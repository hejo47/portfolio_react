import classes from "./SectionTitle.module.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const SectionTitle = (props) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={classes.sectionTitle}>
      <div className={classes.title}>{props.title}</div>
      <p className={classes.content} data-aos='fade-left' data-aos-duration='3000'>
        {props.content}
        {props.children}
      </p>
    </div>
  );
};
export default SectionTitle;
