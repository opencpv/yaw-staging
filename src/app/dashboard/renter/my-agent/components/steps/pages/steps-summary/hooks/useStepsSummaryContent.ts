import capitalizeName, {
  formatDate,
  formatDateDMY,
  formatDateOnly,
} from "@/lib/utils/stringManipulation";
import { BeMyAgentDefaultValues } from "@/store/dashboard/BeMyAgentStepsStore";
import { useFormikContext } from "formik";

const useStepsSummaryContent = () => {
  const { values } = useFormikContext<typeof BeMyAgentDefaultValues>();

  const stepsPages = [
    {
      title: "Location",
      content: {
        City: values?.location?.map((location) => location.city).join(", "),
        Neighbourhood: values?.location
          ?.map((location) => location.neighbourhood)
          .join(", "),
      },
    },
    {
      title: "Preferred Type",
      content: {
        Property_Type: values?.preferredType?.map(
          (property) => capitalizeName(property) + ", ",
        ),
      },
    },
    {
      title: "Required Features",
      content: {
        Required_Features: values?.requiredFeatures?.map(
          (feature) => capitalizeName(feature) + ", ",
        ),
      },
    },
    {
      title: "Property Requirements",
      content: {
        Price_Range:
          values?.priceRangeMinimum === values?.priceRangeMaximum
            ? `GHS ${values?.priceRangeMaximum || ""}`
            : `GHS ${values?.priceRangeMinimum || ""} - GHS ${
                values?.priceRangeMaximum || ""
              }`,
        Beds:
          values?.bedMinimum === values?.bedMaximum
            ? values?.bedMaximum
            : `${values?.bedMinimum || ""} - ${values?.bedMaximum || ""}`,
        Bathroom:
          values?.bathroomMinimum === values?.bathroomMaximum
            ? values?.bathroomMaximum
            : `${values?.bathroomMinimum || ""} - ${
                values?.bathroomMaximum || ""
              }`,
        Lease_Terms:
          values?.leaseTermMinimum === values?.leaseTermMaximum
            ? values?.leaseTermMaximum
            : `${values?.leaseTermMinimum || ""} - ${
                values?.leaseTermMaximum || ""
              }`,
        Preferred_Payment_Option: values?.paymentOption || "-",
        Desired_Move_in_Date: formatDateOnly(values?.moveInDate) || "-",
      },
    },

    {
      title: "Lease Holder Information",
      content: {
        Title: values?.title || "-",
        Age: values?.age || "-",
        First_Name: values?.firstName || "-",
        Last_Name: values?.lastName || "-",
        Marital_Status: values?.maritalStatus || "-",
        Number_of_Tenants: values?.tenants || "-",
      },
    },
    {
      title: "Screening & Other Details",
      content: {
        Have_you_ever_been_evicted:
          capitalizeName(values?.evicted as string) || "-",
        Have_you_ever_been_convicted:
          capitalizeName(values?.convicted as string) || "-",
        Do_you_have_any_pets: capitalizeName(values?.hasPets as string) || "-",
        Do_you_have_any_vehicles:
          capitalizeName(values?.hasVehicles as string) || "-",
      },
    },
    {
      title: "Contact Information",
      content: {
        Current_Address_1: values?.currentAddress1 || "-",
        Current_Address_2_Optional: values?.currentAddress2 || "-",
        City: values?.city || "-",
        Country: values?.country || "-",
        Preferred_Method_of_Contact:
          values?.preferredMethodOfContact as string || "-",
        Email: values?.email || "-",
        Phone: values?.whatsApp || "-",
      },
    },
    {
      title: "Employment Information",
      content: {
        Employment_Status: values?.employmentStatus || "-",
        Employer_or_Income_Source: values?.employer || "-",
        Employer_Country:
          capitalizeName(values?.employerCountry as string) || "-",
        Job_Title: values?.jobTitle || "-",
        Monthly_Income:
          `${values?.monthlyIncomeCurrency?.toUpperCase() || ""} ${
            values?.monthlyIncome || ""
          }` || "-",
      },
    },
  ];

  return stepsPages;
};

export default useStepsSummaryContent;
