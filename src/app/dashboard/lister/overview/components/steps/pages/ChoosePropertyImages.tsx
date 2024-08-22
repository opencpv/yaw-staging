import { useLocalStorage } from "@uidotdev/usehooks";
import style from "../../../index.module.css";
import CallOut from "../../../../../../../components/__shared/ui/callout";
import { useField } from "formik";
import { ListingDefaultValues } from "@/store/dashboard/ListingStepsStore";
import dynamic from "next/dynamic";
const ImageUploader = dynamic(() => import("../ImageUploader"));

export default function ChoosePropertyImages() {
  const [field, meta, helpers] = useField("images");

  const [ListingCreationSteps, setListingCreationSteps] = useLocalStorage<
    typeof ListingDefaultValues
  >("listing-creation-steps");

  return (
    <div className={style.container}>
      <div className="mb-10 flex w-full flex-col gap-8">
        <h2 className={`${style.titleNoMargin}`}>
          Choose your property images <span className={style.asterisk}>*</span>
        </h2>
        <CallOut content="You can add or remove an image after you publish your listing." />
        <ImageUploader />
      </div>
    </div>
  );
}
