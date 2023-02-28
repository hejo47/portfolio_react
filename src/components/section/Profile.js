import classes from "./Profile.module.css";
import Container from "../common/Container";
const Profile = () => {
  return (
    <section>
      <Container>
        <div className={classes.profile}></div>
      </Container>
    </section>
  );
};
export default Profile;
