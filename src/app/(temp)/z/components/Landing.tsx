import Image from "next/image";
import React from "react";
import styles from "../style.module.css";
import { Button } from "@/components/__shared/ui/button";
import CitySearchForm from "./CitySearchForm";

type Props = {};

const Landing = (props: Props) => {
  return (
    <section className="wrapper space-y-8 text-shade-200">
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
          <h3>Get this amazing 3 bedroom flat</h3>
          <p>Get this amazing 3 bedroom flat</p>
          <Button className="bg-primary-200 text-white">View property</Button>
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
