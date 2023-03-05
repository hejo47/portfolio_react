import classes from "./StatusBar.module.css";
const StatusBar = (props) => {
  return (
    <div className={classes.statusWrap}>
      <span className={classes.name}>{props.name}</span>
      <span className={classes.percent}>{props.percent}</span>
      <div className={classes.statusBar}>
        <div className={classes.statusBarInner} style={{ width: `${props.percent}%` }}></div>
      </div>
    </div>
  );
};
export default StatusBar;
