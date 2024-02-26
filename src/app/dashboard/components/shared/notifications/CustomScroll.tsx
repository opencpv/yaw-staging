import { styled } from "@stitches/react";

export const CustomScroll: any = styled("div", {
  "&::-webkit-scrollbar-track": {
    width: "4px",
    backgroundColor: "#F1F1F1",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    width: "2px",
    maxHeight: "181px",
    backgroundColor: "#073B3A88",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar": {
    width: "4px",
    borderRadius: "4px",
    backgroundColor: "#F1F1F1",
  },
});
