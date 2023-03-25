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
    desc_d: "",
  },
  {
    text: "인터파크",
    img: img9,
    tech: "HTML, CSS, JQUERY, AJAX",
    page: "메인 1, 서브 1",
    date: "7일",
    desc: "KAKAO OPEN API 사용",
    url: "https://hejoportfolio.netlify.app/project/interpark/main.html",
    desc_d: "",
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
    desc_d: "",
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
    desc_d: "",
  },
  {
    text: "이케아",
    img: img5,
    tech: "HTML, CSS, JS",
    page: "메인 1, 서브 2",
    date: "5일",
    desc: "",
    url: "https://hejoportfolio.netlify.app/project/ikea/index.html",
    desc_d:
      "브랜드 '이케아'의 홈페이지 디자인입니다. 표지의 슬라이드와 메뉴의 움직임은 JavaScript를 이용한 CSS 애니메이션으로 제작했습니다. JavaScript로 localStorage에 저장하는 방식을 사용해 로그인을 구현했고, 로그인에 성공할 시 메뉴에 로그아웃을 구현했습니다. 페이지 하단부에는 SNS 버튼과 시계를 배치했습니다.",
  },
  {
    text: "키르시",
    img: img6,
    tech: "HTML, CSS, JS, JQUERY",
    page: "메인 1",
    date: "4일",
    desc: "제작 슬라이드",
    url: "https://hejoportfolio.netlify.app/project/kirsh/index.html",
    desc_d:
      "브랜드 '키르시'의 홈페이지 디자인입니다. 전체적으로 단순하고 깔끔한 느낌을 주기 위해 검정색과 흰색을 사용하여 디자인했습니다. 커버는 재밌고 트렌디한 분위기를 주기 위해서 비대칭 사선으로 내려 작업했고, 제품 레이아웃은 많이 반복되면 시각적으로 지루함을 느낄 수 있기 때문에 가로 슬라이드로 제작했습니다. 배너는 타이다이 패턴을 홍보하기 위해 만들었는데, 패턴이 주는 느낌이 신비, 레트로이기 때문에 옛날 느낌이 나게 제작했습니다.",
  },
  {
    text: "서브웨이",
    img: img7,
    tech: "HTML, CSS, JS, JQUERY",
    page: "메인 1",
    date: "3일",
    desc: "반응형, SWIPER",
    url: "https://hejoportfolio.netlify.app/project/subway/index.html",
    desc_d: "",
  },
  {
    text: "글라이딩",
    img: img8,
    tech: "HTML, CSS, JQUERY",
    page: "메인 1, 서브 1",
    date: "10일",
    desc: "반응형, 서브 페이지",
    url: "https://hejoportfolio.netlify.app/project/gliding/main.html",
    desc_d: "",
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
    desc_d: "",
  },
  {
    text: "피자 하우스",
    img: img10,
    tech: "HTML, CSS, JQUERY",
    page: "메인 1, 서브 1",
    date: "8일",
    desc: "반응형",
    url: "https://hejoportfolio.netlify.app/project/pizza/main.html",
    desc_d: "",
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
