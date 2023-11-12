interface ListingCardInterface extends ListingInterface {
  id?: number | string;
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
}

interface RenterPaidFeatureInterface {
  title: "Be My Agent" | "Be The First To Know";
  className?: string;
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
  href?: string;
}

interface ApplicationsInterface {
  propertyTitle: string;
  propertyImage: string;
  applicantImage: string;
  applicantName: string;
  date: string;
  propertyPrice: number;
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

interface ListingInterface {
  images: string[]
  propertyType: string;
  href?: string;
}

interface MessageInterface {
  content: string;
  time: string;
}

interface ManagePropertiesInterface {
  propertyTitle: string;
  image: string;
  posted_on: string;
  price: number;
  isPaidFor: boolean;
  status: PropertyStatusInterface
}

interface PropertyStatusInterface {
  status: "available" | "contract pending" | "leased" | "dormant"
}