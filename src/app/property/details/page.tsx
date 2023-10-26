"use client";
import { styled } from "@stitches/react";
import PDHero from "./components/PDHero";

export default function Page() {
  return (
    <Root className="w-full">
      <PDHero />

      {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }} className="h-full min-h-[300px]:">
        <Masonry className="h-full relative">

            <Image src={"/assets/images/properties1.png"} alt="Property imge" fill/>
        </Masonry>
      </ResponsiveMasonry> */}
    </Root>
  );
}

const Root = styled("div", {});
