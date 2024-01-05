"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CaTriangle from "./CaTriangle";

function SomethingWentWrong() {
  const router = useRouter();
  return (
    <div className="w-full h-[100vh] ">
      <div className="w-full flex flex-col items-center justify-center gap-6 h-full">
        <div className=" animate-bounce ">
          <CaTriangle />
        </div>{" "}
        <div className="flex flex-col gap-8 text-center">
          <div className="flex flex-col gap-2">
            <p className="text-20 font-semibold">Oops, Something went wrong</p>
            <p className="text-shade-200">
              Sorry, there seems to be an error performing this action.{" "}
            </p>
          </div>
          <div className="flex gap-6 ">
            <Button
              onPress={() => router.back()}
              className="w-full max-w-[173px] h-[52px] rounded-lg bg-accent-50 text-white font-semibold">
              Go Back
            </Button>
            <Button
              onPress={() => router.refresh()}
              className="w-full max-w-[173px] h-[52px] rounded-lg border-[1px] border-[#AD842A] text-[#AD842A] bg-transparent font-semibold">
              Try Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SomethingWentWrong;
