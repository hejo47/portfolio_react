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
              <PortfolioList />
              <Status />
              <Contact />
            </>
          }
        ></Route>
        <Route
          path='/Portfolio/Detail'
          element={
            <>
              <PortfolioDetail></PortfolioDetail>
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
