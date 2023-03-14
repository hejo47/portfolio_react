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
    tech: "HTML, SCSS, JS, AJAX",
    page: 2,
    date: "3주",
    desc: "관공서 페이지로서 웹 표준을 준수하고 접근성을 향상시켰습니다.",
    git: "https://github.com/hejo47/KISAweb",
    url: "https://hejo47.github.io/KISAweb/",
  },
  {
    text: "뺏슈",
    img: img2,
    tech: "HTML, SCSS, JS, AJAX",
    page: 5,
    date: "2주",
    desc: "빵 쇼핑몰입니다. OPEN API를 연결해 영양성분표를 제작했습니다.",
    git: "https://github.com/hejo47/bbatsueWeb",
    url: "https://bbatsue-ar7vhp97x-hejo47.vercel.app/",
  },
  {
    text: "카카오 뉴스",
    img: img3,
    tech: "REACT, CSS",
    page: 1,
    date: "3일",
    desc: "카카오 뉴스 페이지입니다. 첫 리액트 화면구성 프로그램입니다.",
    git: "https://github.com/hejo47/kakaoweb",
    url: "https://kakaoweb-ugrf-g2g9zaudf-hejo47.vercel.app/news",
  },
  {
    text: "레인보우 식스 시즈",
    img: img4,
    tech: "HTML, SCSS, JS",
    page: 1,
    date: "2일",
    desc: '게임 "레인보우 식스 시즈"의 겨울 이벤트 페이지입니다. SCSS를 이용한 눈 내리는 애니메이션이 특징입니다.',
    git: "https://github.com/hejo47/R6web",
    url: "https://hejo47.github.io/R6web/",
  },
  {
    text: "이케아",
    img: img5,
    tech: "HTML, CSS, JS",
    page: 3,
    date: "5일",
    desc: "이케아 리브랜딩입니다. 시그니쳐 색상을 이용한 시원시원한 디자인이 특징입니다.",
    url: "https://hejoportfolio.netlify.app/project/ikea/index.html",
  },
  {
    text: "키르시",
    img: img6,
    tech: "HTML, CSS, JS, JQUERY",
    page: 1,
    date: "4일",
    desc: "키르시 리브랜딩입니다. 직접 제작한 슬라이드로 상품을 배치했습니다.",
    url: "https://hejoportfolio.netlify.app/project/kirsh/index.html",
  },
  {
    text: "서브웨이",
    img: img7,
    tech: "HTML, CSS, JS, JQUERY",
    page: 1,
    date: "3일",
    desc: "서브웨이 홈페이지입니다. 메인 슬라이드는 SWIPER를 이용했습니다.",
    url: "https://hejoportfolio.netlify.app/project/subway/index.html",
  },
  {
    text: "글라이딩",
    img: img8,
    tech: "HTML, CSS, JQUERY",
    page: 2,
    date: "10일",
    desc: "첫 퍼블리싱 프로젝트입니다. 가장 중요한 예약 폼을 가장 위에 배치했습니다.",
    url: "https://hejoportfolio.netlify.app/project/gliding/main.html",
  },
  {
    text: "인터파크",
    img: img9,
    tech: "HTML, CSS, JQUERY, AJAX",
    page: 2,
    date: "7일",
    desc: "인터파크 홈페이지입니다. KAKAO OPEN API를 이용해 JSON 데이터를 가져왔습니다.",
    url: "https://hejoportfolio.netlify.app/project/interpark/main.html",
  },
  {
    text: "피자 하우스",
    img: img10,
    tech: "HTML, CSS, JQUERY",
    page: 2,
    date: "8일",
    desc: "피자 하우스 홈페이지입니다. 반응형으로 제작해 사용자들의 각자 다른 해상도에서도 원활한 이용이 가능하게 했습니다.",
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
