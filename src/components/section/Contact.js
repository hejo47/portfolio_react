import classes from "./Contact.module.css";
import Container from "../common/Container";
const Contact = () => {
  return (
    <section className={classes.contact} id='contact'>
      <Container>
        <div className={classes.contactCon}>
          <p className={classes.contactText}>Let's Work Together!</p>
          <span className={classes.call}>Call: 010-4665-8883</span>
          <span className={classes.email}>Email: andante0407@gamil.com</span>
          <button className={classes.btn} onClick={() => window.open("mailto:andante0407@gmail.com")}>
            Contact
          </button>
        </div>
      </Container>
    </section>
  );
};
export default Contact;
