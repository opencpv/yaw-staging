import styles from "../../../index.module.css";
import Map from "./Map";

const Location = () => {
  return (
    <>
      <h2 className={`${styles.title}`}>Location <span className="text-sm text-shade-300">*</span></h2>
      <Map />
    </>
  );
};

export default Location;
