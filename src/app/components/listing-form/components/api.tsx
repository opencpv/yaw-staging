import supabase from "@/lib/utils/supabaseClient";
import { ListingForm } from "./types";

export const submitListing = async (
  owner: string,
  listingData: ListingForm,
  is_complete=false
) => {
  const { data, error } = await supabase
    .from("property")
    .insert([{ owner_uid: owner }])
    .select();

  if (data) {
    let property_id = data[0]?.id;
    console.log(property_id);
    const { data: success1, error } = await supabase
      .from("standard_template")
      .insert([
        {
          property_id: property_id,
          property_type: listingData?.propertyType,
          // property_name: "",
          property_size: listingData?.propertySize,
          description: listingData?.propertyDescription,
          bedrooms: listingData?.bedrooms,
          bathrooms: listingData?.bathrooms,
          available_date: listingData?.availableDate,
          suited_for: listingData?.suitedFor,
          furnish_level: listingData?.furnishLevel,
          utilities: listingData?.utilities,
          renter_knowledge: listingData?.renterKnowledge,
          city: listingData?.city,
          neighbourhood: listingData?.neighbourhood,
          monthly_amount: listingData?.monthlyAmount,
          require_advance_payment: listingData?.advancePayment,
          advance_payment_options: listingData?.advancePaymentOptions,
          require_refundable_security_deposit:
            listingData?.refundableSecurityDeposit,
          refundable_security_deposit:
            listingData?.refundableSecurityDepositAmount,
          require_additional_fees: listingData?.additionalFees,
          additional_fees: listingData?.additionalFees,
          require_agent_fee: listingData?.agentFee,
          agent_fee: listingData?.agentFee,
          require_viewing_fee: listingData?.viewingFee,
          viewing_fee: listingData?.viewingFeeAmount,
          features_and_amenities: listingData?.featuresAndAmenities,
          is_complete: is_complete
        },
      ])
      .select();

    if (success1) {
      alert(success1);
      const { data, error } = await supabase
        .from("property")
        .update({ template_id: success1[0]?.id })
        .eq("id", property_id)
        .select();
    }
  }
};
