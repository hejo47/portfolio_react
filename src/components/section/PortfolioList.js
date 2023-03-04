import classes from "./PortfolioList.module.css";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import PortfolioItem from "./PortfolioItem";
const portfoioList = [
  {
    text: "한국인터넷진흥원",
    id: 1,
    img: "",
  },
  {
    text: "뺏슈",
    id: 2,
    img: "",
  },
  {
    text: "카카오 뉴스",
    id: 10,
    img: "",
  },
  {
    text: "레인보우 식스 시즈",
    id: 3,
    img: "",
  },
  {
    text: "이케아",
    id: 4,
    img: "",
  },
  {
    text: "키르시",
    id: 5,
    img: "",
  },
  {
    text: "서브웨이",
    id: 6,
    img: "",
  },
  {
    text: "글라이딩",
    id: 7,
    img: "",
  },
  {
    text: "인터파크",
    id: 8,
    img: "",
  },
  {
    text: "피자 하우스",
    id: 9,
    img: "",
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
