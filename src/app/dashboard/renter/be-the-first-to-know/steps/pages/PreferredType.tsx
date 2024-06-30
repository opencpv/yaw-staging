import { styled } from "@stitches/react";
import { useState } from "react";
import Amenity from "@/components/__shared/ui/listing-form/components/Amenity";
import styles from "../../index.module.css";
import CallOut from "@/components/__shared/ui/CallOut";
import { useField } from "formik";
import { properties } from "@/app/dashboard/components/shared/content";
import { createUUID } from "@/lib/utils/stringManipulation";

export default function PreferredType() {
  const [selected, setSelected] = useState<any>([]);

  const [field, meta, helpers] = useField("preferredType");

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
  //     propertyType: selected,
  //   }));
  // }, [selected, setAgentFormData]);

  // useEffect(() => {
  //   if (agentFormData?.propertyType) {
  //     setSelected(agentFormData?.propertyType);
  //   }
  // }, []); // !!!WARNING: Dependency causes Maximum update depth exceed error. Fix required

  return (
    <section>
      <div className="mb-10 flex w-full flex-col gap-8">
        <h2 className={`${styles.titleNoMargin}`}>
          Preferred Type <span className="text-sm text-shade-300">*</span>
        </h2>
        <CallOut content="You may select more than one response" />
      </div>
      <div className="space-y-4">
        <h3 className="font-normal">Types of Place</h3>
        <div className="grid w-full grid-cols-4 gap-5 lg:grid-cols-3">
          {properties.map((r: any, index: number) => (
            <Amenity
              key={createUUID()}
              n={index}
              name={r?.name}
              icon={r?.icon}
              selected={field.value.includes(r?.name)}
              onClick={() => handleAmenityClick(r)}
              className="col-span-2 h-full lg:col-span-1"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
