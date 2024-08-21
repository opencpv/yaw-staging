import { useLocalStorage } from "@uidotdev/usehooks";
import Amenity from "@/app/dashboard/components/shared/Amenity";
import style from "../../../index.module.css";
import CallOut from "../../../../../../../components/__shared/ui/CallOut";
import { useField } from "formik";
import { features } from "../../../../../components/shared/content";
import { ListingDefaultValues } from "@/store/dashboard/ListingStepsStore";

export default function Features() {
  const [field, meta, helpers] = useField("features");

  const [ListingCreationSteps, setListingCreationSteps] = useLocalStorage<
    typeof ListingDefaultValues
  >("listing-creation-steps");

  const handleAmenityClick = (r: string) => {
    if (field.value?.includes(r)) {
      helpers.setValue(field.value?.filter((item: any) => item !== r));
      setListingCreationSteps({
        ...ListingCreationSteps,
        features: field.value?.filter((item: any) => item !== r),
      });
    } else {
      helpers.setValue([...field.value, r]);
      setListingCreationSteps({
        ...ListingCreationSteps,
        features: [...field.value, r] as any,
      });
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.titleCallOutContainer}>
          <h2 className={`${style.titleNoMargin}`}>
            Features <span className={style.asterisk}>*</span>
          </h2>
          <CallOut content="You can add more features after you publish your listing." />
        </div>

        <div className={style.amenityGrid}>
          {features.map((r, index: number) => (
            <Amenity
              key={r?.name}
              n={index}
              name={r?.name}
              icon={r?.icon}
              selected={field.value?.includes(r?.name)}
              onClick={() => handleAmenityClick(r?.name)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
