import React from "react";
import * as SeparatorInner from "@radix-ui/react-separator";
import { styled } from "@stitches/react";

type Props = Omit<SeparatorInner.SeparatorProps, "color"> & {
  color?: "primary" | "secondary" | "white" | "transparent";
};
const Separator = (props: Props) => <SeparatorRoot {...props} />;

const SeparatorRoot = styled(SeparatorInner.Root, {
  "&[data-orientation=horizontal]": { height: 1, width: "100%" },
  "&[data-orientation=vertical]": { height: "100%", width: 2 },
  variants: {
    color: {
      primary: {
        backgroundColor: "#830009",
      },
      secondary: {},
      white: {
        backgroundColor: "white",
      },
      transparent: {
        backgroundColor: "rgb(255, 255, 255, 0.5)"
      }
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export default Separator;
