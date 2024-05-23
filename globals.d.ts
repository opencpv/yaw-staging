import { Database as DB, Tables, Enums } from "./database.types";

declare global {
  type Database = DB;
  type TableNames = keyof DB["public"]["Tables"];
  type ApplicationAutosave = Tables<"application_autosave">;
  type ContactUs = Tables<"contact_us">;
  type DistinctMessage = DB["public"]["Views"]["distinct_messages"]["Row"];
  type FAQ = DB["public"]["Tables"]["faq"]["Row"];
  type ListingAutosave = DB["public"]["Tables"]["listing_autosave"]["Row"];
  type Message = DB["public"]["Tables"]["messages"]["Row"];
  type Notification = DB["public"]["Tables"]["notifications"]["Row"];
  type Profile = DB["public"]["Tables"]["profiles"]["Row"];
  type PropertyAvailable = DB["public"]["Tables"]["property_available"]["Row"];
  type PropertyImage = DB["public"]["Tables"]["property_images"]["Row"];
  type PropertyOwnerProfile =
    DB["public"]["Tables"]["property_owner_profile"]["Row"];
  type RenterProfile = DB["public"]["Tables"]["renter_profile"]["Row"];
  type Property = DB["public"]["Tables"]["property"]["Row"];
  type RegularApplication =
    DB["public"]["Tables"]["regular_application"]["Row"];
  type RenterProfile = DB["public"]["Tables"]["renter_profile"]["Row"];
  type SearchCritieria = DB["public"]["Tables"]["search_critieria"]["Row"];
  type StandardTemplate = DB["public"]["Tables"]["standard_template"]["Row"];
  type Subscriber = DB["public"]["Tables"]["subscribers"]["Row"];
  type User = DB["public"]["Tables"]["profiles"]["Row"];
  type UserFavoriteProperty =
    DB["public"]["Tables"]["user_favorite_properties"]["Row"];
  type MergedStandardTemplateView =
    DB["public"]["Views"]["merged_standard_template_view"]["Row"];
  type Invoice = Tables<"invoices">;

  type PaymentStructure =
    | "Yearly"
    | "Bi-Annually"
    | "Quarterly"
    | "Every-6-Months"
    | "Every-3-Years";
  type HintTag = "Realtor's Choice" | "Top Rated" | "Best Value";
  type GuaranteeTag = "Certified" | "Verified";
  type UserType = {
    email?: string;
    should_be_contacted?: boolean;
  } & User;
}
