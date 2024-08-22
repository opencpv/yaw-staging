import Amenity from "@/app/dashboard/components/shared/ui/Amenity";
import style from "../../../index.module.css";
import CallOut from "@/components/__shared/ui/callout";
import { useField } from "formik";
import { properties } from "@/app/dashboard/components/shared/content";
import { BTFTKDefaultValues } from "@/store/dashboard/BTFTKStepsStore";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function PreferredType() {
  const [field, meta, helpers] = useField("preferredType");

  const [BTFTKCreationSteps, setBTFTKCreationSteps] = useLocalStorage<
    typeof BTFTKDefaultValues
  >("btftk-creation-steps");

  const handleAmenityClick = (r: any) => {
    if (field.value?.includes(r?.name)) {
      helpers.setValue(field.value?.filter((item: any) => item !== r?.name));
      setBTFTKCreationSteps({
        ...BTFTKCreationSteps,
        preferredType: field.value?.filter((item: any) => item !== r?.name),
      });
    } else {
      helpers.setValue([...field.value, r?.name]);
      setBTFTKCreationSteps({
        ...BTFTKCreationSteps,
        preferredType: [...field.value, r?.name] as any,
      });
    }
  };

  return (
    <section>
      <div className={style.titleCallOutContainer}>
        <h2 className={`${style.titleNoMargin}`}>
          Preferred Type <span className={style.asterisk}>*</span>
        </h2>
        <CallOut content="You may select more than one response" />
      </div>
      <div className={style.subHeadingFieldsContainer}>
        <h3 className="font-normal">Types of Place</h3>
        <div className={style.amenityGrid}>
          {properties.map((r: any, index: number) => (
            <Amenity
              key={index}
              n={index}
              name={r?.name}
              icon={r?.icon}
              selected={field.value.includes(r?.name)}
              onClick={() => handleAmenityClick(r)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
