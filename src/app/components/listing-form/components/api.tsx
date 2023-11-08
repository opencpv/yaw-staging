import supabase from "@/lib/utils/supabaseClient";
import { ListingForm } from "./types";

export const submitListing = async (owner : string, listingData:  ListingForm) => {
  const { data, error } = await supabase
    .from("property")
    .insert([{ owner_uid: owner }])
    .select();

  const { data2, error2 } = await supabase
    .from("standard_template")
    .insert([{ 
        property_type : listingData?.propertyType,
        property_name : listingData?.propertyName ,
        property_size : listingData?.propertySize,
        description  : listingData?.propertyDescription,
        bedrooms : listingData?.bedrooms,
        bathrooms : listingData?.bathrooms,
        detailed_description : "" ,
        address : "" ,
        digital_address : "" ,
        move_in_data : "",
        // location  : "",
        // lease_type  : listingData?.leaseType,
        // lease_start_date date not null,
        // lease_end_date date not null,
        // lease_length smallint not null,
        // lease_details ,
        features : listingData?.featuresAndAmenities,
        // total_amount real not null,
        agent_fee : listingData?.agentFeeAmount,
     }])
    .select();
};
