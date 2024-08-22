import "../../style.css";
import style from "../../Template.module.css";
import React, { cache } from "react";
import PropertyDetailsFigures from "../PropertyDetailsFigures";
import PropertyRating from "../PropertyRating";
import PropertyDetailsImages from "../PropertyDetailsImages";
import PropertyDetailsFeatures from "../PropertyDetailsFeatures";
import dynamic from "next/dynamic";
import { updateRecentViews } from "../../_actions";
import { generatePropertyTitle } from "@/lib/enum";
import AdditionalInfo from "../AdditionalInfo";
import AdditionalInfoMobile from "../AdditionalInfoMobile";
import PropertySuitedFor from "../PropertySuitedFor";
import { BsShieldFillCheck } from "react-icons/bs";
import { createClient } from "@/lib/utils/supabase/auth/server";
import supabase from "@/lib/utils/supabase/supabaseClient";
import toast from "react-hot-toast";
const RecommendedListings = dynamic(
  () => import("@/components/__shared/ui/listing/recommended-listings"),
);
const LikeShare = dynamic(() => import("../LikeShare"));

// const ApplicationForm = dynamic(
//   () => import("@/components/__shared/ui/application-form"),
// );

type Props = {
  params: {
    id: string;
  };
};

const PropertyDetailsPage = async ({ params }: Props) => {
  const { id: propertyId } = params;
  const supabaseClient = createClient();
  // const { data } = await supabaseClient.auth.getSession();
  const {
    data: { user },
  } = await supabaseClient.auth.getUser();

  const fetchPropertyDetails = cache(async () => {
    const query = await supabase
      .from("published_properties")
      .select(
        "*, profiles!inner (id, full_name, avatar_url, profile_img, phone, whatsapp, is_certified)",
      )
      .eq("id", propertyId)
      .maybeSingle();

    if (query.error) toast.error("Failed to fetch property. Please try again.");

    return query;
  });

  const { data: listing } = await fetchPropertyDetails();

  if (listing) {
    await updateRecentViews({
      propertyId: Number(params.id),
      userId: user?.id as string,
    });
  }

  return (
    <main className="wrapper flex flex-col gap-10 text-shade-300 max-md:pb-32 sm:pt-20">
      <section className="flex w-full flex-wrap gap-x-10 gap-y-5">
        <h1 className="font-semibold text-primary sm:text-3xl">
          {generatePropertyTitle(listing as Partial<Property>)}
        </h1>
        <div className="flex flex-1 items-center justify-between gap-5 max-sm:flex-wrap">
          {(listing?.profiles?.is_certified || listing?.is_verified) && (
            <div className="flex items-center gap-5 font-semibold">
              <BsShieldFillCheck
                className="shrink-0 text-green-700"
                size={20}
              />{" "}
              <span className="sm:whitespace-nowrap">Verified Listing</span>
            </div>
          )}
          <LikeShare listing={listing as unknown as Property} />
        </div>
      </section>
      <PropertyDetailsImages listing={listing as Property} />
      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 flex flex-col gap-10 lg:col-span-2">
          <h2 className="font-semibold text-shade-500 sm:text-3xl">
            Property Details
          </h2>
          <PropertySuitedFor listing={listing as unknown as Property} />
          <PropertyDetailsFigures listing={listing as unknown as Property} />
          <section>{listing?.description}</section>
          <PropertyDetailsFeatures listing={listing as unknown as Property} />
          <section className={style.detailWrapper}>
            <h2 className={style.detailHeading}>Things To Know</h2>
            <p>{listing?.renter_knowledge}</p>
          </section>
        </div>
        <AdditionalInfo
          listing={listing as unknown as Property}
          className="max-md:hidden"
        />
      </section>
      <PropertyRating />
      <RecommendedListings />
      <AdditionalInfoMobile listing={listing as unknown as Property} />
    </main>
  );
};

export default PropertyDetailsPage;
