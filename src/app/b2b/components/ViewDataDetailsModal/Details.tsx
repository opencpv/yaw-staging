import { useAssets } from "@/lib/custom-hooks/useAssets";
import { styled } from "@stitches/react";
import Image from "next/image";
import Cost from "../Cost";
import CaQuote from "./CaQuote";
import { HiOutlineDownload } from "react-icons/hi";
import { Button } from "@nextui-org/react";
import DownloadButton from "../DownloadButton";
import CheckoutButton from "../CheckoutButton";
import legal from "@/enum/about/legal";

type Props = {
  variant: "invoice" | "receipt";
};

function Details({ variant }: Props) {
  const { images } = useAssets();
  return (
    <Root className="flex w-full flex-col justify-center rounded-2xl border-[1px] border-shade-50  bg-[#FAFAFA] p-2 text-[0.625rem]">
      <div
        className={`flex items-center justify-between rounded-xl px-4 py-2 ${
          variant == "invoice" ? "bg-[#073B3A]" : "bg-[#]"
        }`}
      >
        <div
          className={`flex flex-col gap-1 ${
            variant == "invoice" ? "text-white" : "text-shade-300"
          }`}
        >
          <p className="text-[1.5rem] font-semibold uppercase">
            {variant == "invoice" ? "invoice" : "receipt"}
          </p>
          <p
            className={`text-[0.625rem] font-semibold text-[#B0B0B0] ${
              variant == "receipt" && "hidden"
            }`}
          >
            #AD2323-1
          </p>
        </div>
        <div
          className={`relative aspect-[50/37] w-full max-w-[50px] ${
            variant == "receipt" && "hidden"
          }`}
        >
          <Image src={images.Logo} fill alt="Logo" />
        </div>
      </div>
      <div
        className={`general mt-3 flex items-center gap-1 p-2 text-[0.625rem] font-bold`}
      >
        <p className="text-[#1A1C21]">Date issued</p>
        <p className="text-[#5E6470] ">01 Aug 2023</p>
      </div>

      <div className="flex w-full gap-5">
        <div className={`general mt-5  w-full rounded-2xl font-bold`}>
          <div className="flex flex-col gap-4">
            <p className="gray-900 font-bold">To:</p>
            <div>
              <p className="gray-600">John Doe</p>
              <p className="text-shade-300">Customer ID: 232332</p>
            </div>{" "}
          </div>
        </div>

        <div className={`general mt-5  w-full rounded-2xl font-bold`}>
          <div className="flex flex-col gap-4">
            <p className="gray-900 font-bold">From:</p>
            <div>
              <p className="gray-600">RentRightGh</p>
              <p className="text-shade-300">Business Address: 232332</p>
              <p className="text-shade-300">City</p>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="general flex items-center justify-between">
          <p className="gray-900 font-semibold">Service</p>
          <p className="gray-900 font-bold">Total</p>
        </div>
        <div className="general flex items-center justify-between">
          <div className="mt-1 flex flex-col gap-1">
            <p className="gray-900 font-semibold">Service name</p>
            <p className="gray-600">Description</p>
          </div>{" "}
          <p className="gray-900 font-bold">GHS 200.00</p>
        </div>
      </div>
      <div className="mt-8 flex w-full justify-end">
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
      <div className="mt-5 flex items-center gap-4 border-t-[1px] border-t-shade-50 py-3">
        <p className="w-full text-[#B0B0B0]">SBG DIGITAL LLC</p>
        <p className="gray-600 whitespace-nowrap font-semibold">
          +91 00000 00000
        </p>
        <div className="h-full whitespace-nowrap border-r-[0.5px]"></div>

        <p className="gray-600 font-semibold">{legal.email}</p>
      </div>
      {variant != "invoice" && (
        <div className="sticky bottom-0 mt-14 flex h-[40px] w-full items-center justify-center gap-2 rounded-lg border-[1px] border-shade-50 bg-secondary-500 px-4 py-2 2xl:static">
          <DownloadButton />
        </div>
      )}

      {variant == "invoice" && (
        <div className="sticky  bottom-0 w-full 2xl:static">
          <div className="grid w-full grid-cols-2 items-center justify-end gap-1 bg-transparent pb-2 lg:hidden">
            <DownloadButton maxWidth="fit" />
            <CheckoutButton />
          </div>
          <div className="mt-14  hidden h-[40px] w-full items-center justify-center gap-2 rounded-lg border-[1px] border-shade-50 bg-secondary-500 px-4 py-2 lg:flex">
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
