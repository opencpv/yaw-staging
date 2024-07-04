import Amenity from "@/components/__shared/ui/listing-form/components/Amenity";
import styles from "../../../index.module.css";
import { useField } from "formik";
import { requiredFeatures } from "@/app/dashboard/components/shared/content";
import CallOut from "@/components/__shared/ui/CallOut";
import { createUUID } from "@/lib/utils/stringManipulation";
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
    <>
      <section>
        <div className="mb-10 flex w-full flex-col gap-8">
          <h2 className={`${styles.titleNoMargin}`}>
            Required Features <span className="text-sm text-shade-300">*</span>
          </h2>
          <CallOut content="You may select more than one response" />
        </div>
        <div className="grid w-full grid-cols-4 gap-5 lg:grid-cols-3">
          {requiredFeatures.map((r: any, index: number) => (
            <Amenity
              key={createUUID()}
              n={index}
              name={r?.name}
              icon={r?.icon}
              selected={field.value?.includes(r?.name)}
              onClick={() => handleAmenityClick(r)}
              className="col-span-2 lg:col-span-1"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default RequiredFeatures;
