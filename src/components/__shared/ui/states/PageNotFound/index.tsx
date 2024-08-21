"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../../button/Button";

type Props = {
  className?: string;
};

function PageNotFound({ className }: Props) {
  const router = useRouter();

  return (
    <div className={cn("col-span-full h-svh w-full p-10", className)}>
      <div className="flex h-full w-full flex-col items-center justify-center gap-6">
        <div
          className="relative aspect-square w-full max-w-[384px] animate-bounce"
          style={{ animationDuration: "2s" }}
        >
          <Image src={"/assets/images/404-error.svg"} fill alt="404 Error" />
        </div>{" "}
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col gap-2">
            <h3>Page Not Found</h3>
            <p className="text-shade-200">
              There seem to be an error accessing this page
            </p>
          </div>
          <Button
            color="accent"
            onClick={() => router.back()}
            className="w-fit"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
