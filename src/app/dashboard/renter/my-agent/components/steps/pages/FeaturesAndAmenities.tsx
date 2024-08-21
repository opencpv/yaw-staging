import { useLocalStorage } from "@uidotdev/usehooks";
import Amenity from "@/app/dashboard/components/shared/ui/Amenity";
import style from "../../../index.module.css";
import { useField } from "formik";
import { features } from "../../../../../components/shared/content";
import CallOut from "@/components/__shared/ui/CallOut";
import { BeMyAgentDefaultValues } from "@/store/dashboard/BeMyAgentStepsStore";

export default function FeaturesAndAmenities() {
  const [field, meta, helpers] = useField("features");
  const [BeMyAgentCreationSteps, setBeMyAgentCreationSteps] =
    useLocalStorage<typeof BeMyAgentDefaultValues>("bma-creation-steps");

  const handleAmenityClick = (r: any) => {
    if (field.value?.includes(r?.name)) {
      helpers.setValue(field.value?.filter((item: any) => item !== r?.name));
      setBeMyAgentCreationSteps({
        ...BeMyAgentCreationSteps,
        features: field.value?.filter((item: any) => item !== r?.name),
      });
    } else {
      helpers.setValue([...field.value, r?.name]);
      setBeMyAgentCreationSteps({
        ...BeMyAgentCreationSteps,
        features: [...field.value, r?.name] as any,
      });
    }
  };

  return (
    <div className={style.container}>
      <div className={style.titleCallOutContainer}>
        <h2 className={`${style.titleNoMargin}`}>
          Required Features <span className={style.asterisk}>*</span>
        </h2>
        <CallOut content="You may select more than one response" />
      </div>
      <div className={style.amenityGrid}>
        {features.map((r, index: number) => (
          <Amenity
            key={r?.name}
            n={index}
            name={r?.name}
            icon={r?.icon}
            selected={field.value?.includes(r?.name)}
            onClick={() => handleAmenityClick(r)}
          />
        ))}
      </div>
    </div>
  );
}
