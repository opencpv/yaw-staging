import { styled } from "@stitches/react";
import { FaWifi } from "react-icons/fa";

type AmenityProp = {
  icon: any;
  name: string;
};
export const Amenity = ({ icon, name }: AmenityProp) => {
  return (
    <div
      className="flex flex-col aspect-[261/161] max-w-[261px] w-full gap-4 items-center justify-center hover:bg-slate-200 hover:scale-[1.05] cursor-pointer rounded-xl"
      style={{
        boxShadow:
          "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
      }}>
      {icon}
      {name}
    </div>
  );
};

export default function Utilities() {
  return (
    <Root className="flex flex-col w-full items-center justify-center p-5">
      <div className="w-full lg:w-[75%] flex flex-col items-center justify-center gap-6">
        <div className="w-full flex flex-col gap-2">
          <p className="text-[25px] lg:text-[31px] font-semibold">Utilities</p>
          <p className="text-[16px] font-[400]">
            You can add more amenities after you publish your listing
          </p>
        </div>
        <div className="grid grid-cols-4 w-full gap-2  lg:gap-y-0 lg:min-h-[70vh]">
          <div className="col-span-2 lg:col-span-1  items-start justify-center amenity-col">
            <Amenity icon={<FaWifi />} name="wifi" />
          </div>
          <div className="col-span-2 lg:col-span-1  amenity-col">
            <Amenity icon={<FaWifi />} name="wifi" />
          </div>{" "}
          <div className="col-span-2 lg:col-span-1  amenity-col">
            <Amenity icon={<FaWifi />} name="wifi" />
          </div>{" "}
          <div className="col-span-2 lg:col-span-1  amenity-col">
            <Amenity icon={<FaWifi />} name="wifi" />
          </div>
        </div>
      </div>
    </Root>
  );
}

const Root = styled("div", {
  ".amenity-col": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    justifyContent: "center",
    alignItems: "center",
  },
});
