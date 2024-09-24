"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../../button";
import Link from "next/link";
import PageNotFoundDiscover from "./components/page-not-found-discover";
import styles from "./index.module.css";
import PageNotFoundPill from "./components/page-not-found-pill";

type Props = {
  className?: string;
};

function PageNotFound({ className }: Props) {

  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center",
        className,
      )}
    >
      <div
        className={`flex flex-col lg:flex-row w-full items-center justify-around gap-5 rounded-b-[50px] bg-[#DEFAF9] p-20  lg:rounded-b-[200px] ${styles.container} lg:pb-[170px] `}
      >
        <div className="order-2 flex flex-col items-center lg:items-start gap-4 lg:order-1 2xl:py-[100px]">
          <div className="hidden lg:flex">
            <PageNotFoundPill />
          </div>{" "}
          <div className="flex flex-col gap-6 lg:gap-20 items-center lg:items-start">
            <div className="flex flex-col gap-1 items-center lg:items-start">
              <h1 className="text-center capitalize text-primary lg:text-left leading-10 lg:!leading-[80px]">
                <span className="text-accent">
                  404. <br />
                </span>
                This page does <br className="hidden lg:flex" /> not exist.
              </h1>
            </div>

            <Link href={"/"}>
              <Button
                variant={"outline"}
                className="h-10 w-fit lg:w-[288px] p-4 lg:h-20 "
              >
                Return Home
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex  order-1 lg:order-2 w-full flex-col gap-6 items-center max-w-[709px]">
          <div className="lg:hidden">
            <PageNotFoundPill />
          </div>{" "}
          <div
            className="relative  aspect-[709/540] w-full max-w-[709px] "
            style={{ animationDuration: "2s" }}
          >
            <Image src={"/assets/images/404-error2.svg"} fill alt="404 Error" />
          </div>
        </div>
      </div>
      <div className={`w-full py-20 ${styles.container}`}>
        <PageNotFoundDiscover />
      </div>{" "}
    </div>
  );
}

export default PageNotFound;
