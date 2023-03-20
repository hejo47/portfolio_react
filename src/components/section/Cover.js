import classes from "./Cover.module.css";
import Container from "../common/Container";
const Cover = () => {
  return (
    <section id='cover'>
      <div className={classes.cover}>
        <div className={classes.coverbg}></div>
        <Container>
          <div className={classes.coverText}>
            <h2>
              헤주가 <span>다 헤주</span>
            </h2>
            <h4>WEB FRONTEND DEVELOPER</h4>
            <div className={classes.coverSnsWrapper}>
              <div className={classes.coverSns} onClick={() => window.open("https://blog.naver.com/hejo_47")}>
                <i className='ri-bold'></i>
              </div>
              <div className={classes.coverSns} onClick={() => window.open("https://github.com/hejo47")}>
                <i className='ri-github-fill'></i>
              </div>
              <div className={classes.coverSns} onClick={() => window.open("mailto:andante0407@gmail.com")}>
                <i className='ri-mail-fill'></i>
              </div>
            </div>
          </div>
          <div className={classes.scroll}></div>
        </Container>
      </div>
    </section>
  );
};
export default Cover;
