import classes from "./Header.module.css";
import Container from "./Container";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let winSct = window.scrollY;
      const header = document.querySelector("header");
      if (winSct >= 1) {
        header.classList.add(classes.active);
      } else {
        header.classList.remove(classes.active);
      }
    });
  }, []);
  return (
    <header>
      <Container>
        <div className={classes.headerWrapper}>
          <h1 className={classes.logo}>
            <Link to='/'>다헤주</Link>
          </h1>
          <ul className={classes.depth}>
            <li>
              <a href='#cover'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#portfolio'>Portfolio</a>
            </li>
            <li className={classes.contactBtn}>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};
export default Header;
