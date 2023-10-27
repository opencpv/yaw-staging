interface ListingCardInterface {
  id?: number | string;
  images: string[];
  propertyType: string;
  propertyDescription: string;
  rating: number;
  ratingCount: number;
  paymentStructure:
    | "Yearly"
    | "Bi-Annually"
    | "Quarterly"
    | "Every-6-Months"
    | "Every-3-Years";
  monthlyAmount: number;
  price: number;
  deal: "Editor's Choice" | "Price Drop" | "Best Value" | "None" | "none" | "";
  liked: boolean;
  membership: "Certified" | "Verified" | "Unverified" | "None" | "none" | "";
  className?: string;
  href: string;
}

interface AdImage {
  /**
   * What property is being advertise?
   */
  propertyType: string;
  image: string;
  link: string;
}

interface AdCardInterface {
  images: AdImage[];
  className?: string;
}

interface ChatInterface {
  href: string;
  image: string;
  name: string;
  last_message: string;
  messages_count: number;
}

interface FeatureInterface {
  label:
    | "Fire Extinguisher"
    | "Smoke Alarm"
    | "Satellite TV"
    | "Pool Table"
    | "Wifi"
    | "Gas"
    | "Air Conditioning"
    | "Security Cameras on Property"
    | "Kitchen"
    | "Free Parking on Premises"
    | "Hot Tub"
    | "Pool";
}

interface MessageInterface {
  content: string;
  time: string;
}
