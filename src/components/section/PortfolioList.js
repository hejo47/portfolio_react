import classes from "./PortfolioList.module.css";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
const PortfolioList = () => {
  return (
    <section className={classes.PortfolioListBg}>
      <Container>
        <div className={classes.portfolio}>
          <SectionTitle title='PORTFOLIO' content='작업한 프로젝트들'></SectionTitle>
          <div className={classes.tab}>
            <button className={classes.tabstyle}>All</button>
            <button className={classes.tabstyle}>Frontend</button>
            <button className={classes.tabstyle}>Publishing</button>
          </div>
        </div>
      </Container>
      <></>
    </section>
  );
};
export default PortfolioList;
