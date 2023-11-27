import { styled } from "@stitches/react";
import { FaWifi } from "react-icons/fa";
import { MdOutlineLocalGasStation } from "react-icons/md";

import { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import Water from "../../listing-form/components/icons/Water";
import Electricity from "../../listing-form/components/icons/Electricity";
import SateliteTv from "../../listing-form/components/icons/SateliteTv";
import Internet from "../../listing-form/components/icons/Internet";
import Amenity from "../../listing-form/components/Amenity";
import styles from './index.module.css'
import { BeMyAgentFormType } from "./types";

const data = [
  { name: "water", icon: <Water  /> },
  { name: "gas", icon: <MdOutlineLocalGasStation size="44" /> },
  { name: "electricity", icon: <Electricity /> },
  { name: "satelite tv", icon: <SateliteTv  /> },
  { name: "internet", icon: <Internet /> },
];

export default function Utilities() {

  const [selected, setSelected] = useState<any>([]);

  const [listingFormData, setlistingFormData] = useLocalStorage<BeMyAgentFormType>("agent-form");

  const handleAmenityClick = (r: any) => {
    if (selected.includes(r?.name)) {
      setSelected(selected.filter((item: any) => item !== r?.name));
    } else {
      setSelected([...selected, r?.name]);
    }
  };

  useEffect(() => {
    setlistingFormData((prevData: any) => ({
      ...prevData,
      utilities: selected,
    }));
  }, [selected?.length]);

  useEffect(() => {
    if (listingFormData?.utilities) {
      setSelected(listingFormData?.utilities);
    }
  }, []);
  return (
    <>
      <Root className="flex flex-col w-full items-center justify-center ">
        <div className="w-full flex flex-col items-center justify-center gap-6">
          <div className="w-full flex flex-col gap-2">
          <p className={`${styles.title} font-semibold`}>
              Utilities
            </p>
            <p className="text-[1rem] font-[400]">
              You can add more utilities after you publish your listing
            </p>
          </div>
          <div className="grid grid-cols-3 w-full gap-2  lg:gap-y-0">
            {data.map((r: any, index: number) => (
              <div
                key={index}
                className="col-span-2  lg:col-span-1"
                onClick={() => handleAmenityClick(r)}>
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
