"use client";
import Image from "next/image";
import React from "react";
import styles from "../style.module.css";
import { Button } from "@/components/__shared/ui/button";
import CitySearchForm from "./CitySearchForm";
import { motion } from "framer-motion";

type Props = {};

const Landing = (props: Props) => {
  return (
    <section className="section wrapper space-y-8 pb-20 pt-10 text-shade-200">
      <div className="space-y-1">
        <h1 className="text-2xl capitalize text-neutral-800 min-[300px]:text-3xl">
          Find your new home with{" "}
          <span className="text-accent-100">RentRightGH</span>
        </h1>
        <h4>Genuine listings without stress</h4>
      </div>
      <div className={`${styles.rect}`}>
        <Image
          src="/assets/images/Stock.jpg"
          alt="2 Bedroom Apartment at Tema"
          fill
          className="rounded-[inherit] object-cover"
        />
        <div className="absolute bottom-10 left-10 z-10 space-y-2">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              stiffness: 100,
              velocity: 0.5,
            }}
            viewport={{ once: true }}
          >
            Get this amazing 3 bedroom flat
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              stiffness: 100,
              velocity: 0.5,
              delay: 0.2,
            }}
            viewport={{ once: true }}
          >
            Get this amazing 3 bedroom flat
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              stiffness: 100,
              velocity: 0.5,
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="w-fit"
          >
            <Button className="bg-primary-200 text-white">View property</Button>
          </motion.div>
        </div>
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
