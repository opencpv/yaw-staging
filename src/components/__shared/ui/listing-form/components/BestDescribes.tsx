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
  { name: "detached house", icon: <DetachedHouse /> },
  { name: "semi-detached house", icon: <BsHouse size="44" /> },
  { name: "self contain", icon: <LuWarehouse size="44" /> },
  { name: "compound house", icon: <MdOutlineWarehouse size="44" /> },
  { name: "mansion", icon: <GiFamilyHouse size="44" /> },
  { name: "penthouse", icon: <PentHouse /> },
];

export default function BestDescribes() {
  const [selected, setSelected] = useState<any>();
  const [listingFormData, setListingFormData] = useLocalStorage(
    "listing-form",
    {
      propertyType: "",
    },
  );

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
      <Root className="flex w-full flex-col items-center justify-center ">
        <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-[75%]">
          <div className="flex w-full flex-col gap-2">
            <p className="text-[1.25rem] font-semibold lg:text-[1.9375rem]">
              Which of these best describes your property?
            </p>
            <p className="text-[1.25rem] font-[400]">Property Type </p>
          </div>
          <div
            className="grid w-full grid-cols-4
            gap-x-5 gap-y-5
            "
          >
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
                  selected={selected == r?.name}
                  onClick={() => ""}
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
