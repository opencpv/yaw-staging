import { useAssets } from "@/lib/custom-hooks/useAssets";
import { styled } from "@stitches/react";

function Details() {
  const { images } = useAssets();
  return <></>;
}

export default Details;

const Root = styled("div", {
  ".general": {
    borderRadius: "16px",
    backgroundColor: "#F2F4F7",
    padding: "8px",
  },
  ".gray-900": {
    color: "#1A1C21",
  },
  ".gray-600": {
    color: "#5E6470",
  },
});
