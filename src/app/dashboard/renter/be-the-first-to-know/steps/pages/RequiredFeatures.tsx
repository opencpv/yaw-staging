import { useState } from "react";
import Amenity from "@/app/components/listing-form/components/Amenity";
import styles from "../../index.module.css";
import { useField } from "formik";
import { requiredFeatures } from "@/app/dashboard/components/shared/content";

const RequiredFeatures = () => {
  const [selected, setSelected] = useState<any>([]);
  const [field, meta, helpers] = useField("featuresAndAmenities");

  const handleAmenityClick = (r: any) => {
    if (selected?.includes(r?.name)) {
      setSelected(selected?.filter((item: any) => item !== r?.name));
      helpers.setValue(selected?.filter((item: any) => item !== r?.name));
    } else {
      setSelected([...selected, r?.name]);
      helpers.setValue([...selected, r?.name]);
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
        <h2 className={`${styles.title}`}>Required Features</h2>
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
                selected={selected?.includes(r?.name)}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RequiredFeatures;
