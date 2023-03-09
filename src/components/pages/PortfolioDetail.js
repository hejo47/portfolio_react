import Container from "../common/Container";
import classes from "./PortfolioDetail.module.css";
import { useParams } from "react-router-dom";
const PortfolioDetail = (props) => {
  const { detailID } = useParams();
  return (
    <div className={classes.detail}>
      <Container>
        <div>{detailID}번째 디테일!</div>
        <p>{console.log(props.key)}</p>
      </Container>
    </div>
  );
};

export default PortfolioDetail;
