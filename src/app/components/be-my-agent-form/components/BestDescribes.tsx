import { FaWifi } from "react-icons/fa";
import { styled } from "@stitches/react";

import {
  MdApartment,
  MdOutlineHouse,
  MdOutlineWarehouse,
} from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { BsHouse } from "react-icons/bs";
import { LuWarehouse } from "react-icons/lu";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import TownHouse from "../../listing-form/components/icons/TownHouse";
import DetachedHouse from "../../listing-form/components/icons/DetachedHouse";
import PentHouse from "../../listing-form/components/icons/PentHouse";
import Amenity from "../../listing-form/components/Amenity";
import styles from "./index.module.css";

import InfoText from "../../listing-form/components/InfoText";
import { BeMyAgentFormType } from "./types";

const properties = [
  { name: "apartment", icon: <MdApartment size="44" /> },
  { name: "house", icon: <MdOutlineHouse size="44" /> },
  { name: "town house", icon: <TownHouse /> },
  { name: "detached house", icon: <DetachedHouse /> },
  { name: "semi-detached house", icon: <BsHouse size="44" /> },
  { name: "self contain", icon: <LuWarehouse size="44" /> },
  { name: "compound house", icon: <MdOutlineWarehouse size="44" /> },
  { name: "mansion", icon: <GiFamilyHouse size="44" /> },
  { name: "penthouse", icon: <PentHouse /> },
];

type Props = {
  infoText?: boolean;
};

export default function BestDescribes({ infoText }: Props) {
  const [selected, setSelected] = useState<any>([]);
  const [agentFormData, setagentFormData] = useLocalStorage<BeMyAgentFormType>(
    "agent-form",
    {
      maritalStatus: "Single",
      leaseTerm: "12 months",
      gender: "Male",
    }
  );

  const handleAmenityClick = (r: any) => {
    if (selected.includes(r?.name)) {
      setSelected(selected.filter((item: any) => item !== r?.name));
    } else {
      setSelected([...selected, r?.name]);
    }
  };

  useEffect(() => {
    setagentFormData((prevData: any) => ({
      ...prevData,
      propertyType: selected,
    }));
  }, [selected]);

  useEffect(() => {
    if (agentFormData?.propertyType) {
      setSelected(agentFormData?.propertyType);
    }
  }, []);

  return (
    <>
      <Root className="flex flex-col w-full items-center justify-center ">
        <div className="w-full flex flex-col items-center justify-center gap-1">
          <div className="w-full flex flex-col gap-8">
            <p className={`${styles.title} font-semibold`}>
              Which of these best describes the place you’re looking for?{" "}
            </p>
            {infoText && (
              <InfoText content="You may select more than one response" />
            )}
            <p className="text-[1.25rem] font-[400]">Property Type </p>
          </div>
          <div
            className="grid grid-cols-4 lg:grid-cols-3 w-full
            gap-y-5 gap-x-5
            ">
            {properties.map((r: any, index: number) => (
              <div
                key={index}
                className="col-span-2 lg:col-span-1"
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
