"use client";
import { styled } from "@stitches/react";
import PDHero from "./PDHero";
import ImageOptionsPopover from "../components/lease-form/components/ChooseImages/ImageOptionsPopover";

export default function Page() {
  return (
    <Root className="w-full">
      <PDHero />
    </Root>
  );
}

const Root = styled("div", {});
