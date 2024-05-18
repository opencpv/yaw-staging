import { useAssets } from "@/lib/custom-hooks/useAssets";
import { styled } from "@stitches/react";
import Image from "next/image";
import Cost from "../Cost";
import CaQuote from "../CaQuote";
import { HiOutlineDownload } from "react-icons/hi";
import { Button } from "@nextui-org/react";
import DownloadButton from "../DownloadButton";
import CheckoutButton from "../CheckoutButton";
import legal from "@/enum/about/legal";

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
