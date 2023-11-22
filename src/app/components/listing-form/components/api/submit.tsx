import supabase from "@/lib/utils/supabaseClient";
import { ListingForm } from "../types";
import { submitImage } from "./image";

export const submitListing = async (
  owner: string,
  listingData: ListingForm,
  is_complete = false,
  image: any
) => {
  const { data, error } = await supabase
    .from("property")
    .insert([{ owner_uid: owner }])
    .select();

  if (data) {
    let property_id = data[0]?.id;
    const { data: success1, error } = await supabase
      .from("standard_template")
      .insert([
        {
          property_id: property_id,
          property_type: listingData?.propertyType,
          property_name: listingData?.propertyName,
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
          is_complete: is_complete,
        },
      ])
      .select();

    if (success1) {
      let id = success1[0]?.id;
      submitImage(id, image);
      const { data, error } = await supabase
        .from("property")
        .update({ template_id: id })
        .eq("id", property_id)
        .select();
    }
  }
};

export const editListing = async (
  owner: string,
  listingData: ListingForm,
  id?: number,
  is_complete = false,
  image?: any
) => {
  const { data: success1, error } = await supabase
    .from("standard_template")
    .update([
      {
        property_type: listingData?.propertyType,
        property_name: listingData?.propertyName,
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
        additional_fees: listingData?.additionalFeesArray,
        require_agent_fee: listingData?.agentFee,
        agent_fee: listingData?.agentFee,
        require_viewing_fee: listingData?.viewingFee,
        viewing_fee: listingData?.viewingFeeAmount,
        features_and_amenities: listingData?.featuresAndAmenities,
        is_complete: is_complete,
      },
    ])
    .eq("id", id)
    .select();

  if (success1) {
    let id = success1[0]?.id;
    submitImage(id, image);
  }
};

export const submitOrEditListing = async (
  owner: string,
  listingFormData: ListingForm,
  id?: number,
  is_complete = false,
  image?: any
) => {
  const { data, error } = await supabase
    .from("standard_template")
    .select("id")
    .eq("id", id);

  if (data) {
    editListing(owner, listingFormData, id, true, image);
  } else {
    submitListing(owner, listingFormData, false, image);
  }
};
