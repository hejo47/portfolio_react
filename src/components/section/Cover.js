import classes from "./Cover.module.css";
import Container from "../common/Container";
import { Link } from "react-router-dom";

const Cover = () => {
  return (
    <section id='cover'>
      <div className={classes.cover}>
        <div className={classes.coverbg}></div>
        <Container>
          <div className={classes.coverText}>
            <p>
              맡겨<span>만 주세요</span>!
            </p>
            <h2>
              헤주가 <span>다 헤주</span>
            </h2>
            <h4>WEB FRONTEND DEVELOPER</h4>
            <div className={classes.coverSnsWrapper}>
              <a href='../강혜주입사지원서.pdf' target='_blank' className={classes.btn}>
                이력서 보기
              </a>
              <Link to='https://github.com/hejo47' className={classes.btn}>
                깃허브 가기
              </Link>
              <Link to='mailto:andante0407@gmail.com' className={classes.btn}>
                메일 보내기
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
export default Cover;
