import { useEffect } from "react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import classes from "./Status.module.css";
import StatusBar from "./StatusBar";
import AOS from "aos";
const statusList = [
  {
    name: "HTML/CSS",
    percent: 95,
  },
  {
    name: "JAVASCRIPT",
    percent: 85,
  },
  {
    name: "SCSS",
    percent: 80,
  },
  {
    name: "JQUERY",
    percent: 85,
  },
  {
    name: "PHOTOSHOP",
    percent: 95,
  },
  {
    name: "ILLUSTRATOR",
    percent: 90,
  },
  {
    name: "REACT",
    percent: 85,
  },
  {
    name: "FIGMA",
    percent: 70,
  },
  // {
  //   name: "VUE",
  //   percent: 70,
  // },
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
