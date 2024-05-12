"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";

function Page() {
  return (
    <div className=" flex h-[100vh] flex-col items-center justify-start bg-[#F8F8F8]">
      <div className="flex h-[468px] w-full max-w-[1728px] items-center justify-center bg-[url('/assets/images/b2b-home.png')] bg-cover bg-no-repeat text-[2.4375rem] font-bold text-white ">
        <p className="uppercase">invoices & receipts</p>
      </div>
      <div className="relative top-[-40px] flex max-h-[234px]  w-[90%] max-w-[398px] flex-col gap-2.5 rounded-xl bg-white px-6 py-8 lg:top-[-90px] lg:w-full lg:max-w-[495px]">
        <div className="flex flex-col gap-4">
          <p className="text-[#6A6968]">Customer ID Number</p>
          <input
            type="text"
            placeholder="Enter unique id no."
            className="h-[52px] rounded-[4px] border-[1px] border-[#E6E6E6] p-4"
          />
        </div>
        <Link href={"/b2b/data"} className="w-full">
          <Button className="flex h-[52px] w-full items-center justify-center rounded-lg bg-primary font-semibold text-white">
            Continue
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
