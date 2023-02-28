import classes from "./Header.module.css";
import Container from "./Container";
import { useEffect } from "react";

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
          <h1 className={classes.logo}>LOGO</h1>
          <ul className={classes.depth}>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li className={classes.contactBtn}>Contact</li>
          </ul>
        </div>
      </Container>
    </header>
  );
};
export default Header;
