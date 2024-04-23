"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function PageNotFound() {
  const router = useRouter();
  return (
    <div className="w-full h-[100vh] ">
      <div className="w-full flex flex-col items-center justify-center gap-6 h-full">
        <div className=" relative w-full max-w-[384px] aspect-[384/291] animate-bounce ">
          <Image src={"/assets/images/404-error.svg"} fill alt="404 ERror" />
        </div>{" "}
        <div className="flex flex-col gap-8 text-center">
          <div className="flex flex-col gap-2">
            <p className="text-20 font-semibold">Page Not Found</p>
            <p className="text-shade-200">
              There seem to be an error accesing this page
            </p>
          </div>
          <div className="flex gap-6 font-semibold">
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

export default PageNotFound;
