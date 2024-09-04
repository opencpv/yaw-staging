import Callout from "@/components/__shared/ui/callout/callout";
import style from "../../../../index.module.css";
import Map from "./Map";

const Location = () => {
  return (
    <>
      <h2 className={`${style.title} space-y-8`}>
        Location <span className={style.asterisk}>*</span>
        <Callout content="You may select up to 3 locations" />
      </h2>
      <Map />
    </>
  );
};

export default Location;
