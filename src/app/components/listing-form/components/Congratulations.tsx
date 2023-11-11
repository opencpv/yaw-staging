import { styled } from "@stitches/react";
import SlideEnter from "./SlideEnter";
import Image from "next/image";
import { NavigationButton } from "./ListingFormForm";
import FeedBack from "./FeedBack";

export default function Congratulations() {
  return (
    <>
      <Root className="w-full flex items-center justify-center h-full flex-col gap-2 lg:px-24">
        <div className="relative w-full max-w-[448px] aspect-square rounded-full h-full  cel-image ">
          <Image
            src="/assets/images/balloon-congratulation.png"
            alt="Lease Image Form"
            fill
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <p className="text-[1.8rem] lg:text-[39px] font-semibold w-full lg:w-fit hover:animate hover:animate-appearance-in">
          Congratulations
        </p>
        <p className="text-[19px] lg:text-[21px] font-[400] w-full lg:w-fit">
          You have successfully created your property listing
        </p>
        <FeedBack />
      </Root>
    </>
  );
}

const Root = styled("div", {
  ".cel-image": {
    backgroundColor: "#d3d3d352",
  },
});
