import { Database as DB } from "./database.types";

declare global {
  type ApplicationAutosave = DB["public"]["Tables"]["application_autosave"]["Row"]
  type ContactUs = DB["public"]["Tables"]["contact_us"]["Row"]
  type Database = DB;
  type DistinctMessage = DB["public"]["Views"]["distinct_messages"]["Row"];
  type FAQ = DB["public"]["Tables"]["faq"]["Row"]
  type ListingAutosave = DB["public"]["Tables"]["listing_autosave"]["Row"]
  type Message = DB["public"]["Tables"]["messages"]["Row"];
  type Notification = DB["public"]["Tables"]["notifications"]["Row"]
  type Profile = DB["public"]["Tables"]["profiles"]["Row"]
  type PropertyAvailable = DB["public"]["Tables"]["property_available"]["Row"]
  type PropertyImage = DB["public"]["Tables"]["property_images"]["Row"]
  type PropertyOwnerProfile = DB["public"]["Tables"]["property_owner_profile"]["Row"]
  type RenterProfile = DB["public"]["Tables"]["renter_profile"]["Row"]
  type Property = DB["public"]["Tables"]["property"]["Row"]
  type RegularApplication = DB["public"]["Tables"]["regular_application"]["Row"]
  type RenterProfile = DB["public"]["Tables"]["renter_profile"]["Row"]
  type SearchCritieria = DB["public"]["Tables"]["search_critieria"]["Row"]
  type StandardTemplate = DB["public"]["Tables"]["standard_template"]["Row"]
  type Subscriber = DB["public"]["Tables"]["subscribers"]["Row"]

  type PaymentStructure =
    | "Yearly"
    | "Bi-Annually"
    | "Quarterly"
    | "Every-6-Months"
    | "Every-3-Years";
  type Deal =
    | "Editor's Choice"
    | "Price Drop"
    | "Best Value"
    | "None"
    | "none"
    | "";
  type Membership =
    | "Certified"
    | "Verified"
    | "Unverified"
    | "None"
    | "none"
    | "";
}
