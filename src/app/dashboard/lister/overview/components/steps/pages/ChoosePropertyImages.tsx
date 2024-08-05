import { useLocalStorage } from "@uidotdev/usehooks";
import style from "../../../index.module.css";
import CallOut from "../../../../../../../components/__shared/ui/CallOut";
import { useField } from "formik";
import { ListingDefaultValues } from "@/store/dashboard/ListingStepsStore";

export default function ChoosePropertyImages() {
  const [field, meta, helpers] = useField("images");

  const [ListingCreationSteps, setListingCreationSteps] = useLocalStorage<
    typeof ListingDefaultValues
  >("listing-creation-steps");

  const handleAmenityClick = (r: any) => {
    if (field.value?.includes(r?.name)) {
      helpers.setValue(field.value?.filter((item: any) => item !== r?.name));
      setListingCreationSteps({
        ...ListingCreationSteps,
        images: field.value?.filter((item: any) => item !== r?.name),
      });
    } else {
      helpers.setValue([...field.value, r?.name]);
      setListingCreationSteps({
        ...ListingCreationSteps,
        images: [...field.value, r?.name] as any,
      });
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className="mb-10 flex w-full flex-col gap-8">
          <h2 className={`${style.titleNoMargin}`}>
            Choose your property images{" "}
            <span className={style.asterisk}>*</span>
          </h2>
          <CallOut content="You can add or remove an image after you publish your listing." />
        </div>
      </div>
    </>
  );
}
