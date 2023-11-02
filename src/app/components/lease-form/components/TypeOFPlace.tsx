import { styled } from "@stitches/react";
import SlideEnter from "./SlideEnter";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function TypeOfPlace() {
  const [selected, setSelected] = useState<any>("");
  const [leaseFormData, setLeaseFormData] = useLocalStorage("lease-form", {
    typeOfPlace:""
  });

  useEffect(() => {
    if (selected) {
      setLeaseFormData((prevData: any) => ({
        ...prevData,
        typeOfPlace: selected,
      }));
    }
  }, [selected]);

  useEffect(() => {
    setSelected(leaseFormData?.typeOfPlace);
  }, []);

  return (
    <SlideEnter>
      <Root className="w-full h-full flex-col items-center justify-center grid grid-cols-8">
        <div></div>
        <div className="col-span-5 flex flex-col w-full items-start justify-center  gap-8">
          <p className="text-[31px] font-semibold ">
            What type of place will guests have?
          </p>
          <div className="w-full flex flex-col gap-6">
            <div
              className={`example ${
                selected == "furnished" && "active-example"
              } `}
              onClick={() => setSelected("furnished")}>
              <p className="example-header">Furnished</p>
              <p className="example-p">
                Guests will enjoy a fully furnished retreat, complete with all
                the comforts and conveniences needed for a relaxing stay.
              </p>
            </div>
            <div
              className={`example ${
                selected == "semi furnished" && "active-example"
              } `}
              onClick={() => setSelected("semi furnished")}>
              <p className="example-header">Semi Furnished</p>
              <p className="example-p">
                Our semi-furnished accommodations strike the perfect balance,
                offering essential amenities while leaving room for guests to
                add their personal touch to the space.
              </p>
            </div>
            <div
              className={`example ${
                selected == "not furnished" && "active-example"
              } `}
              onClick={() => setSelected("not furnished")}>
              <p className="example-header">Not Furnished</p>
              <p className="example-p">
                Guests can look forward to a blank canvas, allowing them to
                create their own unique living environment in an unfurnished
                space.
              </p>
            </div>
          </div>
        </div>
      </Root>
    </SlideEnter>
  );
}

const Root = styled("div", {
  ".active-example": {
    border: "1px solid #0B0B0B0",
    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)"
  },
  ".example": {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    gap: "1rem",
    paddingInline: "1rem",
    paddingBlock: "1.3rem",

    "&:hover": {
      scale: "1.02",
      backgroundColor: " rgb(226 232 240)",
    },
  },
  ".example-header": {
    fontSize: "1.5625rem",
    fontWeight: "600",
  },
  ".example-p": {
    fontSize: "1rem",
    fontWeight: "400",
    color: "#8A8A8A",
    maxWidth: "541px",
  },
});
