import { Metadata, ResolvingMetadata } from "next";
import PropertyDetailsPage from "../components/pages/PropertyDetailsPage";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { Suspense } from "react";


type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // fetch data
  const { data: listing } = await supabase
    .from("property")
    .select("id, bedrooms, property_type, neighbourhood, city")
    .eq("id", params.id)
    .maybeSingle();

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const itemImage = "" || ""; // FIXME:
  const propertyName = `${listing?.bedrooms} Bedroom ${listing?.property_type} - ${listing?.neighbourhood}, ${listing?.city}`;

  return {
    title: propertyName || "",
    openGraph: {
      images: [itemImage, ...previousImages],
    },
  };
}

const page = ({ params }: Props) => {
  return <PropertyDetailsPage params={params} />;
};

export default page;
