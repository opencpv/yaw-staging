import { FaWifi } from "react-icons/fa";
import { styled } from "@stitches/react";
import SlideEnter from "./SlideEnter";

import {
  MdApartment,
  MdOutlineHouse,
  MdOutlineWarehouse,
} from "react-icons/md";
import TownHouse from "./icons/TownHouse";
import { GiFamilyHouse } from "react-icons/gi";
import DetachedHouse from "./icons/DetachedHouse";
import { BsHouse } from "react-icons/bs";
import { LuWarehouse } from "react-icons/lu";
import PentHouse from "./icons/PentHouse";
import Amenity from "./Amenity";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const properties = [
  { name: "apartment", icon: <MdApartment size="44" /> },
  { name: "house", icon: <MdOutlineHouse size="44" /> },
  { name: "town house", icon: <TownHouse /> },
  { name: "detached house", icon: <DetachedHouse  /> },
  { name: "semi-detached house", icon: <BsHouse size="44" /> },
  { name: "self contain", icon: <LuWarehouse size="44" /> },
  { name: "compound house", icon: <MdOutlineWarehouse size="44" /> },
  { name: "mansion", icon: <GiFamilyHouse size="44" /> },
  { name: "penthouse", icon: <PentHouse  /> },
];

export default function BestDescribes() {
  const [selected, setSelected] = useState<any>();
  const [listingFormData, setListingFormData] = useLocalStorage("listing-form", {
    propertyType: "",
  });

  const handleAmenityClick = (r: any) => {
    if (selected == r?.name) {
      setSelected("");
    } else {
      setSelected(r?.name);
    }
  };

  useEffect(() => {
    setListingFormData((prevData: any) => ({
      ...prevData,
      propertyType: selected,
    }));
  }, [selected]);

  useEffect(() => {
    setSelected(listingFormData?.propertyType);
  }, []);

  return (
    <>
      <Root className="flex flex-col w-full items-center justify-center ">
        <div className="w-full lg:w-[75%] flex flex-col items-center justify-center gap-6">
          <div className="w-full flex flex-col gap-2">
            <p className="text-[1.25rem] lg:text-[1.9375rem] font-semibold">
              Which of these best describes your property?
            </p>
            <p className="text-[1.25rem] font-[400]">Property Type </p>
          </div>
          <div
            className="grid grid-cols-4 w-full
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
                  selected={selected == r?.name}
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
