import React from "react";
import * as SeparatorInner from "@radix-ui/react-separator";
import { styled } from "@stitches/react";

type Props = Omit<SeparatorInner.SeparatorProps, "color"> & {
  color?: "primary" | "secondary" | "white";
};
const Separator = (props: Props) => <SeparatorRoot {...props} />;

const SeparatorRoot = styled(SeparatorInner.Root, {
  "&[data-orientation=horizontal]": { height: 1, width: "100%" },
  "&[data-orientation=vertical]": { height: "100%", width: 1 },
  variants: {
    color: {
      primary: {
        backgroundColor: "#830009",
      },
      secondary: {},
      white: {
        backgroundColor: "white",
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export default Separator;
