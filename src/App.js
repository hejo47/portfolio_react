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
import img11 from "../src/img/4niture.png";
const portfoioList = [
  {
    text: "한국인터넷진흥원",
    img: img1,
    tech: "HTML, SCSS, JS, OPEN API",
    page: "메인 1, 서브 1",
    date: "3주",
    desc: "관공서 페이지, 반응형, 웹 표준",
    git: "https://github.com/hejo47/KISAweb",
    url: "https://hejo47.github.io/KISAweb/",
    desc_d: "웹 접근성을 높히기 위해 스킵메뉴를 넣었고, 웹 표준을 지키며 코딩했습니다. 메인 화면에는 Open Api를 이용해 날씨 데이터를 넣었고, 모든 기기에서 사용이 가능하도록 반응형으로 제작했습니다.",
    score: "100%",
  },
  {
    text: "퍼니쳐",
    img: img11,
    tech: "REACT, NODE EXPRESS, AXIOS",
    page: "메인 1, 서브 4",
    date: "2주",
    desc: "풀스택",
    git: "https://github.com/hejo47/4niture_react",
    git2: "https://github.com/naehyun25/4niture_server",
    url: "https://4niture-react.vercel.app/",
    desc_d: "가구 브랜드인 퍼니쳐입니다. 상품은 모두 Node Express를 사용해서 DB에 저장된 데이터를 Axios로 불러왔습니다.",
    score: "25%",
  },
  {
    text: "카카오 뉴스",
    img: img3,
    tech: "REACT",
    page: "서브 1",
    date: "3일",
    desc: "REACT 화면 구성, useState",
    git: "https://github.com/hejo47/kakaoweb",
    url: "https://kakaoweb-ugrf-g2g9zaudf-hejo47.vercel.app/news",
    desc_d: "",
    score: "100%",
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
    score: "100%",
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
    desc_d: "빵 쇼핑몰인 뺏슈입니다. '슈가(설탕)를 뺐다' 라는 뜻에서 나온 뺏슈는 당뇨 인구를 위한 무가당 빵을 팔고 있습니다. 제품 상세 페이지에는 OPEN API를 사용한 제품성분표를 제작했습니다.",
    score: "25%",
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
    score: "100%",
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
    score: "100%",
  },
  {
    text: "인터파크",
    img: img9,
    tech: "HTML, CSS, JQUERY, AJAX",
    page: "메인 1, 서브 1",
    date: "7일",
    desc: "KAKAO OPEN API 사용",
    url: "https://hejoportfolio.netlify.app/project/interpark/main.html",
    desc_d:
      "Kakao Open API를 사용해서 Json 형식으로 책의 데이터를 전달했고, JavaScript와 JQuery를 이용해서 슬라이드 등의 움직임을 제어했습니다. 색상은 인터파크 시그니처 색상인 붉은 색 (#fc2c3d) 을 이용했으며, 같은 색상 표현을 위해 톤 다운 된 #c43730 색상도 사용했습니다. 서브 페이지에는 책의 소개를 위한 동영상과 상세 이미지를 포함했습니다.",
    score: "100%",
  },
  {
    text: "서브웨이",
    img: img7,
    tech: "HTML, CSS, JS, JQUERY",
    page: "메인 1",
    date: "3일",
    desc: "반응형, SWIPER",
    url: "https://hejoportfolio.netlify.app/project/subway/index.html",
    desc_d:
      "샌드위치 브랜드인 'SUBWAY'의 홈페이지입니다. 사용자의 다양한 기기에서 접속이 용이하게 반응형으로 제작했습니다. 써브웨이 브랜드의 시그니쳐 색상인 #009132를 사용했습니다. 써브웨이는 자주 이벤트가 발생하기 때문에 이벤트 섹션을 가장 상단에 배치하였고, 메뉴소개 부분은 스와이프 플러그인을 사용해서 메뉴를 배치했습니다.",
    score: "100%",
  },
  {
    text: "글라이딩",
    img: img8,
    tech: "HTML, CSS, JQUERY",
    page: "메인 1, 서브 1",
    date: "10일",
    desc: "반응형, 서브 페이지",
    url: "https://hejoportfolio.netlify.app/project/gliding/main.html",
    desc_d:
      "'Marine'의 클론 사이트인 'Gliding'입니다. 반응형으로 제작해 사용자들의 각자 다른 해상도에서도 원활한 이용이 가능하게 했습니다. 시그니처 색상으로는 하늘을 연상시키는 파란 색을 사용했고, 안정되고 정돈된 느낌을 주기 위해 톤 다운된 남색도 사용했습니다. 상공 스포츠를 예약하기 위한 페이지이기 때문에 가장 중요한 예약 탭을 위로 배치했고 정보의 정확한 전달을 위해 표 형식으로 정리했습니다. 서브 페이지는 각종 뉴스와 이벤트등을 전달하므로 단순히 제작하였습니다.",
    score: "100%",
  },
  {
    text: "피자 하우스",
    img: img10,
    tech: "HTML, CSS, JQUERY",
    page: "메인 1, 서브 1",
    date: "8일",
    desc: "반응형",
    url: "https://hejoportfolio.netlify.app/project/pizza/main.html",
    desc_d:
      "'Pizza House'의 클론 사이트입니다. 반응형으로 제작해 사용자들의 각자 다른 해상도에서도 원활한 이용이 가능하게 했습니다. 레스토랑 소개 웹이기 때문에 식욕을 돋구는 색상인 붉은 색 (#ef544d) 을 사용했고, 포인트 색상으로는 건강한 느낌이 들게 하는 연두색 계열 (#9acd32) 을 사용했습니다. 기존 웹에서는 메뉴를 글로만 표현한 반면, 제작한 웹에서는 사진과 함께 메뉴를 표현하므로 더 쉬운 이해를 돕습니다. 서브 페이지에서는 레스토랑의 뉴스와 이벤트 영상 등을 전달하기 용이하게 제작했습니다.",
    score: "100%",
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
