import "./App.css";
import Header from "./components/common/Header";
import Cover from "./components/section/Cover";
import Profile from "./components/section/Profile";
import PortfolioList from "./components/section/PortfolioList";
import Status from "./components/section/Status";
import Contact from "./components/section/Contact";
import Footer from "./components/common/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioDetail from "./components/pages/PortfolioDetail";
import img1 from "../src/img/kisa.png";
import img2 from "../src/img/bbatsue.png";
import img3 from "../src/img/kakao.png";
import img4 from "../src/img/r6.png";
import img5 from "../src/img/ikea.jpeg";
import img6 from "../src/img/kirsh.jpeg";
import img7 from "../src/img/subway.jpeg";
import img8 from "../src/img/gliding.jpeg";
import img9 from "../src/img/interpark.jpeg";
import img10 from "../src/img/pizza.jpeg";
const portfoioList = [
  {
    text: "한국인터넷진흥원",
    img: img1,
    url: "https://hejo47.github.io/KISAweb/",
  },
  {
    text: "뺏슈",
    img: img2,
    url: "https://bbatsue-ar7vhp97x-hejo47.vercel.app/",
  },
  {
    text: "카카오 뉴스",
    img: img3,
    url: "https://kakaoweb-ugrf-g2g9zaudf-hejo47.vercel.app/news",
  },
  {
    text: "레인보우 식스 시즈",
    img: img4,
    url: "https://hejo47.github.io/R6web/",
  },
  {
    text: "이케아",
    img: img5,
    url: "https://hejoportfolio.netlify.app/project/ikea/index.html",
  },
  {
    text: "키르시",
    img: img6,
    url: "https://hejoportfolio.netlify.app/project/kirsh/index.html",
  },
  {
    text: "서브웨이",
    img: img7,
    url: "https://hejoportfolio.netlify.app/project/subway/index.html",
  },
  {
    text: "글라이딩",
    img: img8,
    url: "https://hejoportfolio.netlify.app/project/gliding/main.html",
  },
  {
    text: "인터파크",
    img: img9,
    url: "https://hejoportfolio.netlify.app/project/interpark/main.html",
  },
  {
    text: "피자 하우스",
    img: img10,
    url: "https://hejoportfolio.netlify.app/project/pizza/main.html",
  },
];
function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route
          path='/Home'
          element={
            <>
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
