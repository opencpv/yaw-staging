"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../../button";
import Link from "next/link";
import PageNotFoundDiscover from "./page-not-found-discover";
import styles from "./index.module.css";

type Props = {
  className?: string;
};

function PageNotFound({ className }: Props) {
  const router = useRouter();

  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center",
        className,
      )}
    >
      <div
        className={`grid w-full grid-cols-1 items-center justify-center gap-5 rounded-b-[80px] lg:rounded-b-[200px] bg-[#DEFAF9] p-20 ${styles.container} pb-[170px] lg:grid-cols-2`}
      >
        <div className="flex flex-col gap-4">
          <div className="w-fit rounded-lg bg-primary px-4 py-2 text-white">
            <p>PAGE NOT FOUND</p>
          </div>
          <div className="flex flex-col gap-10 lg:gap-20">
            <div className="flex flex-col gap-1">
              <h1 className="capitalize lg:!leading-[80px] text-primary">
                <span className="text-accent">
                  404. <br />
                </span>
                This page does <br /> not exist.
              </h1>
            </div>

            <Link href={"/"} className="">
              <Button
                variant={"outline"}
                className="h-20 w-full max-w-[288px] p-4"
              >
                Return Home
              </Button>
            </Link>
          </div>
        </div>
        <div
          className="relative aspect-[709/540] w-full max-w-[709px]"
          style={{ animationDuration: "2s" }}
        >
          <Image src={"/assets/images/404-error2.svg"} fill alt="404 Error" />
        </div>
      </div>
      <div className={`w-full p-20 ${styles.container}`}>
        <PageNotFoundDiscover />
      </div>{" "}
    </div>
  );
}

export default PageNotFound;
