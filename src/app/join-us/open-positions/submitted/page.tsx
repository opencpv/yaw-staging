"use client";
import { Button } from "@nextui-org/react";
import CaJoinUsLargeTick from "../components/icons/CaJoinUsLargeTick";
import Link from "next/link";
import GreenCheckLottie from "@/components/__shared/lotties/GreenCheckLottie";

function Page() {
  return (
    <div
      className={` flex h-[100vh] flex-col items-center justify-center gap-2 p-4`}
    >
      <p className="text-center text-[1.9375rem] font-bold text-shade-300">
        Your resume has been successfully submitted
      </p>
      <GreenCheckLottie />{" "}
      <div className="text0center flex flex-col items-center justify-center gap-1">
        <p className="text-[1.9375rem] font-semibold text-shade-300">
          Thank You !
        </p>
        <p className="text-shade-200">
       We will get back to you soon.
        </p>
      </div>
      <Link
        href={"/join-us/open-positions"}
        className="flex w-full justify-center"
      >
        <Button className="h-[52px] w-full max-w-[309px] text-base rounded-lg bg-[#DDB771] font-semibold text-white">
          Finish
        </Button>
      </Link>
    </div>
  );
}

export default Page;
