import "./App.css";
import Header from "./components/common/Header";
import Cover from "./components/section/Cover";
import Profile from "./components/section/Profile";

function App() {
  return (
    <div className='App'>
      <Header />
      <Cover />
      <Profile />
    </div>
  );
}

export default App;
