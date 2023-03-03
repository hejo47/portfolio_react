import classes from "./SectionTitle.module.css";
const SectionTitle = (props) => {
  return (
    <div className={classes.sectionTitle}>
      <div className={classes.title}>{props.title}</div>
      <p className={classes.content}>
        {props.content}
        {props.children}
      </p>
    </div>
  );
};
export default SectionTitle;
