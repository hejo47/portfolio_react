import Container from "../common/Container";
import classes from "./PortfolioDetail.module.css";
import { useParams } from "react-router-dom";
const PortfolioDetail = (props) => {
  let { idx } = useParams();
  return (
    <div className={classes.detail}>
      <Container>
        <div>
          {idx}번째 디테일!, {props.list[idx].text}
          <img src={props.list[idx].img} alt={props.list[idx].text}></img>
        </div>
        {console.log(props.list[idx])}
      </Container>
    </div>
  );
};

export default PortfolioDetail;
