interface ListingCardInterface extends ListingInterface {
  propertyDescription?: string;
  rating?: number;
  ratingCount?: number;
  paymentStructure?: PaymentStructure;
  monthlyAmount?: number;
  price?: number;
  liked?: boolean;
  id?: number | string;
  deal?: Deal;
  membership?: Membership;
  className?: string;
  cardType?: "1" | "2"
}

interface RenterPaidFeatureInterface {
  title: "Be My Agent" | "Be The First To Know";
  href: string;
  className?: string;
}

interface AdImage {
  /**
   * What property is being advertise?
   */
  propertyType: string;
  image: string;
  href: string;
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

type FeatureInterface =
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

interface ListingInterface {
  images?: string[];
  propertyType?: string;
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
  status: PropertyStatusInterface;
}

interface PropertyStatusInterface {
  status: "available" | "contract pending" | "leased" | "dormant";
}
