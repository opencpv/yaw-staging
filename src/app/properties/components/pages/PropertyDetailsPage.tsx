import "../../style.css";
import React from "react";
import Navbar from "@/components/__shared/ui/Navbar";
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
import Button from "@/components/__shared/ui/button/Button";
import AdditionalInfoMobile from "../AdditionalInfoMobile";

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
      "*, profiles!inner (id, full_name, avatar_url, profile_img, phone, whatsapp)",
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
    <>
      <Navbar
      //propertyName={generatePropertyTitle(listing as Partial<Property>)}
      //propertyId={listing?.id}
      //liked={listing?.favorite_user_ids?.includes(user?.id as string)}
      />
      <main className="wrapper flex flex-col gap-10 text-shade-300">
        <section className="flex w-full flex-col gap-x-10 gap-y-5 md:flex-row">
          <h2 className="text-primary">
            {generatePropertyTitle(listing as Partial<Property>)}
          </h2>
          <div className="flex flex-1 items-center justify-between gap-5">
            <div>Verfied Listing</div>
            <div>like and share</div>
              {/*
              <div className="flex items-center gap-4">
                <LikeHeart
                  liked={props.liked}
                  userId={user?.id as string | number}
                  propertyId={props.propertyId}
                  className="text-3xl text-white sm:text-4xl"
                />
                <Share
                  title={props.propertyName}
                  content={props.propertyDescription}
                  classNames={{
                    icon: "text-5xl text-white",
                  }}
                  hideLabel
                />
              </div>
              */}
            
          </div>
        </section>
        <PropertyDetailsImages images={[]} />
        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 flex flex-col gap-10 lg:col-span-2">
            <h2 className="text-shade-500">Property Details</h2>
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
    </>
  );
};

export default PropertyDetailsPage;
