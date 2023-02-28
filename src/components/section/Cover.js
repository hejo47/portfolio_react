import classes from "./Cover.module.css";
import Container from "../common/Container";
const Cover = () => {
  return (
    <section>
      <div className={classes.cover}>
        <div className={classes.coverbg}></div>
        <Container>
          <div className={classes.coverText}>
            <h2>
              헤주가 <span>다 헤주</span>
            </h2>
            <h4>WEB FRONTEND DEVELOPER</h4>
            <div className={classes.coverSnsWrapper}>
              <div className={classes.coverSns}>
                <i className='ri-github-line'></i>
              </div>
              <div className={classes.coverSns}>
                <i className='ri-bold'></i>
              </div>
              <div className={classes.coverSns}>
                <i className='ri-mail-line'></i>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
export default Cover;
