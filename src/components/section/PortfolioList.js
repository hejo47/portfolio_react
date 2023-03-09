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
import { Link } from "react-router-dom";
const portfoioList = [
  {
    text: "한국인터넷진흥원",
    id: 1,
    img: img1,
    url: "https://hejo47.github.io/KISAweb/",
  },
  {
    text: "뺏슈",
    id: 2,
    img: img2,
    url: "https://bbatsue-ar7vhp97x-hejo47.vercel.app/",
  },
  {
    text: "카카오 뉴스",
    id: 10,
    img: img3,
    url: "https://kakaoweb-ugrf-g2g9zaudf-hejo47.vercel.app/news",
  },
  {
    text: "레인보우 식스 시즈",
    id: 3,
    img: img4,
    url: "https://hejo47.github.io/R6web/",
  },
  {
    text: "이케아",
    id: 4,
    img: img5,
    url: "https://hejoportfolio.netlify.app/project/ikea/index.html",
  },
  {
    text: "키르시",
    id: 5,
    img: img6,
    url: "https://hejoportfolio.netlify.app/project/kirsh/index.html",
  },
  {
    text: "서브웨이",
    id: 6,
    img: img7,
    url: "https://hejoportfolio.netlify.app/project/subway/index.html",
  },
  {
    text: "글라이딩",
    id: 7,
    img: img8,
    url: "https://hejoportfolio.netlify.app/project/gliding/main.html",
  },
  {
    text: "인터파크",
    id: 8,
    img: img9,
    url: "https://hejoportfolio.netlify.app/project/interpark/main.html",
  },
  {
    text: "피자 하우스",
    id: 9,
    img: img10,
    url: "https://hejoportfolio.netlify.app/project/pizza/main.html",
  },
];
const PortfolioList = () => {
  return (
    <section className={classes.PortfolioListBg} id='portfolio'>
      <Container>
        <div className={classes.portfolio}>
          <SectionTitle title='PORTFOLIO' content='작업한 프로젝트들'></SectionTitle>
          <div className={classes.portfolioWrap}>
            {portfoioList.map((item) => (
              <PortfolioItem img={item.img} text={item.text} url={item.url} key={item.id}></PortfolioItem>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default PortfolioList;
