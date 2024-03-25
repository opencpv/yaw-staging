import React from "react";
import CitySearchForm from "../landing/CitySearchForm";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import ShapedLanding from "../landing/ShapedLanding";
import ScrollDownBtn from "../landing/ScrollDownBtn";
import { urlForImage } from "@/lib/utils/sanity/utils";

type Props = {
  data: any;
};

const HomeLandingPage = (props: Props) => {
  console.log(props.data);
  return (
    <ShapedLanding
      property="2 Bedroom house at Amasaman"
      image={urlForImage(props.data.mainBannerImage)?.url() as string}
      href={props.data.mainBannerUrl}
      className="text-white"
      position="right"
      disableOnSmallScreens={true}
    >
      {/* Find your new home */}
      <div className="relative top-60 z-10 grid w-full gap-16 overflow-x-hidden md:top-72 md:grid-cols-5 lg:gap-28">
        <div className="col-span-5 w-11/12 space-y-4 px-5 capitalize xs:px-10 md:order-2 md:col-span-2 md:w-full md:translate-x-[-10%] md:pl-0">
          {/* <AOSWrapper animation="fade-right" duration="2000"> */}
          <h1 className="max-w-2xl text-2xl font-[900] leading-tight min-[300px]:text-3xl xl:text-[2.5rem] xl:leading-snug">
            {props.data.mainBannerTitle}
          </h1>
          {/* </AOSWrapper> */}
          {/* <AOSWrapper animation="fade-left" duration="2000"> */}
          <h4 className="font-[500]">{props.data.mainBannerDescription}</h4>
          {/* </AOSWrapper> */}
        </div>
        <CitySearchForm
          className="col-span-5 md:order-1 md:col-span-3"
          defaultValue={props.data.searchDefault}
        />
      </div>
      <ScrollDownBtn />
    </ShapedLanding>
  );
};

export default HomeLandingPage;
