import "./App.css";
import Header from "./components/common/Header";
import Cover from "./components/section/Cover";
import Profile from "./components/section/Profile";
import PortfolioList from "./components/section/PortfolioList";

function App() {
  return (
    <div className='App'>
      <Header />
      <Cover />
      <Profile />
      <PortfolioList />
    </div>
  );
}

export default App;
