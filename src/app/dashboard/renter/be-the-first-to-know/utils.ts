import capitalizeName, {
  convertYesNoToBoolean,
} from "@/lib/utils/stringManipulation";
import { BTFTKDefaultValues } from "@/store/dashboard/BTFTKStepsStore";

export const getFormValues = (values: typeof BTFTKDefaultValues) => {
  return {
    ...values,
    min_beds: values.bedMinimum,
    max_beds: values.bedMaximum,
    min_price: values.priceRangeMinimum,
    max_price: values.priceRangeMaximum,
    min_bathrooms: values.bathroomMinimum,
    max_bathrooms: values.bathroomMaximum,
    property_type: values.preferredType,
    email: values.email,
    phone: values.whatsApp,
    preferred_contact_method: capitalizeName(values.preferredMethodOfContact),
    features: values.requiredFeatures,
    keywords: values.specialKeywords,
  };
};
