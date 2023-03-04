import Container from "./Container";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={classes.footer}>
          <p className={classes.copy}>© 2023 by hyeju. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
