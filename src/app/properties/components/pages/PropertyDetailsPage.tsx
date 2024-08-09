import "../../style.css";
import React from "react";
import RecommendedListings from "@/components/__shared/ui/listing/RecommendedListings";
import PropertyDetailsFigures from "../PropertyDetailsFigures";
import PropertyRating from "../PropertyRating";
import PropertyDetailsImages from "../PropertyDetailsImages";
import PropertyDetailsFeatures from "../PropertyDetailsFeatures";
import dynamic from "next/dynamic";
import { updateRecentViews } from "../../_actions";
import { generatePropertyTitle } from "@/lib/enum";
import toast from "react-hot-toast";
import supabase from "@/lib/utils/supabase/supabaseClient";
import AdditionalInfo from "../AdditionalInfo";
import AdditionalInfoMobile from "../AdditionalInfoMobile";
import PropertySuitedFor from "../PropertySuitedFor";
import LikeShare from "../LikeShare";
import { BsShieldFillCheck } from "react-icons/bs";

const ApplicationForm = dynamic(
  () => import("@/components/__shared/ui/application-form"),
);

type Props = {
  params: {
    id: string;
  };
};

const PropertyDetailsPage = async ({ params }: Props) => {
  //const router = useRouter();
  //const { previousPath } = useItemPathStore();
  const { id: propertyId } = params;
  //const { user } = useAppStore();
  //
  const { data: listing, error } = await supabase
    .from("published_properties")
    .select(
      "*, profiles!inner (id, full_name, avatar_url, profile_img, phone, whatsapp, is_certified)",
    )
    .eq("id", propertyId)
    .maybeSingle();

  if (error) toast.error("Failed to fetch property. Please try again.");

  //useEffect(() => {
  //  const upsertRecentViews = async () => {
  //    await updateRecentViews({
  //      propertyId: Number(params.id),
  //      userId: user?.id as string,
  //    });
  //  };
  //
  //  upsertRecentViews();
  //}, [params.id, user?.id]);

  return (
    <main className="wrapper flex flex-col gap-10 text-shade-300 max-md:pb-32">
      <section className="flex w-full flex-col gap-x-10 gap-y-5 md:flex-row">
        <h2 className="text-primary">
          {generatePropertyTitle(listing as Partial<Property>)}
        </h2>
        <div className="flex flex-1 items-center justify-between gap-5">
          {(listing?.profiles?.is_certified || listing?.is_verified) && (
            <div className="flex items-center gap-2">
              <BsShieldFillCheck className="text-primary/80" size={20} />{" "}
              Verified Listing
            </div>
          )}
          <LikeShare listing={listing as Property} />
        </div>
      </section>
      <PropertyDetailsImages images={[]} />
      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 flex flex-col gap-10 lg:col-span-2">
          <h2 className="text-shade-500">Property Details</h2>
          <PropertySuitedFor listing={listing as Property} />
          <PropertyDetailsFigures listing={listing as Property} />
          <section>{listing?.description}</section>
          <PropertyDetailsFeatures listing={listing as Property} />
          <section className="space-y-10">
            <h3 className="text-shade-500">Things To Know</h3>
            <p>{listing?.renter_knowledge}</p>
          </section>
        </div>
        <AdditionalInfo
          listing={listing as Property}
          className="max-md:hidden"
        />
      </section>
      <PropertyRating />
      <AdditionalInfoMobile listing={listing as Property} />
      <RecommendedListings />
    </main>
  );
};

export default PropertyDetailsPage;
