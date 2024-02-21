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
import styles from "./index.module.css";
import { BeMyAgentFormType } from "./types";
import { TbDroplets } from "react-icons/tb";
import { PiMonitorLight } from "react-icons/pi";

const data = [
  { name: "water", icon: <TbDroplets size="44" /> },
  { name: "gas", icon: <MdOutlineLocalGasStation size="44" /> },
  { name: "electricity", icon: <Electricity /> },
];

export default function Utilities() {
  const [listingFormData, setlistingFormData] =
    useLocalStorage<BeMyAgentFormType>("agent-form");

  const [selected, setSelected] = useState<any>(listingFormData?.utilities);

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
      <Root>
        <div className="mb-10 flex w-full flex-col gap-2">
          <h2 className={`${styles.titleNoMargin}`}>Utilities</h2>
          <h4 className="font-[400]">
            You can add more utilities after you publish your listing
          </h4>
        </div>
        <div className="grid w-full grid-cols-4 gap-2 lg:grid-cols-3 lg:gap-y-0">
          {data.map((r: any, index: number) => (
            <div
              key={index}
              className="col-span-2  lg:col-span-1"
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
