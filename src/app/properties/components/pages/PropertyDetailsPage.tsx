"use client";
import "../../style.css";
import React, { useEffect, useMemo, useState } from "react";
import Button from "@/components/__shared/ui/button/Button";
import { HiMiniShieldCheck } from "react-icons/hi2";
import Footer from "@/components/__shared/footer/Footer";
import { Rate } from "antd";
import Navbar from "@/components/__shared/Navbar";
import ReportIssue from "@/components/__shared/ReportIssue";
import ShapedLanding from "@/app/components/landing/ShapedLanding";
import ApplicationForm from "@/app/components/application-form";
import RecommendedListings from "@/components/__shared/listing/RecommendedListings";
import PropertyDetailsFigures from "../PropertyDetailsFigures";
import PropertyOwnerInfo from "../PropertyOwnerInfo";
import PropertyDetailsPayment from "../PropertyDetailsPayment";
import PropertyRating from "../PropertyRating";
import PropertyDetailsImages from "../PropertyDetailsImages";
import PropertyDetailsFeatures from "../PropertyDetailsFeatures";
import BreadCrumbPreLink from "@/components/__shared/ui/BreadCrumbPreLink";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { Skeleton } from "@nextui-org/react";
import SkeletonTextual from "@/components/__shared/ui/skeleton/SkeletonTextual";
import SkeletonLong from "@/components/__shared/ui/skeleton/SkeletonLong";
import SkeletonRectangle from "@/components/__shared/ui/skeleton/SkeletonRectangle";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import style from "@/app/components/landing/Shape.module.css";
import { revalidationRule } from "@/lib/utils/fetchRules";
import FetchErrorMessage from "@/components/__shared/ui/data_fetching/FetchErrorMessage";
import { useUserDetails } from "@/lib/custom-hooks/message/useUserDetails";
import ViewPropertyBtn from "../ViewPropertyBtn";
import { useFetchPropertyDetails } from "../../services";
import SomethingWentWrong from "@/app/components/SomethingWentWrong";

type Props = {
  params: {
    id: string;
  };
};

type PropertyDetailsExt = {
  property: {
    owner_uid: {
      fullname: string;
      avatar_url: string;
      profile_img: string;
      phone: string;
      whatsapp: string;
    };
  };
} & MergedStandardTemplateView;

const PropertyDetailsPage = ({ params }: Props) => {
  const { id: propertyId } = params;

  const {
    data: listing,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useFetchPropertyDetails(parseInt(propertyId));

  const propertyName = useMemo(() => {
    return `${listing?.bedrooms} Bedroom ${listing?.property_type} - ${listing?.neighbourhood}, ${listing?.city}`;
  }, [
    listing?.bedrooms,
    listing?.property_type,
    listing?.neighbourhood,
    listing?.city,
  ]);

  const propertyName2 = useMemo(() => {
    return `${listing?.bedrooms} Bedroom ${listing?.property_type} at ${listing?.city}`;
  }, [listing?.bedrooms, listing?.property_type, listing?.city]);

  return (
    <>
      <Navbar propertyName={propertyName} propertyId={listing?.property_id} />
      <FetchingStates
        data={listing}
        error={error}
        isLoading={isLoading}
        isValidating={isFetching}
        isLoadingComponent={
          <div className="">
            <div className="relative mb-20 h-[50rem]">
              <SkeletonLong
                className={`${style.shapeLeft2} h-full w-full rounded-none`}
              />
              <ViewPropertyBtn href="" disabled />
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
        errorComponent={<SomethingWentWrong onTryAgain={() => refetch()} />}
      />
      {listing && (
        <>
          <ShapedLanding
            property={propertyName}
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
                / <span>{propertyName2}</span>
              </div>
              {/* Property images */}
              <section className="mt-8 grid grid-cols-1 gap-16 md:mt-16 lg:grid-cols-2">
                <PropertyDetailsImages
                  images={{
                    images: [""],
                    propertyName,
                  }}
                />
                {/* Grid col */}
                <div>
                  <section>
                    <div className="space-y-5">
                      <div className="flex flex-wrap gap-x-16 gap-y-2">
                        <h2 className="text-2xl font-[600] text-[#305A61]">
                          {propertyName2}
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
                      name={listing?.property?.profiles?.fullname as string}
                      picture={
                        listing?.property?.profiles?.profile_img ||
                        listing?.property?.profiles?.avatar_url
                      }
                      rating={3.5}
                      reviews={120}
                      telephone={listing?.property?.profiles?.phone as string}
                      whatsappNumber={
                        listing?.property?.profiles?.whatsapp as string
                      }
                      id={listing?.property?.profiles?.id as string}
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
            <div className={listing?.features_and_amenities ? "" : "hidden"}>
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
        className="mx-auto mt-20 max-w-screen-3xl px-5 pb-8 sm:px-10 sm:pb-14"
      />
      <Footer />
    </>
  );
};

export default PropertyDetailsPage;
