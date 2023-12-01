import { Database as DB } from "./database.types";

declare global {
  type Database = DB;
  type Message = DB["public"]["Tables"]["messages"]["Row"];
  type DistinctMessage = DB["public"]["Views"]["distinct_messages"]["Row"];

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
