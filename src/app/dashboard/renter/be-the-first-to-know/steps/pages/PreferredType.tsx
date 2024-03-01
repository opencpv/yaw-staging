import { styled } from "@stitches/react";
import { useState } from "react";
import Amenity from "@/app/components/listing-form/components/Amenity";
import styles from "../../index.module.css";
import InfoText from "@/app/components/listing-form/components/InfoText";
import { useField } from "formik";
import { properties } from "@/app/dashboard/components/shared/content";

export default function PreferredType() {
  const [selected, setSelected] = useState<any>([]);

  const [field, meta, helpers] = useField("propertyType");

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
  //     propertyType: selected,
  //   }));
  // }, [selected, setAgentFormData]);

  // useEffect(() => {
  //   if (agentFormData?.propertyType) {
  //     setSelected(agentFormData?.propertyType);
  //   }
  // }, []); // !!!WARNING: Dependency causes Maximum update depth exceed error. Fix required

  return (
    <>
      <section>
        <div className="mb-10 flex w-full flex-col gap-8">
          <h2 className={`${styles.titleNoMargin}`}>Preferred Type</h2>
          <InfoText content="You may select more than one response" />
        </div>
        <div className="space-y-4">
          <h3 className="font-normal">Types of Place</h3>
          <div className="grid w-full grid-cols-4 gap-5 lg:grid-cols-3">
            {properties.map((r: any, index: number) => (
              <div
                key={index}
                className="col-span-2 h-full lg:col-span-1"
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
        </div>
      </section>
    </>
  );
}
