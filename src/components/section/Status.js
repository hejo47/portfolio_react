import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import classes from "./Status.module.css";
import StatusBar from "./StatusBar";
const statusList = [
  {
    name: "HTML",
    percent: 95,
  },
  {
    name: "CSS",
    percent: 90,
  },
  {
    name: "JAVASCRIPT",
    percent: 65,
  },
  {
    name: "HTML",
    percent: 95,
  },
  {
    name: "HTML",
    percent: 95,
  },
  {
    name: "HTML",
    percent: 95,
  },
];
const Status = () => {
  return (
    <section className={classes.status}>
      <Container>
        <SectionTitle title='Status'></SectionTitle>
        <div className={classes.statusCon}>
          {statusList.map((bar) => {
            return <StatusBar name={bar.name} percent={bar.percent}></StatusBar>;
          })}
        </div>
      </Container>
    </section>
  );
};
export default Status;
