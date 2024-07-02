//@ts-check
import { FaWifi } from "react-icons/fa";
import { styled } from "@stitches/react";
import SlideEnter from "./SlideEnter";
import { PiStudentDuotone } from "react-icons/pi";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import Amenity from "./Amenity";
import CallOut from "../../CallOut";
import styles from "./index.module.css";

const data = [
  { name: "students", icon: <PiStudentDuotone size="44" /> },
  { name: "family", icon: <MdOutlineFamilyRestroom size="44" /> },
  { name: "expatriates", icon: <FaPersonWalkingLuggage size="44" /> },
];

export default function SuitedFor() {
  const [selected, setSelected] = useState<any>([]);
  const [listingFormData, setlistingFormData] = useLocalStorage(
    "listing-form",
    {
      suitedFor: [],
    },
  );

  const handleOptionsClick = (r: any) => {
    if (selected?.includes(r?.name)) {
      setSelected(selected.filter((item: any) => item !== r?.name));
    } else {
      setSelected([...selected, r?.name]);
    }
  };

  useEffect(() => {
    setlistingFormData((prevData: any) => ({
      ...prevData,
      suitedFor: selected,
    }));
  }, [selected?.length]);

  useEffect(() => {
    if (listingFormData?.suitedFor) {
      setSelected(listingFormData?.suitedFor);
    }
  }, []);

  return (
    <>
      <Root className="flex h-full w-full flex-col items-center justify-center ">
        <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-[75%]">
          <div className="flex w-full flex-col gap-2">
            <p className={`${styles.title} font-semibold`}>
              What type of renter is your property best suited for?{" "}
            </p>
          </div>
          <CallOut content="You may select more than one response" />
          <div
            className="grid w-full grid-cols-4
            gap-x-5 gap-y-5"
          >
            {data.map((r: any, index: number) => (
              <div
                key={index}
                className="col-span-2 lg:col-span-1"
                onClick={() => handleOptionsClick(r)}
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
