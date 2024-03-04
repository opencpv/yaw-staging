import { useState } from "react";
import Amenity from "@/app/components/listing-form/components/Amenity";
import styles from "../../index.module.css";
import { useField } from "formik";
import { requiredFeatures } from "@/app/dashboard/components/shared/content";
import InfoText from "@/app/components/listing-form/components/InfoText";

const RequiredFeatures = () => {
  const [selected, setSelected] = useState<any>([]);
  const [field, meta, helpers] = useField("requiredFeatures");

  const handleAmenityClick = (r: any) => {
    if (field.value?.includes(r?.name)) {
      // setSelected(selected?.filter((item: any) => item !== r?.name));
      helpers.setValue(field.value?.filter((item: any) => item !== r?.name));
    } else {
      // setSelected([...selected, r?.name]);
      helpers.setValue([...field.value, r?.name]);
    }
  };

  // useEffect(() => {
  //   setAgentFormData((prevData: any) => ({
  //     ...prevData,
  //     featuresAndAmenities: selected,
  //   }));
  // }, [selected, setAgentFormData]);

  // useEffect(() => {
  //   if (agentFormData?.featuresAndAmenities) {
  //     setSelected(agentFormData?.featuresAndAmenities);
  //   }
  // }, []);

  return (
    <>
      <section>
        <div className="mb-10 flex w-full flex-col gap-8">
          <h2 className={`${styles.titleNoMargin}`}>Required Features</h2>
          <InfoText content="You may select more than one response" />
        </div>
        <div className="grid w-full grid-cols-4 gap-5 lg:grid-cols-3">
          {requiredFeatures.map((r: any, index: number) => (
            <div
              key={index}
              className="col-span-2 lg:col-span-1"
              onClick={() => handleAmenityClick(r)}
            >
              <Amenity
                n={index}
                name={r?.name}
                icon={r?.icon}
                selected={field.value?.includes(r?.name)}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RequiredFeatures;
