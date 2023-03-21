import "./App.css";
import Header from "./components/common/Header";
import Cover from "./components/section/Cover";
import Profile from "./components/section/Profile";
import PortfolioList from "./components/section/PortfolioList";
import Status from "./components/section/Status";
import Contact from "./components/section/Contact";
import Footer from "./components/common/Footer";
import { Routes, Route } from "react-router-dom";
import PortfolioDetail from "./components/pages/PortfolioDetail";
import Timeline from "./components/common/Timeline";
import img1 from "../src/img/kisa.png";
import img2 from "../src/img/bbatsue.png";
import img3 from "../src/img/kakao.png";
import img4 from "../src/img/r6.png";
import img5 from "../src/img/ikea.png";
import img6 from "../src/img/kirsh.png";
import img7 from "../src/img/subway.png";
import img8 from "../src/img/gliding.png";
import img9 from "../src/img/interpark.png";
import img10 from "../src/img/pizza.png";
const portfoioList = [
  {
    text: "한국인터넷진흥원",
    img: img1,
    tech: "HTML, SCSS, JS, AJAX",
    page: "메인 1, 서브 1",
    date: "3주",
    desc: "관공서 페이지, 반응형, 웹 표준",
    git: "https://github.com/hejo47/KISAweb",
    url: "https://hejo47.github.io/KISAweb/",
  },
  {
    text: "인터파크",
    img: img9,
    tech: "HTML, CSS, JQUERY, AJAX",
    page: "메인 1, 서브 1",
    date: "7일",
    desc: "KAKAO OPEN API 사용",
    url: "https://hejoportfolio.netlify.app/project/interpark/main.html",
  },
  {
    text: "카카오 뉴스",
    img: img3,
    tech: "REACT, USESTATE, CSS",
    page: "서브 1",
    date: "3일",
    desc: "REACT 화면 구성",
    git: "https://github.com/hejo47/kakaoweb",
    url: "https://kakaoweb-ugrf-g2g9zaudf-hejo47.vercel.app/news",
  },
  {
    text: "레인보우 식스 시즈",
    img: img4,
    tech: "HTML, SCSS, JS",
    page: "메인 1",
    date: "2일",
    desc: "반응형, SCSS를 이용한 애니메이션",
    git: "https://github.com/hejo47/R6web",
    url: "https://hejo47.github.io/R6web/",
  },
  {
    text: "이케아",
    img: img5,
    tech: "HTML, CSS, JS",
    page: "메인 1, 서브 2",
    date: "5일",
    desc: "",
    url: "https://hejoportfolio.netlify.app/project/ikea/index.html",
  },
  {
    text: "키르시",
    img: img6,
    tech: "HTML, CSS, JS, JQUERY",
    page: "메인 1",
    date: "4일",
    desc: "제작 슬라이드",
    url: "https://hejoportfolio.netlify.app/project/kirsh/index.html",
  },
  {
    text: "서브웨이",
    img: img7,
    tech: "HTML, CSS, JS, JQUERY",
    page: "메인 1",
    date: "3일",
    desc: "반응형, SWIPER",
    url: "https://hejoportfolio.netlify.app/project/subway/index.html",
  },
  {
    text: "글라이딩",
    img: img8,
    tech: "HTML, CSS, JQUERY",
    page: "메인 1, 서브 1",
    date: "10일",
    desc: "반응형, 서브 페이지",
    url: "https://hejoportfolio.netlify.app/project/gliding/main.html",
  },
  {
    text: "뺏슈",
    img: img2,
    tech: "HTML, SCSS, JS, AJAX",
    page: "메인 1, 서브 4",
    date: "2주",
    desc: "OPEN API",
    git: "https://github.com/hejo47/bbatsueWeb",
    url: "https://bbatsue-ar7vhp97x-hejo47.vercel.app/",
  },
  {
    text: "피자 하우스",
    img: img10,
    tech: "HTML, CSS, JQUERY",
    page: "메인 1, 서브 1",
    date: "8일",
    desc: "반응형",
    url: "https://hejoportfolio.netlify.app/project/pizza/main.html",
  },
];
function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Timeline />
              <Cover />
              <Profile />
              <PortfolioList list={portfoioList} />
              <Status />
              <Contact />
            </>
          }
        ></Route>

        <Route
          path='/Portfolio/Detail/:idx'
          element={
            <>
              <PortfolioDetail list={portfoioList}></PortfolioDetail>
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
