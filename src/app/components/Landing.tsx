"use client";
import Image from "next/image";
import React, { Suspense } from "react";
import styles from "../style.module.css";
import CitySearchForm from "./CitySearchForm";
import Link from "next/link";
import { urlForImage } from "@/lib/utils/sanity/utils";
import dynamic from "next/dynamic";
const FramerWrapper = dynamic(
  () => import("@/components/__shared/hoc/framer-wrapper"),
  { ssr: false },
);

type Props = {
  data: any;
};

const Landing = (props: Props) => {
  const title = props.data.title.split(" ").slice(0, -1).join(" ");
  const titleHighlight = props.data.title.split(" ").slice(-1)[0];

  return (
    <section className="section wrapper space-y-8 pb-20 pt-10 text-shade-200">
      <div className="space-y-1">
        <h1 className="text-2xl capitalize text-neutral-600 min-[300px]:text-3xl">
          {title}{" "}
          <span className="tracking-in-contract text-accent-100">
            {titleHighlight}
          </span>
        </h1>
        <h4>{props.data.description}</h4>
      </div>
      <FramerWrapper className={`${styles.rect}`}>
        <Image
          src={urlForImage(props.data.bgImage)?.url() as string}
          alt="Main banner" // TODO: change
          fill
          className="rounded-[inherit] object-cover"
        />
        <svg
          width="360"
          height="153"
          viewBox="0 0 360 153"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 top-[-45.5px] z-10 max-sm:w-[150px] sm:right-[-1.1px] sm:top-[-1.6px]"
        >
          <path
            d="M0.5 1.00015C1.25281 0.968782 2.0556 0.967325 2.89984 1.00015H359V149.379C359.015 150.405 359.015 151.445 359 152.5V149.379C358.223 96.7143 317.935 81.8174 297.5 81L76 80.5C65.1667 80.5 42.8 72.4001 40 40.0001C37.3757 9.63274 15.5129 1.49055 2.89984 1.00015H0.5Z"
            fill="white"
          />
        </svg>

        <div className="absolute right-14 top-3 z-10 flex max-w-[250px] items-center gap-3 max-sm:hidden">
          <Image
            src="/assets/svgs/diamond-boxes.svg"
            alt=""
            width={50}
            height={50}
          />
          <small className="line-clamp-3 text-shade-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eos.
          </small>
        </div>

        <div className="featured-info fade-in absolute bottom-10 left-10 z-10 space-y-2 *:line-clamp-1">
          <h3 className="fade-in-bottom">Get this amazing 3 bedroom flat</h3>
          <p className="fade-in-bottom" style={{ animationDelay: "0.5s" }}>
            Get this amazing 3 bedroom flat
          </p>
        </div>
        <Link
          href={"/"}
          className="absolute bottom-0 right-0 z-10 grid size-20 place-items-center rounded-full border-2 border-shade transition-transform hover:-translate-y-2 max-sm:scale-[0.6] sm:bottom-10 sm:right-20"
        >
          <div
            className="grid size-12 animate-pulse place-items-center rounded-full bg-primary-200 text-white"
            style={{ animationDuration: "6s" }}
          >
            <span className={`text-sm ${styles.pulse}`}>View</span>
          </div>
        </Link>
      </FramerWrapper>
      <div className="space-y-2">
        <Suspense>
          <CitySearchForm placeholder={props.data.searchDefault} />
        </Suspense>
        <small className="font-semibold">
          Start searching for your next dream home.
        </small>
      </div>
    </section>
  );
};

export default Landing;
