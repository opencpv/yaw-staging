import { Database as DB, Tables, Enums } from "./database.types";

declare global {
  type Database = DB;
  type TableNames = keyof DB["public"]["Tables"];
  type ApplicationAutosave = Tables<"application_autosave">;
  type ContactUs = Tables<"contact_us">;
  type DistinctMessage = DB["public"]["Views"]["distinct_messages"]["Row"];
  type FAQ = Tables<"faq">;
  type ListingAutosave = Tables<"listing_autosave">;
  type Message = Tables<"messages">;
  type Notification = Tables<"notifications">;
  type Profile = Tables<"profiles">;
  type PropertyAvailable = Tables<"property_available">;
  type PropertyImage = Tables<"property_images">;
  type PropertyOwnerProfile = Tables<"property_owner_profile">;
  type Property = Tables<"property">;
  type RegularApplication = Tables<"regular_application">;
  type SearchCritieria = Tables<"search_critieria">;
  type Subscriber = Tables<"subscribers">;
  type User = Tables<"profiles">;
  type UserFavoriteProperty = Tables<"user_favorite_properties">;
  type MergedStandardTemplateView =
    DB["public"]["Views"]["merged_standard_template_view"]["Row"];
  type Invoice = Tables<"invoices">;
  type Item = Tables<"products">;
  type SearchCriteria = Tables<"search_critieria">;
  type AgentRequest = Tables<"agent_request">;
  type BlockedUser = Tables<"blocked_users">;
  type AgentRequestMatch = Tables<"agent_request_matches">;

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
