import { useLocalStorage } from "@uidotdev/usehooks";
import Amenity from "@/app/dashboard/components/shared/ui/Amenity";
import style from "../../../index.module.css";
import CallOut from "../../../../../../../components/__shared/ui/CallOut";
import { useField } from "formik";
import { suitedFor } from "../../../../../components/shared/content";
import { ListingDefaultValues } from "@/store/dashboard/ListingStepsStore";

export default function SuitedFor() {
  const [field, meta, helpers] = useField("suited_for");

  const [ListingCreationSteps, setListingCreationSteps] = useLocalStorage<
    typeof ListingDefaultValues
  >("listing-creation-steps");

  const handleAmenityClick = (r: string) => {
    if (field.value?.includes(r)) {
      helpers.setValue(field.value?.filter((item: any) => item !== r));
      setListingCreationSteps({
        ...ListingCreationSteps,
        suited_for: field.value?.filter((item: any) => item !== r),
      });
    } else {
      helpers.setValue([...field.value, r]);
      setListingCreationSteps({
        ...ListingCreationSteps,
        suited_for: [...field.value, r] as any,
      });
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.titleCallOutContainer}>
          <h2 className={`${style.titleNoMargin}`}>
            What type of renter is your property best suited for?{" "}
            <span className={style.asterisk}>*</span>
          </h2>
          <CallOut content="You may select more than one response" />
        </div>

        <div className={style.amenityGrid}>
          {suitedFor.map((r, index: number) => (
            <Amenity
              key={r?.name}
              n={index}
              name={r?.name}
              icon={r?.icon}
              selected={field.value?.includes(r?.name)}
              onClick={() => handleAmenityClick(r.name)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
