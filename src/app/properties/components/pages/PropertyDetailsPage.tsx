"use client";
import "../../style.css";
import React, { useEffect, useMemo } from "react";
import { HiMiniShieldCheck } from "react-icons/hi2";
import Footer from "@/components/__shared/ui/footer/Footer";
import { Rate } from "antd";
import Navbar from "@/components/__shared/ui/Navbar";
import ReportIssue from "@/components/__shared/ui/links/ReportIssue";
import ShapedLanding from "@/components/__shared/ui/ShapedLanding";
import RecommendedListings from "@/components/__shared/ui/listing/RecommendedListings";
import PropertyDetailsFigures from "../PropertyDetailsFigures";
import PropertyOwnerInfo from "../PropertyOwnerInfo";
import PropertyDetailsPayment from "../PropertyDetailsPayment";
import PropertyRating from "../PropertyRating";
import PropertyDetailsImages from "../PropertyDetailsImages";
import PropertyDetailsFeatures from "../PropertyDetailsFeatures";
import BreadCrumbPreLink from "@/components/__shared/ui/BreadCrumbPreLink";
import { Skeleton } from "@nextui-org/react";
import SkeletonTextual from "@/components/__shared/ui/skeleton/SkeletonTextual";
import SkeletonLong from "@/components/__shared/ui/skeleton/SkeletonLong";
import SkeletonRectangle from "@/components/__shared/ui/skeleton/SkeletonRectangle";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import style from "@/components/__shared/Shared.module.css";
import ViewPropertyBtn from "../ViewPropertyBtn";
import { useFetchPropertyDetails } from "../../services";
import SomethingWentWrong from "@/components/__shared/ui/states/SomethingWentWrong";
import { useAppStore } from "@/store/dashboard/AppStore";
import { cn } from "@/lib/utils";
import { FeatureInterface } from "../../../../../interfaces";
import dynamic from "next/dynamic";
import { useItemPathStore } from "@/store/moving_sales/useMovingSalesStore";
import { useRouter } from "next/navigation";
import { updateRecentViews } from "../../_actions";

const ApplicationForm = dynamic(
  () => import("@/components/__shared/ui/application-form"),
);

type Props = {
  params: {
    id: string;
  };
};

const PropertyDetailsPage = ({ params }: Props) => {
  const router = useRouter();
  const { previousPath } = useItemPathStore();
  const { id: propertyId } = params;
  const { user } = useAppStore();

  const {
    data: listing,
    isLoading,
    error,
    mutate,
  } = useFetchPropertyDetails({ propertyId: parseInt(propertyId) });

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


  useEffect(() => {
    const upsertRecentViews = async () => {
      await updateRecentViews({
        propertyId: Number(params.id),
        userId: user?.id as string,
      });
    };

    upsertRecentViews();
  }, [params.id, user?.id]);

  return (
    <>
      <Navbar
        propertyName={propertyName}
        propertyId={listing?.id}
        liked={listing?.favorite_user_ids?.includes(user?.id as string)}
      />
      <FetchingStates
        data={listing}
        error={error}
        isLoading={isLoading}
        isLoadingComponent={
          <div className="">
            <div className="relative mb-20 h-[50rem]">
              <SkeletonLong
                className={`${style.shapeLeft2} h-full w-full rounded-none`}
              />
              <ViewPropertyBtn href="#" disabled />
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
        errorComponent={<SomethingWentWrong onTryAgain={() => mutate()} />}
      />
      {listing && (
        <>
          <ShapedLanding
            property={propertyName}
            image="/assets/images/home/landing.jpg"
            position="left"
          />
          <main className="wrapper pb-0 pt-20 sm:pb-0 sm:pt-20">
            <section>
              <div className="text-2xl font-medium text-[#305A61]">
                <BreadCrumbPreLink
                  label="Properties"
                  href="/properties"
                  className="text-2xl font-medium text-neutral-300"
                  onClick={() =>
                    previousPath
                      ? router.push(previousPath)
                      : router.push("/properties")
                  }
                />{" "}
                / <span>{propertyName2}</span>
              </div>
              {/* Property images */}
              <section className="mt-8 grid grid-cols-1 gap-16 md:mb-10 md:mt-16 lg:grid-cols-2">
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

                        {listing?.is_verified && (
                          <div className="flex items-center gap-2">
                            <HiMiniShieldCheck className="text-lg text-green-700" />
                            <p className="text-sm text-neutral-800">
                              Verified Listing
                            </p>
                          </div>
                        )}
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
                        monthlyRent={listing?.monthly_amount as number}
                        bedroomTotal={listing?.bedrooms as number}
                        bathroomTotal={listing?.bathrooms as number}
                        squareMeter={{ from: 468, to: 967 }}
                      />
                      <p
                        className={cn(
                          "relative bottom-5 inline-block rounded-lg bg-[#E7F8F2] p-3 text-xs font-[500] text-gray-900",
                          {
                            hidden: !listing?.advance_period,
                          },
                        )}
                      >
                        {listing?.advance_period === 1
                          ? "One Year Advance"
                          : listing?.advance_period === 2
                            ? "Two Year Advance"
                            : null}
                      </p>
                    </div>
                    <PropertyOwnerInfo
                      name={listing?.profiles?.full_name as string}
                      picture={listing?.profiles?.profile_img as string}
                      rating={3.5}
                      reviews={120}
                      telephone={listing?.profiles?.phone as string}
                      whatsappNumber={listing?.profiles?.whatsapp as string}
                      id={listing?.profiles?.id as string}
                    />
                  </section>

                  <PropertyDetailsPayment
                    availableFrom={listing?.available_date as string}
                    agentFee={listing?.agent_fee as number}
                    viewingFee={listing?.viewing_fee as number}
                    refundableSecurityDeposit={500}
                    advancePeriod={listing?.advance_period as number}
                    utilities={listing?.utilities as string[]}
                    thingsToKnow={listing?.renter_knowledge as string}
                  />
                </div>
              </section>
            </section>

            <PropertyDetailsFeatures
              features={listing?.features as FeatureInterface[]}
            />
            <>
              <PropertyRating />
              <ReportIssue className="mt-5" />
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
