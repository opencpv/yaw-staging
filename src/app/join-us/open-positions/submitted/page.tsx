"use client";
import { Button } from "@nextui-org/react";
import CaJoinUsLargeTick from "../components/icons/CaJoinUsLargeTick";
import Link from "next/link";

function Page() {
  return (
    <div
      className={` p-4 flex flex-col items-center justify-center h-[100vh] gap-2`}>
      <p className="text-[1.9375rem] font-bold text-shade-300 text-center">
        Your resume has been successfully submitted
      </p>
      <CaJoinUsLargeTick />
      <div className="flex flex-col gap-1 items-center justify-center text0center">
        <p className="text-[1.9375rem] font-semibold text-shade-300">
          Thank You !
        </p>
        <p className="text-shade-200">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>

      <Link href={"/join-us/open-positions"} className="w-full flex justify-center">
        <Button className="h-[52px] w-full max-w-[309px] bg-[#DDB771] rounded-lg text-white font-semibold">
          Finish
        </Button>
      </Link>
    </div>
  );
}

export default Page;
