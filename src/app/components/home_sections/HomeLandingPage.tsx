import React from "react";
import CitySearchForm from "../landing/CitySearchForm";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import ShapedLanding from "../landing/ShapedLanding";
import ScrollDownBtn from "../landing/ScrollDownBtn";

type Props = {};

const HomeLandingPage = (props: Props) => {
  return (
    <ShapedLanding
      property="2 Bedroom house at Amasaman"
      image="/assets/images/home/landing.jpg"
      href="/properties/2 Bedroom house at Amasaman"
      className="text-white"
      position="right"
      disableOnSmallScreens={true}
    >
      {/* Find your new home */}
      <div className="relative z-10 grid w-full gap-16 overflow-x-hidden top-60 md:top-72 md:grid-cols-5 lg:gap-28">
        <div className="col-span-5 w-11/12 space-y-4 px-5 capitalize md:col-span-2 md:order-2 md:w-full md:translate-x-[-10%] xs:px-10 md:pl-0">
          <AOSWrapper animation="fade-right" duration="2000">
            <h1 className="font-[900] text-2xl leading-tight max-w-2xl min-[300px]:text-3xl xl:text-[2.5rem] xl:leading-snug">
              Find your new home with RentRightGH
            </h1>
          </AOSWrapper>
          <AOSWrapper animation="fade-left" duration="2000">
            <h4 className="font-[500]">
              Genuine Listings without the stress
            </h4>
          </AOSWrapper>
        </div>
        <CitySearchForm className="col-span-5 md:order-1 md:col-span-3" />
      </div>
      <ScrollDownBtn />
    </ShapedLanding>
  );
};

export default HomeLandingPage;
