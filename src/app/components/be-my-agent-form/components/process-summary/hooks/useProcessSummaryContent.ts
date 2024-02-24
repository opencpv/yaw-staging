import { useLocalStorage } from "@uidotdev/usehooks";
import { BeMyAgentFormType } from "../../types";

const useProcessSummaryContent = () => {
  const [agentFormData, setAgentFormData] =
    useLocalStorage<BeMyAgentFormType>("agent-form");

  const processPages = [
    {
      title: "Location",
      content: {
        City: "Accra",
        Neighbourhood: "Dansoman",
      },
    },
    {
      title: "Preferred Type",
      content: {
        Property_Type: agentFormData?.propertyType,
      },
    },
    {
      title: "Property Requirements",
      content: {
        Price_Range: `GHS ${agentFormData?.priceRangeMinimum || ""} - GHS ${
          agentFormData?.priceRangeMaximum || ""
        }`,
        Beds:
          agentFormData?.bedMinimum === "1" && agentFormData?.bedMaximum === "1"
            ? "1"
            : `${agentFormData?.bedMinimum || ""} - ${
                agentFormData?.bedMaximum || ""
              }`,
        Bathroom:
          agentFormData?.bathroomMinimum === "1" &&
          agentFormData?.bathroomMaximum === "1"
            ? "1"
            : `${agentFormData?.bathroomMinimum || ""} - ${
                agentFormData?.bathroomMaximum || ""
              }`,
        Lease_Terms:
          agentFormData?.leaseTermMinimum === "1" &&
          agentFormData?.leaseTermMaximum === "1"
            ? "1"
            : `${agentFormData?.leaseTermMinimum || ""} - ${
                agentFormData?.leaseTermMaximum || ""
              }`,
        Moving_In: agentFormData?.paymentOption || "-",
        Desired_Move_in_Date: agentFormData?.moveInDate || "-",
      },
    },
    {
      title: "Lease Holder Information",
      content: {
        Title: agentFormData?.title || "-",
        Age: agentFormData?.dateOfBirth,
        First_Name: agentFormData?.firstName || "-",
        Last_Name: agentFormData?.lastName || "-",
        Marital_Status: agentFormData?.maritalStatus || "-",
        Number_of_Tenants: agentFormData?.tenants || "-",
      },
    },
    {
      title: "Screening & Other Details",
      content: {
        Have_you_ever_been_evicted: agentFormData?.evictedBefore || "-",
        Eviction_Reason: agentFormData?.reasonForEviction || "-",
        Have_you_ever_been_convicted: agentFormData?.convictedBefore || "-",
        Conviction_Reason: agentFormData?.reasonForConviction || "-",
        Do_you_have_any_pets: agentFormData?.pets || "-",
        Do_you_have_any_vehicles: agentFormData?.vehicles || "-",
      },
    },
    {
      title: "Contact Information",
      content: {
        Current_Address_1: agentFormData?.currentAddress1 || "-",
        Current_Address_2_Optional: agentFormData?.currentAddress2 || "-",
        City: agentFormData?.city || "-",
        Country: agentFormData?.country || "-",
        Preferred_Method_of_Contact:
          agentFormData?.preferredMethodOfContact || "-",
        Email: agentFormData?.email || "-",
        Phone: agentFormData?.phoneNumber || "-",
        Purpose_for_Moving: agentFormData?.reasonsForMoving || "-",
      },
    },
  ];

  return processPages;
};

export default useProcessSummaryContent;
