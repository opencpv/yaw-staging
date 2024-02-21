import { FaWifi } from "react-icons/fa";
import { styled } from "@stitches/react";

import {
  MdApartment,
  MdOutlineApartment,
  MdOutlineHouse,
  MdOutlineWarehouse,
} from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { BsHouse, BsHouses } from "react-icons/bs";
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
import { HiOutlineBuildingOffice } from "react-icons/hi2";

const properties = [
  { name: "apartment", icon: <MdOutlineApartment size="44" /> },
  { name: "house", icon: <MdOutlineHouse size="44" /> },
  { name: "town house", icon: <TownHouse /> },
  { name: "detached house", icon: <DetachedHouse /> },
  { name: "semi-detached house", icon: <BsHouses size="44" /> },
  { name: "self contain", icon: <LuWarehouse size="44" /> },
  { name: "compound house", icon: <MdOutlineWarehouse size="44" /> },
  { name: "mansion", icon: <HiOutlineBuildingOffice size="44" /> },
  { name: "penthouse", icon: <PentHouse /> },
];

type Props = {
  infoText?: boolean;
};

export default function BestDescribes({ infoText }: Props) {
  const [agentFormData, setagentFormData] = useLocalStorage<BeMyAgentFormType>(
    "agent-form",
    {
      // maritalStatus: "Single",
      // leaseTerm: "12 months",
      // gender: "Male",
    },
  );
  const [selected, setSelected] = useState<any>(agentFormData?.propertyType);

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
  }, [selected, setagentFormData]);

  useEffect(() => {
    if (agentFormData?.propertyType) {
      setSelected(agentFormData?.propertyType);
    }
  }, []); // !!!WARNING: Dependency causes Maximum update depth exceed error. Fix required

  return (
    <>
      <Root>
        <div className="mb-10 flex w-full flex-col gap-8">
          <h2 className={`${styles.titleNoMargin}`}>Preferred Type</h2>
          {infoText && (
            <InfoText content="You may select more than one response" />
          )}
        </div>
        <div className="space-y-4">
          <h3 className="font-normal">Type of Place</h3>
          <div className="grid w-full grid-cols-4 gap-5 lg:grid-cols-3">
            {properties.map((r: any, index: number) => (
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
