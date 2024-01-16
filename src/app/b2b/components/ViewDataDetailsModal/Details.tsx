import { useAssets } from "@/lib/custom-hooks/useAssets";
import { styled } from "@stitches/react";
import Image from "next/image";
import Cost from "../Cost";
import CaQuote from "./CaQuote";
import { HiOutlineDownload } from "react-icons/hi";
import { Button } from "@nextui-org/react";
import DownloadButton from "../DownloadButton";
import CheckoutButton from "../CheckoutButton";

type Props = {
  variant: "invoice" | "receipt";
};

function Details({ variant }: Props) {
  const icons = useAssets();
  return (
    <Root className="flex flex-col text-[0.625rem] bg-[#FAFAFA] border-shade-50 border-[1px] p-2  justify-center w-full rounded-2xl">
      <div
        className={`justify-between flex items-center rounded-xl px-4 py-2 ${
          variant == "invoice" ? "bg-[#073B3A]" : "bg-[#]"
        }`}>
        <div
          className={`flex flex-col gap-1 ${
            variant == "invoice" ? "text-white" : "text-shade-300"
          }`}>
          <p className="text-[1.5rem] font-semibold uppercase">
            {variant == "invoice" ? "invoice" : "receipt"}
          </p>
          <p
            className={`text-[0.625rem] font-semibold text-[#B0B0B0] ${
              variant == "receipt" && "hidden"
            }`}>
            #AD2323-1
          </p>
        </div>
        <div
          className={`relative w-full aspect-[50/37] max-w-[50px] ${
            variant == "receipt" && "hidden"
          }`}>
          <Image src={icons.icons.Logo} fill alt="Logo" />
        </div>
      </div>
      <div
        className={`mt-3 general p-2 flex items-center gap-1 font-bold text-[0.625rem]`}>
        <p className="text-[#1A1C21]">Date issued</p>
        <p className="text-[#5E6470] ">01 Aug 2023</p>
      </div>

      <div className="flex w-full gap-5">
        <div className={`mt-5 general  w-full rounded-2xl font-bold`}>
          <div className="flex flex-col gap-4">
            <p className="font-bold gray-900">To:</p>
            <div>
              <p className="gray-600">John Doe</p>
              <p className="text-shade-300">Customer ID: 232332</p>
            </div>{" "}
          </div>
        </div>

        <div className={`mt-5 general  w-full rounded-2xl font-bold`}>
          <div className="flex flex-col gap-4">
            <p className="font-bold gray-900">From:</p>
            <div>
              <p className="gray-600">RentRightGh</p>
              <p className="text-shade-300">Business Address: 232332</p>
              <p className="text-shade-300">City</p>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-between items-center general">
          <p className="gray-900 font-semibold">Service</p>
          <p className="gray-900 font-bold">Total</p>
        </div>
        <div className="flex justify-between items-center general">
          <div className="flex flex-col gap-1 mt-1">
            <p className="gray-900 font-semibold">Service name</p>
            <p className="gray-600">Description</p>
          </div>{" "}
          <p className="gray-900 font-bold">GHS 200.00</p>
        </div>
      </div>
      <div className="mt-8 w-full flex justify-end">
        <Cost subTotal={200} tax={0} total={200} variant={variant} />
      </div>
      <div className="mt-14 flex flex-col gap-1">
        <p className="gray-900 font-semibold">
          Thank you for doing business with us!
        </p>
        <div className="flex items-center gap-2">
          <CaQuote />
          <p className="gray-600">
            Please pay within 15 days of receiving this invoice.
          </p>
        </div>{" "}
      </div>
      <div className="mt-5 py-3 flex gap-4 items-center border-t-[1px] border-t-shade-50">
        <p className="text-[#B0B0B0] w-full">SBG DIGITAL LLC</p>
        <p className="gray-600 font-semibold whitespace-nowrap">
          +91 00000 00000
        </p>
        <div className="h-full border-r-[0.5px] whitespace-nowrap"></div>

        <p className="gray-600 font-semibold">contact@rentright.com</p>
      </div>
      {variant != "invoice" && (
        <div className="bg-[#ECF2F3] sticky bottom-0 2xl:static rounded-lg border-[1px] border-shade-50 px-4 py-2 h-[40px] w-full flex items-center justify-center gap-2 mt-14">
          <DownloadButton />
        </div>
      )}

      {variant == "invoice" && (
        <div className="w-full  sticky bottom-0 2xl:static">
          <div className="w-full pb-2 bg-transparent justify-end items-center lg:hidden gap-1 grid grid-cols-2">
            <DownloadButton maxWidth="fit" />
            <CheckoutButton />
          </div>
          <div className="bg-[#ECF2F3]  rounded-lg border-[1px] border-shade-50 px-4 py-2 h-[40px] w-full items-center justify-center gap-2 mt-14 hidden lg:flex">
            <DownloadButton />
          </div>
        </div>
      )}
    </Root>
  );
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
