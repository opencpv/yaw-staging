"use client";
import Image from "next/image";
import { useEffect } from "react";
import ShapedLanding from "./components/landing/ShapedLanding";
import Navbar from "@/components/__shared/Navbar";
import CitySearchForm from "./components/landing/CitySearchForm";
import ScrollDownBtn from "./components/landing/ScrollDownBtn";
import PromotionSlider from "./components/slider/promotion/PromotionSlider";
import listingsdb from "@/enum/demodb/listings";
import rentalDeals from "@/enum/deals/rentalDeals";
import ListingCard from "../components/__shared/listing/ListingCard";
import SliderGrid from "../components/__shared/sliders/SliderGrid";
import DealCard from "./components/DealCard";
import ManagePropertiesInfo from "./components/ManagePropertiesInfo";
import PopularCitiesCard from "./components/PopularCitiesCard";
import Footer from "@/components/__shared/footer/Footer";
import ArrowLink from "./components/link/ArrowLink";
import SliderWide from "@/components/__shared/sliders/SliderWide";
import SliderMultiItems from "@/components/__shared/sliders/SliderMultiItems";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import AdsSliderColumn from "./components/AdsSliderColumn";
import SurveyToast from "./components/survey/SurveyToast";
import ScrollTopAndSocial from "@/components/ui/ScrollTopAndSocial";
import FeaturedListingAndAds from "./components/FeaturedListingAndAds";
import HomePopularCities from "./components/home_sections/HomePopularCities";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const hashList = hash.split("&");
      const access_token = hashList[0].split("=")[1];
      const expires_at = hashList[1].split("=")[1];
      const expires_in = hashList[2].split("=")[1];
      const provider_token = hashList[3].split("=")[1];
      const refresh_token = hashList[4].split("=")[1];
      const token_type = hashList[5].split("=")[1];
      const session = {
        access_token,
        expires_at,
        expires_in,
        provider_token,
        refresh_token,
        token_type,
      };
      localStorage.setItem("session", JSON.stringify(session));
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="pb-20 overflow-x-hidden">
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
                  Affordable houses and rooms without the stress
                </h4>
              </AOSWrapper>
            </div>
            <CitySearchForm className="col-span-5 md:order-1 md:col-span-3" />
          </div>
          <ScrollDownBtn />
        </ShapedLanding>

        {/* Promotion */}
        <section className="relative mb-16 flex items-center justify-center px-5 pt-20 mx-auto max-w-screen-2xl xs:px-5">
          <div className="h-fit w-full max-w-[1100px]">
            <PromotionSlider />
            <div className="absolute left-0 top-[20%] z-10 h-[85%] w-full max-w-[90%] translate-y-[-10%] bg-red-400 opacity-0 sm:hidden"></div>
            {/*!!! Temporary fix of scrolling issue on mobile !!!*/}
          </div>
        </section>
        
        {/* Featured Listings and Ads */}
        <FeaturedListingAndAds />

        {/* Apartment Rentals */}
        <section className="px-5 mx-auto mb-16 space-y-8 max-w-screen-2xl xs:px-5 md:space-y-14">
          <div className="w-full space-y-3.5 min-[810px]:w-7/12">
            <div className="flex gap-5">
              <h2 className="font-[500] text-2xl capitalize text-neutral-900">
                Our Apartment Rental Deals
              </h2>
              <Image
                src="/assets/icons/deals.svg"
                alt=""
                width={25}
                height={25}
              />
            </div>
            <p className="max-w-2xl font-[500] text-neutral-500">
              RentRightGH employs the latest data on rental rates and apartment
              availability in real-time to aid you in finding superb apartment
              deals. To identify such deals, we follow a systematic approach
              that includes various steps.
            </p>
          </div>
          <div className="grid items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rentalDeals.map((deal) => {
              const { id, title, body, icon, href } = deal;
              return (
                <AOSWrapper key={id} animation="fade-left">
                  <DealCard
                    // key={id}
                    href={href}
                    title={title}
                    body={body}
                    icon={icon}
                  />
                </AOSWrapper>
              );
            })}
          </div>
        </section>
        {/* Manage Your Properties With Us */}
        <section className="px-5 mx-auto mb-20 space-y-8 max-w-screen-2xl xs:px-5 md:space-y-1">
          <div className="w-full space-y-3.5 mb-14 min-[810px]:w-7/12">
            <div className="flex gap-5 ">
              <h2 className="font-[500] text-2xl capitalize text-neutral-900">
                Manage Your Properties With Us
              </h2>
              <Image
                src="/assets/icons/manage.svg"
                alt=""
                width={25}
                height={25}
              />
            </div>
            <p className="max-w-2xl font-[500] text-neutral-500">
              Effortlessly manage your rental properties with the most advanced
              tools on the market. From rent collection to maintenance,
              we&apos;ve got you covered. Say goodbye to stress and hello to
              seamless property management.
            </p>
          </div>
          <div className="">
            <ul className="space-y-10 sm:space-y-20">
              {[1, 2].map((item, idx) =>
                (idx + 1) % 2 === 0 ? (
                  <ManagePropertiesInfo
                    key={idx + 1}
                    position="right"
                    href="/about"
                    activity="List your property"
                    image="/assets/images/Stock.jpg"
                    title="Want to rent your property?"
                    body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nihil temporibus omnis. Repellendus adipisci harum quidem porro, maxime soluta! Accusamus ad amet eveniet culpa, mollitia velit? Sit quam nisi quaerat accusantium commodi ullam, iure reiciendis!"
                  />
                ) : (
                  <ManagePropertiesInfo
                    key={idx + 1}
                    href="/about"
                    activity="Manage your property"
                    image="/assets/images/Stock.jpg"
                    title="Want to rent your property?"
                    body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nihil temporibus omnis. Repellendus adipisci harum quidem porro, maxime soluta! Accusamus ad amet eveniet culpa, mollitia velit? Sit quam nisi quaerat accusantium commodi ullam, iure reiciendis!"
                  />
                )
              )}
            </ul>
          </div>
        </section>
        {/* Find Apartments in Popular Cities */}
        <HomePopularCities />
        <SurveyToast />
      </main>
      <ScrollTopAndSocial />
      <Footer />
    </>
  );
}
