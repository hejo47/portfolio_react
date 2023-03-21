import { useEffect, useState } from "react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import classes from "./Status.module.css";
import StatusBar from "./StatusBar";
import AOS from "aos";
const statusList = [
  {
    name: "HTML",
    percent: 95,
  },
  {
    name: "CSS",
    percent: 90,
  },
  {
    name: "JAVASCRIPT",
    percent: 80,
  },
  {
    name: "JQUERY",
    percent: 85,
  },
  {
    name: "PHOTOSHOP",
    percent: 90,
  },
  {
    name: "ILLUSTRATOR",
    percent: 85,
  },
  {
    name: "REACT",
    percent: 70,
  },
  {
    name: "POTENTIAL",
    percent: 100,
  },
];

const Status = () => {
  // const [status, setstatus] = useState();

  // const scrollHandler = () => {
  //   setstatus(document.querySelector("#status").offsetTop);
  //   console.log(status);
  // };
  useEffect(() => {
    AOS.init();
    window.addEventListener("scroll", function () {
      // scrollHandler();
      // if (window.scrollY >= status - 150) {
      // }
    });
  });
  return (
    <section className={classes.status} id='status'>
      <Container>
        <SectionTitle title='Status'></SectionTitle>
        <div className={classes.statusCon} data-aos='fade-left' data-aos-delay='300'>
          {statusList.map((bar, idx) => {
            return <StatusBar key={idx} name={bar.name} percent={bar.percent}></StatusBar>;
          })}
        </div>
      </Container>
    </section>
  );
};
export default Status;
