import styles from "../../index.module.css";
import { CustomDatePicker } from "@/app/components/CustomDatePicker";
import { useLocalStorage } from "@uidotdev/usehooks";
import CustomSelect from "@/app/components/CustomSelect";
import { FirstToKnowFormType } from "../types";
import InfoText from "@/app/components/listing-form/components/InfoText";
import TextFieldInput from "@/app/components/TextFieldInput";

const Location = () => {
  return (
    <>
      <h2 className={`${styles.titleNoMargin}`}>Location</h2>
       Map
    </>
  );
};

export default Location;
