import Container from "../common/Container";
import classes from "./PortfolioDetail.module.css";
import { useParams, Link } from "react-router-dom";
const PortfolioDetail = (props) => {
  let { idx } = useParams();
  return (
    <div className={classes.detail}>
      <Container>
        <div className={classes.detailWrap}>
          <div className={classes.detailTextWrap}>
            <div className={classes.textright}>
              <h2 className={classes.detailTitle}>
                {Number(idx) + 1}번째 프로젝트,
                <br /> {props.list[idx].text}입니다.
              </h2>
              {/* <p>특징</p> */}
              <span>{props.list[idx].desc_d}</span>
            </div>
            <div className={classes.textleft}>
              <Link to={props.list[idx].url} className={classes.btn}>
                구현 화면
              </Link>
              {props.list[idx].git && (
                <Link to={props.list[idx].git} className={classes.btn}>
                  깃허브 주소
                </Link>
              )}
              {props.list[idx].git2 && (
                <Link to={props.list[idx].git2} className={classes.btn}>
                  DB 배포 주소
                </Link>
              )}
            </div>
          </div>
          <img className={classes.detailimg} src={props.list[idx].img} alt={props.list[idx].text}></img>
        </div>
        {/* {console.log(props.list[idx])} */}
      </Container>
    </div>
  );
};

export default PortfolioDetail;
