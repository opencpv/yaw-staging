import styles from "../../../index.module.css";
import Map from "./Map";

const Location = () => {
  return (
    <>
      <h2 className={`${styles.title}`}>Location</h2>
      <Map />
    </>
  );
};

export default Location;
