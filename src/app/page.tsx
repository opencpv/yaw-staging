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
import ManagePropertiesInfo2 from "./components/ManagePropertiesInfo2";
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
      <main className="bg-[#E9ECEF] pb-20 overflow-x-hidden">
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

        {/* Featured Listings */}
        <section className="px-5 mx-auto mb-12 max-w-screen-2xl xs:px-5">
          <h2 className="text-2xl font-[700] text-neutral-900 mb-5">
            Featured Listings
          </h2>
          {/* Listing cards */}
          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-8 lg:items-start">
            {/* Shows when number of listings is less than 10 */}
            {listingsdb.length <= 9 ? (
              <div className="col-span-6 grid gap-5 grid-cols-1 sm:grid-cols-2 min-[950px]:max-lg:grid-cols-3 lg:grid-cols-2 min-[1180px]:grid-cols-3">
                {listingsdb.map((listing) => {
                  return (
                    <ListingCard
                      key={listing.id}
                      propertyType={listing.propertyType}
                      propertyDescription={listing.propertyDescription}
                      images={listing.images}
                      price={listing.price}
                      paymentStructure={
                        listing.paymentStructure as PaymentStructure
                      }
                      monthlyAmount={listing.monthlyAmount}
                      deal={listing.deal as Deal}
                      membership={listing.membership as Membership}
                      rating={listing.rating}
                      ratingCount={listing.ratingCount}
                      liked={listing.liked}
                      href={listing.href}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="relative col-span-6 pb-5">
                {/* Shows when number of listings is more than 9 */}
                <div className="relative h-fit w-full">
                  <SliderGrid
                    items={listingsdb.map((listing) => (
                      <ListingCard
                        key={listing.id}
                        propertyType={listing.propertyType}
                        propertyDescription={listing.propertyDescription}
                        images={listing.images}
                        price={listing.price}
                        paymentStructure={
                          listing.paymentStructure as PaymentStructure
                        }
                        monthlyAmount={listing.monthlyAmount}
                        deal={listing.deal as Deal}
                        membership={listing.membership as Membership}
                        rating={listing.rating}
                        ratingCount={listing.ratingCount}
                        liked={listing.liked}
                        href={listing.href}
                      />
                    ))}
                  />
                </div>
              </div>
            )}
            {/* Ads */}
            <AdsSliderColumn />
          </div>
          <ArrowLink
            href="/properties"
            text="Show all"
            color="#202457"
            className="mb-16"
          />
          {/* Ads */}
          <section className="h-fit w-full lg:hidden">
            <SliderWide
              navigation
              images={[1, 2, 3, 4, 5].map((image) => ({
                src: "/assets/images/niceHome.png",
                name: "",
              }))}
            />
          </section>
        </section>
        {/* Apartment Rentals */}
        <section className="px-5 mx-auto mb-16 space-y-8 max-w-screen-2xl xs:px-5 md:space-y-14">
          <div className="w-full space-y-3.5 min-[810px]:w-7/12">
            <div className="flex items-start justify-between gap-2 min-[500px]:justify-start min-[500px]:gap-20">
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
            <div className="flex items-start justify-between gap-2 min-[500px]:justify-start min-[500px]:gap-20">
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
                  <ManagePropertiesInfo2
                    key={idx + 1}
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
        <section className="px-5 mx-auto space-y-5 max-w-screen-2xl xs:px-5">
          <div className="w-full space-y-5 min-[810px]:w-7/12">
            <div className="flex items-start justify-between gap-2 min-[500px]:justify-start min-[500px]:gap-20">
              <h2 className="font-[700] text-2xl mb-3.5 capitalize text-neutral-900">
                Find Apartments in Popular Cities
              </h2>
              <Image
                src="/assets/icons/apartments.svg"
                alt=""
                width={25}
                height={25}
              />
            </div>
          </div>
          <div className="items-center hidden grid-cols-2 gap-5 pb-20 lg:grid lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((city, idx) => {
              return (
                <AOSWrapper key={idx + 1} animation="zoom-in" duration="1000">
                  <PopularCitiesCard
                    // key={idx + 1}
                    location="Kumasi"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, doloribus!"
                    propertyNumber={232}
                    href="/"
                  />
                </AOSWrapper>
              );
            })}
          </div>
          <div className="relative pb-20 h-fit lg:hidden">
            <SliderMultiItems
              items={[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => (
                <PopularCitiesCard
                  key={idx + 1}
                  location="Kumasi"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, doloribus!"
                  propertyNumber={232}
                  href="/"
                />
              ))}
            />
          </div>
        </section>
        <SurveyToast />
      </main>
      <ScrollTopAndSocial />
      <Footer />
    </>
  );
}
