import classes from "./PortfolioList.module.css";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
const PortfolioList = () => {
  return (
    <>
      <Container>
        <div className={classes.portfolio}>
          <SectionTitle title='portfolio' content='작업한 프로젝트들'></SectionTitle>
          <div className={classes.tab}>
            <button></button>
          </div>
        </div>
      </Container>
      <></>
    </>
  );
};
export default PortfolioList;
