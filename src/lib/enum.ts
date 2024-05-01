import images from "@/enum/temp/images";

export const getListingProps = (listing: any, user: UserType) => {
  return {
    cardType: "2" as "1" | "2" | undefined,
    liked: listing?.favorite_user_ids?.includes(user?.id as string),
    propertyId: listing?.id as number,
    href: `/properties/${listing?.id}?${new URLSearchParams({
      property_type: listing?.property_type as string,
      bedrooms: String(listing?.bedrooms),
      city: listing?.city as string,
      neighbourhood: listing?.neighbourhood as string,
      subtitle: listing?.subtitle as string,
      advance_period: String(listing?.advance_period),
      amount_per_month: String(listing?.monthly_amount),
      rating: String(4),
      viewing_fee: String(listing?.viewing_fee),
      is_realtors_choice: String(listing?.is_realtors_choice),
      is_best_value: String(listing?.is_best_value),
      is_featured: String(listing?.is_featured),
    })}`,
    bedrooms: listing?.bedrooms as number,
    propertyType: listing?.property_type as string,
    city: listing?.city as string,
    neighbourhood: listing?.neighbourhood as string,
    images: images, // TODO: check database
    guarantee: listing?.is_verified
      ? ("Verified" as GuaranteeTag)
      : listing?.profiles?.is_certified
        ? ("Certified" as GuaranteeTag)
        : undefined,
    monthlyAmount: listing?.monthly_amount as number,
    paymentStructure: "Bi-Annually" as PaymentStructure, // TODO: check database
    subtitle: listing?.subtitle as string,
    rating: 4.5, // TODO: check database
    ratingCount: 105, // TODO: check database
    hint: listing?.is_realtors_choice
      ? ("Realtor's Choice" as HintTag)
      : listing?.is_best_value
        ? ("Best Value" as HintTag)
        : undefined,
    advancePeriod: listing?.advance_period as number,
    ViewingFee: listing?.viewing_fee as number,
  };
};
