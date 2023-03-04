import classes from "./PortfolioItem.module.css";
const PortfolioItem = (props) => {
  return (
    <div className={classes.portfolioItem}>
      <img src={props.img} alt='portfolioImg' />
      <div className={classes.portfolioInner}>
        <p className={classes.portfolioText}>{props.text}</p>
      </div>
    </div>
  );
};
export default PortfolioItem;
