import { styled } from "@stitches/react";
import SlideEnter from "./SlideEnter";
import Image from "next/image";
import { NavigationButton } from "./LeaseForm";

export default function Congratulations() {
  return (
    <SlideEnter>
      <Root className="w-full flex items-start lg:items-center justify-center h-full flex-col gap-2  px-10 lg:px-24">
        <div className="relative w-full max-w-[448px] aspect-square rounded-full h-full animate animate-ping cel-image "
        >
          <Image
            src="/assets/images/balloon-congratulation.png"
            alt="Lease Image Form"
            fill
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <p className="text-[1.8rem] lg:text-[39px] font-semibold w-full lg:w-fit hover:animate hover:animate-appearance-in">Congratulations</p>
        <p className="text-[19px] lg:text-[21px] font-[400] w-full lg:w-fit">You have successfully created your property listing</p>
        <NavigationButton className="bg-accent-50 text-white mt-5 animate animate-bounce">Preview</NavigationButton>
      </Root>
    </SlideEnter>
  );
}

const Root = styled("div", {
    ".cel-image":{
        backgroundColor:"#d3d3d352"
    }
});
