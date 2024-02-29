import styles from "../../index.module.css";
import { CustomDatePicker } from "@/app/components/CustomDatePicker";
import { useLocalStorage } from "@uidotdev/usehooks";
import CustomSelect from "@/app/components/CustomSelect";
import { FirstToKnowFormType } from "../types";
import InfoText from "@/app/components/listing-form/components/InfoText";

const Intro = () => {
  const [firstToKnowFormData, setFirstToKnowFormData] =
    useLocalStorage<FirstToKnowFormType>("first-to-know-form");

  const handleOnChange = (name: any, value: any) => {
    setFirstToKnowFormData({
      ...firstToKnowFormData,
      [name]: value,
    });
  };

  return (
    <>
      <h2 className={`${styles.title}`}>Property Requirements</h2>
      <div className="flex w-full flex-col gap-8">
        {/* Price range */}
        <div className="flex flex-col gap-4">
          <h3>Price Range</h3>
          <div className="grid grid-cols-2 gap-5"></div>
        </div>
        {/* Bed */}
        <div className="flex flex-col gap-4">
          <h3>Bed</h3>
          <div className="grid grid-cols-2 gap-5"></div>
        </div>
        {/* Bathroom */}
        <div className="flex flex-col gap-4">
          <h3>Bathroom</h3>
          <div className="grid grid-cols-2 gap-5"></div>
        </div>
        {/* Lease Terms */}
        <InfoText
          content="1-2 year lease with rent paid in advance are most common"
          className="mt-5"
        />
      </div>
    </>
  );
};

export default Intro;
