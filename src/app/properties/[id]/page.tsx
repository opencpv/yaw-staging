"use client";
import "../style.css";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import React from "react";
import Button from "@/components/__shared/Button";
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

const PropertyDetailsPage = ({ params }: { params: { id: string } }) => {
  const { id: propertyId } = params;

  const { images } = useAssets();

  const {
    data: listing,
    isLoading,
    isValidating,
    error,
  } = useQuery(
    supabase
      .from("standard_template")
      .select(
        "id, property_name, property_id, description, monthly_amount, city",
        {
          count: "exact",
        }
      )
      .eq("property_id", propertyId)
      .single(),
    {
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    }
  );
  return (
    <>
      <Navbar />
      <ShapedLanding
        property={`${listing?.property_name} in ${listing?.city}`}
        image="/assets/images/home/landing.jpg"
        position="left"
      ></ShapedLanding>
      <main className="pb-40 section">
        <section className="py-10 mb-10">
          <div className="text-[#305A61] font-[600] text-2xl">
            <BreadCrumbPreLink
              label="Properties"
              href="/properties"
              className="text-neutral-400"
            />{" "}
            /{" "}
            {isLoading ? (
              <span>
                <Skeleton className="w-44 h-4 inline-block" />
              </span>
            ) : (
              <span className="">
                {listing?.property_name} in {listing?.city}
              </span>
            )}
          </div>
          {/* Property images */}
          <section className="grid grid-cols-1 gap-16 mt-8 md:mt-16 lg:grid-cols-2">
            {isLoading ? (
              <>
                <div className="hidden grid-cols-2 gap-3 lg:grid">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => (
                    <SkeletonLong key={idx + 1} className="mb-0" />
                  ))}
                </div>
                <div className="h-60 mb-20 lg:hidden">
                  <SkeletonRectangle count={1} />
                </div>
              </>
            ) : (
              <PropertyDetailsImages
                images={{
                  images: [""],
                  propertyName: `${listing?.property_name} in ${listing?.city}`,
                }}
              />
            )}

            {/* Grid col */}
            <div className="">
              <section className="">
                <div className="space-y-5">
                  <div className="flex flex-wrap gap-x-16 gap-y-2">
                    {isLoading ? (
                      <Skeleton className="w-40 h-4" />
                    ) : (
                      <h2 className="text-[#305A61] font-[600] text-2xl">
                        {listing?.property_name} in {listing?.city}
                      </h2>
                    )}

                    <div className="flex items-center gap-2">
                      <HiMiniShieldCheck className="text-lg text-green-700" />
                      <p className="text-sm text-neutral-800">
                        Verified Listing
                      </p>
                    </div>
                  </div>
                  {isLoading && <SkeletonTextual />}{" "}
                  {/** shows when description hasn't loaded */}
                  <p className="max-w-2xl text-neutral-800">
                    {listing?.description}
                  </p>
                  <Rate allowHalf defaultValue={4.5} disabled />
                </div>
                {isLoading ? (
                  <SkeletonLong />
                ) : (
                  <div className="mt-20 space-y-10">
                    {/* <Button className="p-4 text-xl text-white capitalize green-gradient py-7 w-60">
                    Apply Now
                  </Button> */}

                    <ApplicationForm type="simple" />
                    <PropertyDetailsFigures
                      monthlyRent={22000}
                      bedroomTotal={3}
                      bathroomTotal={3}
                      squareMeter={{ from: 468, to: 967 }}
                    />
                    <p className="relative bottom-5 inline-block rounded-lg font-[500] bg-[#E7F8F2] text-gray-900 p-3 text-xs">
                      One Year Advance
                    </p>
                  </div>
                )}
                {isLoading ? (
                  <SkeletonLong />
                ) : (
                  <PropertyOwnerInfo
                    name="John Doe"
                    picture=""
                    rating={3.5}
                    reviews={120}
                    telephone="023455112"
                    whatsappNumber="0234323444"
                    id=""
                  />
                )}
              </section>

              {/*  */}
              {isLoading ? (
                <SkeletonLong />
              ) : (
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
              )}
            </div>
          </section>
        </section>
        {/* Features and Amenities */}
        {isLoading ? (
          <SkeletonLong className="w-full h-60" />
        ) : (
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
            ]}
          />
        )}

        {/* Rating */}
        {isLoading ? (
          <SkeletonLong className="w-full h-60" />
        ) : (
          <>
            {" "}
            <PropertyRating />
            <section className="relative -top-14">
              <ReportIssue />
            </section>
          </>
        )}

        {/* Recommended Listings */}
        <section className="">
          <div className="flex flex-wrap items-center justify-between gap-5 mb-5">
            <h2 className="text-neutral-800 text-xl font-[600] md:ml-10">
              Recommended Listings
            </h2>
            <Button variant="ghost" className="text-sm text-neutral-800">
              Show all
            </Button>
          </div>
          <RecommendedListings />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PropertyDetailsPage;
