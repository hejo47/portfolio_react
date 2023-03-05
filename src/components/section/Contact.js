import classes from "./Contact.module.css";
import Container from "../common/Container";
const Contact = () => {
  return (
    <section className={classes.contact} id='contact'>
      <Container>
        <div className={classes.contactCon}>
          <p className={classes.contactText}>Let's Work Together!</p>
          <button className={classes.btn}>Contact</button>
        </div>
      </Container>
    </section>
  );
};
export default Contact;
