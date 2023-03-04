import classes from "./PortfolioList.module.css";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import PortfolioItem from "./PortfolioItem";
import img1 from "../../img/kisa.png";
import img2 from "../../img/bbatsue.png";
import img3 from "../../img/kakao.png";
import img4 from "../../img/r6.png";
import img5 from "../../img/ikea.jpeg";
import img6 from "../../img/kirsh.jpeg";
import img7 from "../../img/subway.jpeg";
import img8 from "../../img/gliding.jpeg";
import img9 from "../../img/interpark.jpeg";
import img10 from "../../img/pizza.jpeg";
const portfoioList = [
  {
    text: "한국인터넷진흥원",
    id: 1,
    img: img1,
  },
  {
    text: "뺏슈",
    id: 2,
    img: img2,
  },
  {
    text: "카카오 뉴스",
    id: 10,
    img: img3,
  },
  {
    text: "레인보우 식스 시즈",
    id: 3,
    img: img4,
  },
  {
    text: "이케아",
    id: 4,
    img: img5,
  },
  {
    text: "키르시",
    id: 5,
    img: img6,
  },
  {
    text: "서브웨이",
    id: 6,
    img: img7,
  },
  {
    text: "글라이딩",
    id: 7,
    img: img8,
  },
  {
    text: "인터파크",
    id: 8,
    img: img9,
  },
  {
    text: "피자 하우스",
    id: 9,
    img: img10,
  },
];
const PortfolioList = () => {
  return (
    <section className={classes.PortfolioListBg}>
      <Container>
        <div className={classes.portfolio}>
          <SectionTitle title='PORTFOLIO' content='작업한 프로젝트들'></SectionTitle>
          {/* <div className={classes.tab}>
            <button className={classes.tabstyle}>All</button>
            <button className={classes.tabstyle}>Frontend</button>
            <button className={classes.tabstyle}>Publishing</button>
          </div> */}
          <div className={classes.portfolioWrap}>
            {portfoioList.map((item) => (
              <PortfolioItem img={item.img} text={item.text} key={item.id}></PortfolioItem>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default PortfolioList;
