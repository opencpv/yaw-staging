import { useLocalStorage } from "@uidotdev/usehooks";
import { BeMyAgentFormType } from "../../types";
import capitalizeName from "@/lib/utils/stringManipulation";

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
        Property_Type: agentFormData?.propertyType?.map(
          (property) => capitalizeName(property) + ", ",
        ),
      },
    },
    {
      title: "Property Requirements",
      content: {
        Price_Range:
          agentFormData?.priceRangeMinimum === agentFormData?.priceRangeMaximum
            ? `GHS ${agentFormData?.priceRangeMaximum}`
            : `GHS ${agentFormData?.priceRangeMinimum || ""} - GHS ${
                agentFormData?.priceRangeMaximum || ""
              }`,
        Beds:
          agentFormData?.bedMinimum === agentFormData?.bedMaximum
            ? agentFormData?.bedMaximum
            : `${agentFormData?.bedMinimum || ""} - ${
                agentFormData?.bedMaximum || ""
              }`,
        Bathroom:
          agentFormData?.bathroomMinimum === agentFormData?.bathroomMaximum
            ? agentFormData?.bathroomMaximum
            : `${agentFormData?.bathroomMinimum || ""} - ${
                agentFormData?.bathroomMaximum || ""
              }`,
        Lease_Terms:
          agentFormData?.leaseTermMinimum === agentFormData?.leaseTermMaximum
            ? agentFormData?.leaseTermMaximum
            : `${agentFormData?.leaseTermMinimum || ""} - ${
                agentFormData?.leaseTermMaximum || ""
              }`,
        Preferred_Payment_Option: agentFormData?.paymentOption || "-",
        Desired_Move_in_Date: agentFormData?.moveInDate || "-",
      },
    },
    {
      title: "Required Features",
      content: {
        Required_Features: agentFormData?.featuresAndAmenities?.map(
          (feature) => capitalizeName(feature) + ", ",
        ),
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
        Have_you_ever_been_convicted: agentFormData?.convictedBefore || "-",
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
      },
    },
    {
      title: "Employment Information",
      content: {
        Employment_Status: agentFormData?.mostRecentEmployment || "-",
        Employer_or_Income_Source: agentFormData?.employer || "-",
        Employer_Country: agentFormData?.employersCountry || "-",
        Job_Title: agentFormData?.jobTitle || "-",
        Monthly_Income: agentFormData?.monthlyIncome || "-",
      },
    },
  ];

  return processPages;
};

export default useProcessSummaryContent;
