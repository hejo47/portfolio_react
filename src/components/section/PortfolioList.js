import classes from "./PortfolioList.module.css";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import PortfolioItem from "./PortfolioItem";

const PortfolioList = (props) => {
  return (
    <section className={classes.PortfolioListBg} id='portfolio'>
      <Container>
        <div className={classes.portfolio}>
          <SectionTitle title='PORTFOLIO' content='작업한 프로젝트들'></SectionTitle>
          <div className={classes.portfolioWrap}>
            {props.list.map((item, idx) => (
              // <PortfolioItem key={idx} img={item.img} text={item.text} url={item.url}></PortfolioItem>
              <PortfolioItem item={item} key={idx} idx={idx} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default PortfolioList;
