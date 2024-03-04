import { styled } from "@stitches/react";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import Amenity from "../../../../../../components/listing-form/components/Amenity";
import styles from "../../index.module.css";
import { BeMyAgentFormType } from "../types";
import { useField } from "formik";
import { requiredFeatures } from "../../../content";
import InfoText from "@/app/components/listing-form/components/InfoText";

export default function FeaturesAndAmenities() {
  const [agentFormData, setAgentFormData] =
    useLocalStorage<BeMyAgentFormType>("agent-form");
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

  useEffect(() => {
    setAgentFormData((prevData: any) => ({
      ...prevData,
      featuresAndAmenities: selected,
    }));
  }, [selected, setAgentFormData]);

  useEffect(() => {
    if (agentFormData?.featuresAndAmenities) {
      setSelected(agentFormData?.featuresAndAmenities);
    }
  }, []);

  return (
    <>
      <Root>
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
                selected={selected?.includes(r?.name)}
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
