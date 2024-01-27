//@ts-nocheck
"use client";
import "../style.css";
import React, { useEffect, useState } from "react";
import Button from "@/components/__shared/ui/button/Button";
import { HiMiniShieldCheck } from "react-icons/hi2";
import Footer from "@/components/__shared/footer/Footer";
import { Rate } from "antd";
import Navbar from "@/components/__shared/Navbar";
import ReportIssue from "@/components/__shared/ReportIssue";
import ShapedLanding from "@/app/components/landing/ShapedLanding";
import ApplicationForm from "@/app/components/application-form";
import RecommendedListings from "@/components/__shared/listing/RecommendedListings";
import PropertyDetailsFigures from "./components/PropertyDetailsFigures";
import PropertyOwnerInfo from "./components/PropertyOwnerInfo";
import PropertyDetailsPayment from "./components/PropertyDetailsPayment";
import PropertyRating from "./components/PropertyRating";
import PropertyDetailsImages from "./components/PropertyDetailsImages";
import PropertyDetailsFeatures from "./components/PropertyDetailsFeatures";
import BreadCrumbPreLink from "@/components/__shared/ui/BreadCrumbPreLink";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";
import supabase from "@/lib/utils/supabaseClient";
import { Skeleton } from "@nextui-org/react";
import SkeletonTextual from "@/components/__shared/ui/skeleton/SkeletonTextual";
import SkeletonLong from "@/components/__shared/ui/skeleton/SkeletonLong";
import SkeletonRectangle from "@/components/__shared/ui/skeleton/SkeletonRectangle";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import style from "@/app/components/landing/Shape.module.css";
import { revalidationRule } from "@/lib/utils/fetchRules";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";
import { useUserDetails } from "@/lib/custom-hooks/message/useUserDetails";
import { useModalFullscreenStore } from "@/store/modal/useModalStore";
import ViewPropertyBtn from "../components/ViewPropertyBtn";

const PropertyDetailsPage = ({ params }: { params: { id: string } }) => {
  const { id: propertyId } = params;

  const hideWindowScrollbar = useModalFullscreenStore(
    (state) => state.hideWindowScrollbar,
  );

  const {
    data: listing,
    isLoading,
    isValidating,
    error,
  } = useQuery(
    supabase
      .from("standard_template")
      .select(
        `id, property_name, property_id (owner_uid), 
        description, monthly_amount, city, 
        bedrooms, bathrooms, features_and_amenities`,
      )
      .eq("property_id", propertyId)
      .single(),
    revalidationRule(),
  );

  const { userAvi: propertyOwnerAvi, userName: propertyOwnerName } =
    useUserDetails(listing?.property_id.owner_uid);

  return (
    <>
      <Navbar propertyName={`${listing?.property_name} at ${listing?.city}`} />
      <FetchingStates
        data={listing}
        error={error}
        isLoading={isLoading}
        isValidating={isValidating}
        isLoadingComponent={
          <div className="">
            <div className="relative mb-20 h-[50rem]">
              <SkeletonLong
                className={`${style.shapeLeft2} h-full w-full rounded-none`}
              />
              <ViewPropertyBtn disabled />
            </div>
            <div className="wrapper gap-x-20 gap-y-10 lg:grid lg:grid-cols-2">
              {/* grid col */}
              <div className="space-y-10">
                <Skeleton className="h-4 w-full md:w-9/12" />
                <div className="hidden grid-cols-2 gap-3 lg:grid">
                  <SkeletonLong count={10} className="mb-0" />
                </div>
                <div className="mb-20 h-60 w-full lg:hidden">
                  <SkeletonRectangle count={1} />
                </div>
              </div>
              {/* grid col */}
              <div className="space-y-20">
                <div className="space-y-10">
                  <Skeleton className="mb-10 h-4 w-full md:w-9/12" />
                  <SkeletonTextual />
                </div>
                <div className="">
                  <SkeletonLong count={4} />
                </div>
              </div>
            </div>
          </div>
        }
        errorComponent={<FetchErrorMessage />}
      />
      {listing && (
        <>
          <ShapedLanding
            property={`${listing?.property_name} in ${listing?.city}`}
            image="/assets/images/home/landing.jpg"
            position="left"
          ></ShapedLanding>
          <main className="wrapper pb-0 pt-28 sm:pb-0 sm:pt-28">
            <section>
              <div className="text-2xl font-[600] text-[#305A61]">
                <BreadCrumbPreLink
                  label="Properties"
                  href="/properties"
                  className="text-neutral-300"
                />{" "}
                /{" "}
                <span>
                  {listing?.property_name} at {listing?.city}
                </span>
              </div>
              {/* Property images */}
              <section className="mt-8 grid grid-cols-1 gap-16 md:mt-16 lg:grid-cols-2">
                <PropertyDetailsImages
                  images={{
                    images: [""],
                    propertyName: `${listing?.property_name} at ${listing?.city}`,
                  }}
                />
                {/* Grid col */}
                <div>
                  <section>
                    <div className="space-y-5">
                      <div className="flex flex-wrap gap-x-16 gap-y-2">
                        <h2 className="text-2xl font-[600] text-[#305A61]">
                          {listing?.property_name} at {listing?.city}
                        </h2>

                        <div className="flex items-center gap-2">
                          <HiMiniShieldCheck className="text-lg text-green-700" />
                          <p className="text-sm text-neutral-800">
                            Verified Listing
                          </p>
                        </div>
                      </div>
                      <p className="max-w-2xl text-neutral-800">
                        {listing?.description}
                      </p>
                      <Rate allowHalf defaultValue={4.5} disabled />
                    </div>
                    <div className="mt-20 space-y-10">
                      {/* <Button className="p-4 text-xl text-white capitalize green-gradient py-7 w-60">
                        Apply Now
                      </Button> */}

                      <ApplicationForm type="simple" />
                      <PropertyDetailsFigures
                        monthlyRent={22000}
                        bedroomTotal={listing?.bedrooms as number}
                        bathroomTotal={listing?.bathrooms as number}
                        squareMeter={{ from: 468, to: 967 }}
                      />
                      <p className="relative bottom-5 inline-block rounded-lg bg-[#E7F8F2] p-3 text-xs font-[500] text-gray-900">
                        One Year Advance
                      </p>
                    </div>
                    <PropertyOwnerInfo
                      name={propertyOwnerName as string}
                      picture=""
                      rating={3.5}
                      reviews={120}
                      telephone="023455112"
                      whatsappNumber="0234323444"
                      id={listing?.property_id.owner_uid}
                    />
                  </section>

                  {/*  */}
                  <PropertyDetailsPayment
                    availableFrom="YY-MM-DD"
                    agentFee={500}
                    viewingFee={500}
                    refundableSecurityDeposit={500}
                    utilities={[
                      "water",
                      "gas",
                      "electricity",
                      "kitchen appliances",
                      "satellite TV",
                      "internet",
                    ]}
                    thingsToKnow="Lorem ipsum dolor sit amet consectetur. Et tellus viverra faucibus
                  nunc mauris netus. Sem id tincidunt ante non a suspendisse tortor
                  libero. Elementum in lectus varius mus accumsan. Volutpat nec mi
                  pellentesque facilisi. Quisque facilisis nec bibendum dui nullam.
                  Penatibus netus felis quam purus. Nascetur est lobortis egestas leo
                  amet aenean. Vestibulum leo nibh ut pellentesque purus. Dolor
                  gravida at ac pharetra amet malesuada molestie. Amet pretium donec
                  odio dis. Sagittis interdum nibh consectetur pellentesque nunc diam
                  eleifend eu turpis. Tempor urna fames interdum vitae mattis."
                    // years={}
                  />
                </div>
              </section>
            </section>
            {/* Features and Amenities */}
            <div className={listing?.features_and_amenities ? null : "hidden"}>
              <PropertyDetailsFeatures
                features={[
                  "Wifi",
                  "Security Cameras on Property",
                  "Hot Tub",
                  "Air Conditioning",
                  "Fire Extinguisher",
                  "Free Parking on Premises",
                  "Gas",
                  "Kitchen",
                  "Pool",
                  "Smoke Alarm",
                  "Pool Table",
                  "Satellite TV",
                  "Wifi",
                  "Security Cameras on Property",
                  "Hot Tub",
                ]}
              />
            </div>
            <>
              {" "}
              {/* Rating */}
              <PropertyRating />
              <ReportIssue className="mt-5" />
              {/* Recommended Listings */}
            </>
          </main>
        </>
      )}
      <RecommendedListings
        showAllButton
        className="wrapper-section pb-8 sm:pb-14"
      />
      <Footer />
    </>
  );
};

export default PropertyDetailsPage;
