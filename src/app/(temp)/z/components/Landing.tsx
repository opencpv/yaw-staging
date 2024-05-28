"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import styles from "../style.module.css";
import { Button } from "@/components/__shared/ui/button";
import CitySearchForm from "./CitySearchForm";
import { animate, motion, stagger } from "framer-motion";

type Props = {};

const Landing = (props: Props) => {
  useEffect(() => {
    animate(
      ".featured-info div, .featured-info p, .featured-info h3",
      { opacity: 1, y: 0 },
      {
        delay: stagger(0.1, { startDelay: 0.5 }),
        type: "tween",
        ease: "linear",
      },
    );
  }, []);

  return (
    <section className="section wrapper space-y-8 pb-20 pt-10 text-shade-200">
      <div className="space-y-1">
        <h1 className="text-2xl capitalize text-neutral-600 min-[300px]:text-3xl">
          Find your new home with{" "}
          <span className="text-accent-100">RentRightGH</span>
        </h1>
        <h4>Genuine listings without stress</h4>
      </div>
      <div className={`${styles.rect}`}>
        <Image
          src="/assets/images/home/temp/nice-interior.png"
          alt="2 Bedroom Apartment at Tema"
          fill
          className="rounded-[inherit] object-cover"
        />

        <svg
          width="87.04mm"
          height="37.593mm"
          version="1.1"
          viewBox="0 0 87.04 37.593"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -right-[2.5px] -top-1 z-10 -rotate-1 max-sm:hidden"
        >
          <g transform="translate(-44.294 -106.98)">
            <path
              d="m44.294 106.98s10.162 4.0199 9.6649 13.58c-0.49675 9.56 10.014 8.6117 10.014 8.6117h51.782s14.796 3.0672 14.7 15.401l0.8796-37.524z"
              fill="#fff"
            />
          </g>
        </svg>
        <svg
          width="47.04mm"
          height="27.593mm"
          version="1.1"
          viewBox="0 0 87.04 37.593"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -right-[2.5px] -top-5 z-10 -rotate-1 sm:hidden"
        >
          <g transform="translate(-44.294 -106.98)">
            <path
              d="m44.294 106.98s10.162 4.0199 9.6649 13.58c-0.49675 9.56 10.014 8.6117 10.014 8.6117h51.782s14.796 3.0672 14.7 15.401l0.8796-37.524z"
              fill="#fff"
            />
          </g>
        </svg>
        <div className="absolute right-5 top-3 z-10 flex max-w-[250px] items-center gap-3 max-sm:hidden">
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

        <motion.div
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
          animate={{ opacity: 1 }}
          className="featured-info absolute bottom-10 left-10 z-10 space-y-2"
        >
          <motion.h3 initial={{ y: 50 }}>
            Get this amazing 3 bedroom flat
          </motion.h3>
          <motion.p initial={{ y: 50 }}>
            Get this amazing 3 bedroom flat
          </motion.p>
          <motion.div initial={{ y: 50 }} className="w-fit">
            <Button className="bg-primary-200 text-white">View property</Button>
          </motion.div>
        </motion.div>
      </div>
      <div className="space-y-2">
        <CitySearchForm placeholder={"Madina, Accra"} />
        <small className="font-semibold">
          Start searching for your next dream home.
        </small>
      </div>
    </section>
  );
};

export default Landing;
