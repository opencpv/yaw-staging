import capitalizeName, { formatDateOnly } from "@/lib/utils/stringManipulation";
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
        Property_Type: values?.property_type?.map(
          (property) => capitalizeName(property) + ", ",
        ),
      },
    },
    {
      title: "Required Features",
      content: {
        Required_Features: values?.features?.map(
          (feature) => capitalizeName(feature) + ", ",
        ),
      },
    },
    {
      title: "Property Requirements",
      content: {
        Price_Range:
          values?.min_price === values?.max_price
            ? `GHS ${values?.max_price || ""}`
            : `GHS ${values?.min_price || ""} - GHS ${
                values?.max_price || ""
              }`,
        Beds:
          values?.min_beds === values?.max_beds
            ? values?.max_beds
            : `${values?.min_beds || ""} - ${values?.max_beds || ""}`,
        Bathroom:
          values?.min_bathrooms === values?.max_bathrooms
            ? values?.max_bathrooms
            : `${values?.min_bathrooms || ""} - ${
                values?.max_bathrooms || ""
              }`,
        Lease_Terms:
          values?.min_lease === values?.max_lease
            ? values?.max_lease
            : `${values?.min_lease || ""} - ${
                values?.max_lease || ""
              }`,
        Preferred_Payment_Option: values?.preferred_payment_option || "-",
        Desired_Move_in_Date: formatDateOnly(values?.move_in_date) || "-",
      },
    },

    {
      title: "Lease Holder Information",
      content: {
        Title: values?.title || "-",
        Age: values?.age || "-",
        First_Name: values?.first_name || "-",
        Last_Name: values?.last_name || "-",
        Marital_Status: values?.marital_status || "-",
        Number_of_Tenants: values?.tenants || "-",
      },
    },
    {
      title: "Screening & Other Details",
      content: {
        Have_you_ever_been_evicted: (values?.evicted as string) || "-",
        Have_you_ever_been_convicted: (values?.convicted as string) || "-",
        Do_you_have_any_pets: (values?.has_pets as string) || "-",
        Do_you_have_any_vehicles: (values?.has_vehicles as string) || "-",
      },
    },
    {
      title: "Contact Information",
      content: {
        Current_Address_1: values?.current_address_1 || "-",
        Current_Address_2_Optional: values?.current_address_2 || "-",
        City: values?.city || "-",
        Country: values?.country || "-",
        Preferred_Method_of_Contact:
          (values?.preferred_contact_method as string) || "-",
        Email: values?.email || "-",
        Phone: values?.phone || "-",
      },
    },
    {
      title: "Employment Information",
      content: {
        Employment_Status: values?.employment_status || "-",
        Employer_or_Income_Source: values?.employer || "-",
        Employer_Country: (values?.employer_country as string) || "-",
        Job_Title: values?.job_title || "-",
        Monthly_Income:
          `${values?.monthly_income_currency?.toUpperCase() || ""} ${
            values?.monthly_income || ""
          }` || "-",
      },
    },
  ];

  return stepsPages;
};

export default useStepsSummaryContent;
