import CallOut from "@/components/__shared/ui/CallOut";
import style from "../../../../index.module.css";
import Map from "./Map";

const Location = () => {
  return (
    <>
      <h2 className={`${style.title} space-y-8`}>
        Location <span className={style.asterisk}>*</span>
        <CallOut content="You may select up to 3 locations" />
      </h2>
      <Map />
    </>
  );
};

export default Location;
