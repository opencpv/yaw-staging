import Amenity from "@/app/dashboard/components/shared/ui/Amenity";
import style from "../../../index.module.css";
import { useField } from "formik";
import { features } from "@/app/dashboard/components/shared/content";
import Callout from "@/components/__shared/ui/callout/callout";
import { BTFTKDefaultValues } from "@/store/dashboard/BTFTKStepsStore";
import { useLocalStorage } from "@uidotdev/usehooks";

const RequiredFeatures = () => {
  const [field, meta, helpers] = useField("requiredFeatures");
  const [BTFTKCreationSteps, setBTFTKCreationSteps] = useLocalStorage<
    typeof BTFTKDefaultValues
  >("btftk-creation-steps");

  const handleAmenityClick = (r: any) => {
    if (field.value?.includes(r?.name)) {
      helpers.setValue(field.value?.filter((item: any) => item !== r?.name));
      setBTFTKCreationSteps({
        ...BTFTKCreationSteps,
        requiredFeatures: field.value?.filter((item: any) => item !== r?.name),
      });
    } else {
      helpers.setValue([...field.value, r?.name]);
      setBTFTKCreationSteps({
        ...BTFTKCreationSteps,
        requiredFeatures: [...field.value, r?.name] as any,
      });
    }
  };

  return (
    <section>
      <div className={style.titleCallOutContainer}>
        <h2 className={`${style.titleNoMargin}`}>
          Required Features <span className={style.asterisk}>*</span>
        </h2>
        <Callout content="You may select more than one response" />
      </div>
      <div className={style.amenityGrid}>
        {features.map((r: any, index: number) => (
          <Amenity
            key={index}
            n={index}
            name={r?.name}
            icon={r?.icon}
            selected={field.value?.includes(r?.name)}
            onClick={() => handleAmenityClick(r)}
          />
        ))}
      </div>
    </section>
  );
};

export default RequiredFeatures;
