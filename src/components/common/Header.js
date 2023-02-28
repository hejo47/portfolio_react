import classes from "./Header.module.css";
import Container from "./Container";
const Header = () => {
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
