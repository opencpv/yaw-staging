//@ts-check
import { styled } from "@stitches/react";
import { FaWifi } from "react-icons/fa";
import SlideEnter from "./SlideEnter";
import { MdOutlineLocalGasStation } from "react-icons/md";
import Internet from "./icons/Internet";
import SateliteTv from "./icons/SateliteTv";
import Electricity from "./icons/Electricity";
import Water from "./icons/Water";
import Amenity from "./Amenity";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const data = [
  { name: "water", icon: <Water /> },
  { name: "gas", icon: <MdOutlineLocalGasStation size="44" /> },
  { name: "electricity", icon: <Electricity /> },
  { name: "satelite tv", icon: <SateliteTv /> },
  { name: "internet", icon: <Internet /> },
];

export default function Utilities() {
  const [selected, setSelected] = useState<any>([]);

  const [listingFormData, setlistingFormData] = useLocalStorage(
    "listing-form",
    {
      utilities: [],
    },
  );

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
      <Root className="flex w-full flex-col items-center justify-center ">
        <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-[75%]">
          <div className="flex w-full flex-col gap-2">
            <p className="text-[1.25rem] font-semibold lg:text-[1.93755rem]">
              Utilities
            </p>
            <p className="text-[1rem] font-[400]">
              You can add more utilities after you publish your listing
            </p>
          </div>
          <div className="grid w-full grid-cols-4 gap-2  lg:gap-y-0">
            {data.map((r: any, index: number) => (
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
