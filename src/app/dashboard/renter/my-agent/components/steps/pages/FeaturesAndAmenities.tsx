import { styled } from "@stitches/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import Amenity from "../../../../../../../components/__shared/ui/listing-form/components/Amenity";
import styles from "../../../index.module.css";
import { useField } from "formik";
import { features } from "../../../../../components/shared/content";
import CallOut from "@/components/__shared/ui/CallOut";
import { BeMyAgentDefaultValues } from "@/store/dashboard/BeMyAgentStepsStore";
import { createUUID } from "@/lib/utils/stringManipulation";

export default function FeaturesAndAmenities() {
  const [field, meta, helpers] = useField("requiredFeatures");
  const [BeMyAgentCreationSteps, setBeMyAgentCreationSteps] = useLocalStorage<
    typeof BeMyAgentDefaultValues
  >("bma-creation-steps");

  const handleAmenityClick = (r: any) => {
    if (field.value?.includes(r?.name)) {
      helpers.setValue(field.value?.filter((item: any) => item !== r?.name));
      setBeMyAgentCreationSteps({
        ...BeMyAgentCreationSteps,
        requiredFeatures: field.value?.filter((item: any) => item !== r?.name),
      });
    } else {
      helpers.setValue([...field.value, r?.name]);
      setBeMyAgentCreationSteps({
        ...BeMyAgentCreationSteps,
        requiredFeatures: [...field.value, r?.name] as any,
      });
    }
  };
  
  return (
    <>
      <Root>
        <div className="mb-10 flex w-full flex-col gap-8">
          <h2 className={`${styles.titleNoMargin}`}>
            Required Features <span className="text-sm text-shade-300">*</span>
          </h2>
          <CallOut content="You may select more than one response" />
        </div>
        <div className="grid w-full grid-cols-4 gap-5 lg:grid-cols-3">
          {features.map((r: any, index: number) => (
            <div
              key={index}
              className="col-span-2 lg:col-span-1"
              onClick={() => handleAmenityClick(r)}
            >
            <Amenity
              key={createUUID()}
              n={index}
              name={r?.name}
              icon={r?.icon}
              selected={field.value?.includes(r?.name)}
              onClick={() => handleAmenityClick(r)}
              className="col-span-2 lg:col-span-1"
            />
            </div>
          ))}
        </div>
      </Root>
    </>
  );
}

const Root = styled("div", {
  ".amenity-col": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (min-width: 1024px)": {
      justifyContent: "start",
    },
  },
});
