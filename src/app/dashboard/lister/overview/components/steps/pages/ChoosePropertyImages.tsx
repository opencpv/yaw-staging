import style from "../../../index.module.css";
import Callout from "../../../../../../../components/__shared/ui/callout";
import dynamic from "next/dynamic";
import Loader from "@/components/__shared/ui/loader";
const ImageUploader = dynamic(() => import("../ImageUploader"), {
  loading: () => <Loader />,
});

export default function ChoosePropertyImages() {
  return (
    <div className={style.container}>
      <div className="mb-10 flex w-full flex-col gap-8">
        <h2 className={`${style.titleNoMargin}`}>
          Choose your property images <span className={style.asterisk}>*</span>
        </h2>
        <Callout content="You can add or remove an image after you publish your listing." />
        <ImageUploader />
      </div>
    </div>
  );
}
