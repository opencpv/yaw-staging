import CallOut from "@/components/__shared/ui/CallOut";
import styles from "../../../../index.module.css";
import Map from "./Map";

const Location = () => {
  return (
    <>
      <h2 className={`${styles.title} space-y-8`}>
        Location <span className="text-sm text-shade-300">*</span>
        <CallOut content="You may select up to 3 locations" />
      </h2>
      <Map />
    </>
  );
};

export default Location;
