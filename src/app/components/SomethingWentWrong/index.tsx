"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CaTriangle from "./CaTriangle";
import { cn } from "@/lib/utils";
import Button from "@/components/__shared/ui/button/Button";

type Props = {
  className?: string;
};

function SomethingWentWrong({ className }: Props) {
  const router = useRouter();
  return (
    <div className={cn("h-screen w-full", className)}>
      <div className="flex h-full w-full flex-col items-center justify-center gap-6">
        <div className="aspect-square animate-bounce">
          <CaTriangle />
        </div>{" "}
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <h3>Oops, Something went wrong</h3>
            <p className="text-shade-200">
              Sorry, there seems to be an error performing this action.{" "}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Button color="accent" onClick={() => router.back()}>
              Go Back
            </Button>
            <Button
              variant="outline"
              onClick={() => router.refresh()}
              className="border border-accent-200 text-accent-200"
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SomethingWentWrong;
