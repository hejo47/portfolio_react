import Container from "../common/Container";
import classes from "./PortfolioDetail.module.css";
import { useParams } from "react-router-dom";
const PortfolioDetail = (props) => {
  let { idx } = useParams();
  return (
    <div className={classes.detail}>
      <Container>
        <div className={classes.detailWrap}>
          <h2 className={classes.detailTitle}>
            {Number(idx) + 1}번째 프로젝트, {props.list[idx].text}
          </h2>
          <img className={classes.detailimg} src={props.list[idx].img} alt={props.list[idx].text}></img>
        </div>
        {/* {console.log(props.list[idx])} */}
      </Container>
    </div>
  );
};

export default PortfolioDetail;
