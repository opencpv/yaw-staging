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
    | "Every-3-Years" | string
    ;
  monthlyAmount: number;
  price: number;
  deal: "Editor's Choice" | "Price Drop" | "Best Value" | "None" | "none" | "" | string;
  liked: boolean;
  membership: "Certified" | "Verified" | "Unverified" | "None" | "none" | "" | string;
  className?: string;
  link: string;
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