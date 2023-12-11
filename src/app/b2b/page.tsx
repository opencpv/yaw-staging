"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";

function Page() {
  return (
    <div className=" flex flex-col items-center justify-start bg-[#F8F8F8] h-[100vh]">
      <div className="bg-[url('/assets/images/b2b-home.png')] bg-no-repeat bg-cover h-[468px] w-full max-w-[1728px] text-[2.4375rem] font-bold text-white flex items-center justify-center">
        <p className="uppercase">invoices & receipts</p>
      </div>
      <div className="relative bg-white rounded-xl max-w-[495px] max-h-[234px] flex flex-col gap-2.5 px-6 py-8 w-full top-[-90px]">
        <div className="flex flex-col gap-4">
          <p className="text-[#6A6968]">Customer ID Number</p>
          <input
            type="text"
            placeholder="Enter unique id no."
            className="border-[1px] border-[#E6E6E6] rounded-[4px] p-4 h-[52px]"
          />
        </div>
        <Link href={"/b2b/data"} className="w-full">
          <Button className="text-white bg-[#073B3A] rounded-lg flex items-center justify-center font-semibold h-[52px] w-full">
            Track
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
