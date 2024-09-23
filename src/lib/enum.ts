import images from "@/enum/temp/images";
import capitalizeName, {
  caseInsensitiveCompare,
  convertNumWithoutPlus,
} from "./utils/stringManipulation";

export type Listing = {
  profiles?: {
    id?: string;
    is_certified?: boolean;
  } | null;
} & Property;

export const getListingProps = (listing: Partial<Listing>, user: UserType) => {
  return {
    cardType: "2" as "1" | "2" | undefined,
    liked: listing?.favorite_user_ids?.includes(user?.id as string),
    propertyId: listing?.id as number,
    href: `/properties/${listing?.id}?${new URLSearchParams({
      property_type: listing?.property_type as string,
      property_name: listing?.property_name as string,
      bedrooms: String(listing?.bedrooms),
      city: listing?.city as string,
      neighbourhood: listing?.neighbourhood as string,
      payment_terms: String(listing?.payment_terms),
      monthly_amount: listing?.currency + " " + String(listing?.monthly_amount),
      //rating: String(4),
      //viewing_fee: String(listing?.viewing_fee),
      is_realtors_choice: String(listing?.is_realtors_choice),
      is_best_value: String(listing?.is_best_value),
      is_featured: String(listing?.is_featured),
    })}`,
    bedrooms: listing?.bedrooms as string,
    propertyType: listing?.property_type as string,
    propertyName: listing?.property_name as string,
    city: listing?.city as string,
    neighbourhood: listing?.neighbourhood as string,
    images: images, // TODO: check database
    guarantee: listing?.is_verified
      ? ("Verified" as GuaranteeTag)
      : listing?.is_lister_certified
        ? ("Certified" as GuaranteeTag)
        : undefined,
    monthlyAmount: listing?.monthly_amount as number,
    rating: 0, // TODO: check database
    ratingCount: 3, // TODO: check database
    hint: listing?.is_realtors_choice
      ? ("Realtor's Choice" as HintTag)
      : listing?.is_best_value
        ? ("Best Value" as HintTag)
        : undefined,
    advancePeriod: caseInsensitiveCompare(
      listing?.payment_terms as string,
      "monthly",
    )
      ? undefined
      : getAdvancePeriod(listing?.payment_terms as string),
    viewingFee: listing?.viewing_fee as number,
    currency: listing?.currency as string,
  };
};

// get number from Advance period. e.g 2 Yr Advance --> 2
export const getAdvancePeriod = (period: string) => {
  const split = period?.split(" ");
  const number = convertNumWithoutPlus(split?.[0]);
  return isNaN(number) ? undefined : number;
};

export const generatePropertyTitle = (property: Partial<Property>) => {
  return `${property?.bedrooms || ""} Bedroom ${capitalizeName(
    property?.property_type || "",
  )} at ${property?.city || ""}`;
};

export { convertNumWithoutPlus };
