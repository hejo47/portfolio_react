import classes from "./Contact.module.css";
import Container from "../common/Container";
const Contact = () => {
  return (
    <section className={classes.contact} id='contact'>
      <Container>
        <div className={classes.contactCon}>
          <p className={classes.contactText}>혜주일 수 밖에 없지!</p>
          <span className={classes.call}>전화번호: 010-4665-8883</span>
          <span className={classes.email}>이메일: andante0407@gmail.com</span>
          <button className={classes.btn} onClick={() => window.open("mailto:andante0407@gmail.com")}>
            메일 보내기
          </button>
        </div>
      </Container>
    </section>
  );
};
export default Contact;
