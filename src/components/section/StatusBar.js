import classes from "./StatusBar.module.css";
const StatusBar = (props) => {
  return (
    <div className={classes.statusWrap}>
      <span className={classes.name}>{props.name}</span>
      <span className={classes.percent}>{props.percent}</span>
      <div className={classes.statusBar}></div>
    </div>
  );
};
export default StatusBar;
