import { E164Number } from "libphonenumber-js/core";

export type FirstToKnowFormType = Partial<{
  searchTitle?: string;
  preferredType: [];
  priceRangeMinimum: string;
  priceRangeMaximum: string;
  bedMinimum: string;
  bedMaximum: string;
  bathroomMinimum: string;
  bathroomMaximum: string;
  requiredFeatures: [];
  city: string;
  phoneNumber: string | E164Number;
  availableOnWhatsapp: boolean;
  preferredMethodOfContact: "email" | "whatsapp";
}>;
