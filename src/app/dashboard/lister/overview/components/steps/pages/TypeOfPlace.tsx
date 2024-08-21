import { useLocalStorage } from "@uidotdev/usehooks";
import Amenity from "@/app/dashboard/components/shared/Amenity";
import style from "../../../index.module.css";
import { useField } from "formik";
import { properties } from "../../../../../components/shared/content";
import { ListingDefaultValues } from "@/store/dashboard/ListingStepsStore";

export default function TypeOfPlace() {
  const [field, meta, helpers] = useField("property_type");

  const [ListingCreationSteps, setListingCreationSteps] = useLocalStorage<
    typeof ListingDefaultValues
  >("listing-creation-steps");

  const handleAmenityClick = (r: string) => {
    helpers.setValue(r);
    setListingCreationSteps({
      ...ListingCreationSteps,
      property_type: r,
    });
  };

  return (
    <div className={style.container}>
      <h2 className={`${style.title}`}>
        Which of these best describes your property?{" "}
        <span className={style.asterisk}>*</span>
      </h2>
      <div className={style.subHeadingGap}>
        <h3 className={style.subHeading}>Types of Place</h3>
        <div className={style.amenityGrid}>
          {properties.map((r, index: number) => (
            <Amenity
              key={r.name}
              n={index}
              name={r?.name}
              icon={r?.icon}
              selected={field.value === r.name}
              onClick={() => handleAmenityClick(r.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
