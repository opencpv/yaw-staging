const listings = [
  {
    id: 1,
    propertyType: "2 bedroom apartment",
    propertyDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odioqui repellat quibusdam ipsam.",
    images: [
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
    ],
    price: 300000,
    paymentStructure: "Quarterly",
    monthlyAmount: 25000,
    deal: "Best Value",
    membership: "Verified",
    rating: 3.5,
    ratingCount: 200,
    liked: false,
    href: "/properties/details",
  },
  {
    id: 2,
    propertyType: "4 bedroom apartment",
    propertyDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odioqui repellat quibusdam ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odioqui repellat quibusdam ipsam.",
    images: [
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
    ],
    price: 300000,
    paymentStructure: "Bi-Annually",
    monthlyAmount: 25000,
    deal: "Best Value",
    membership: "Verified",
    rating: 0,
    ratingCount: 0,
    liked: true,
    href: "/properties/details",
  },
  {
    id: 3,
    propertyType: "4 bedroom apartment",
    propertyDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odioqui repellat quibusdam ipsam. Lorem ipsum dolor.",
    images: [
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
    ],
    price: 200000,
    paymentStructure: "Bi-Annually",
    monthlyAmount: 11000,
    deal: "Editor's Choice",
    membership: "Certified",
    rating: 4.2,
    ratingCount: 400,
    liked: false,
    href: "/properties/details",
  },
  {
    id: 4,
    propertyType: "4 bedroom apartment",
    propertyDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odioqui repellat quibusdam ipsam. Lorem ipsum dolor.",
    images: [
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
    ],
    price: 200000,
    paymentStructure: "Every-6-Months",
    monthlyAmount: 11000,
    deal: "Editor's Choice",
    membership: "Certified",
    rating: 4.2,
    ratingCount: 400,
    liked: false,
    href: "/properties/details",
  },
  {
    id: 5,
    propertyType: "3 bedroom apartment",
    propertyDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odioqui repellat quibusdam ipsam. Lorem ipsum dolor.",
    images: [
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
    ],
    price: 200000,
    paymentStructure: "Yearly",
    monthlyAmount: 11000,
    deal: "Editor's Choice",
    membership: "Certified",
    rating: 4.2,
    ratingCount: 400,
    liked: false,
    href: "/properties/details",
  },
  {
    id: 6,
    propertyType: "3 bedroom apartment",
    propertyDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odioqui repellat quibusdam ipsam. Lorem ipsum dolor.",
    images: [
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
    ],
    price: 200000,
    paymentStructure: "Every-3-Years",
    monthlyAmount: 11000,
    deal: "Price Drop",
    membership: "",
    rating: 4.2,
    ratingCount: 400,
    liked: true,
    href: "/properties/details",
  },
  {
    id: 7,
    propertyType: "3 bedroom apartment",
    propertyDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odioqui repellat quibusdam ipsam. Lorem ipsum dolor.",
    images: [
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
    ],
    price: 200000,
    paymentStructure: "Every-3-Years",
    monthlyAmount: 11000,
    deal: "",
    membership: "Unverified",
    rating: 1.2,
    ratingCount: 100,
    liked: false,
    href: "/properties/details",
  },
  {
    id: 8,
    propertyType: "3 bedroom apartment",
    propertyDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odioqui repellat quibusdam ipsam. Lorem ipsum dolor.",
    images: [
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
    ],
    price: 200000,
    paymentStructure: "Every-3-Years",
    monthlyAmount: 11000,
    deal: "",
    membership: "Unverified",
    rating: 1.2,
    ratingCount: 100,
    liked: false,
    href: "/properties/details",
  },
  {
    id: 9,
    propertyType: "3 bedroom apartment",
    propertyDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odioqui repellat quibusdam ipsam. Lorem ipsum dolor.",
    images: [
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
    ],
    price: 200000,
    paymentStructure: "Every-3-Years",
    monthlyAmount: 11000,
    deal: "",
    membership: "Unverified",
    rating: 1.2,
    ratingCount: 100,
    liked: false,
    href: "/properties/details",
  },
  {
    id: 10,
    propertyType: "3 bedroom apartment",
    propertyDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odioqui repellat quibusdam ipsam. Lorem ipsum dolor.",
    images: [
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
    ],
    price: 200000,
    paymentStructure: "Every-3-Years",
    monthlyAmount: 11000,
    deal: "",
    membership: "Unverified",
    rating: 1.2,
    ratingCount: 100,
    liked: false,
    href: "/properties/details",
  },
  {
    id: 11,
    propertyType: "3 bedroom apartment",
    propertyDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odioqui repellat quibusdam ipsam. Lorem ipsum dolor.",
    images: [
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
    ],
    price: 200000,
    paymentStructure: "Every-3-Years",
    monthlyAmount: 11000,
    deal: "",
    membership: "Unverified",
    rating: 1.2,
    ratingCount: 100,
    liked: false,
    href: "/properties/details",
  },
  {
    id: 12,
    propertyType: "3 bedroom apartment",
    propertyDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odioqui repellat quibusdam ipsam. Lorem ipsum dolor.",
    images: [
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
    ],
    price: 200000,
    paymentStructure: "Every-3-Years",
    monthlyAmount: 11000,
    deal: "",
    membership: "Unverified",
    rating: 1.2,
    ratingCount: 100,
    liked: false,
    href: "/properties/details",
  },
  {
    id: 13,
    propertyType: "3 bedroom apartment",
    propertyDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odioqui repellat quibusdam ipsam. Lorem ipsum dolor.",
    images: [
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
    ],
    price: 200000,
    paymentStructure: "Every-3-Years",
    monthlyAmount: 11000,
    deal: "",
    membership: "Unverified",
    rating: 1.2,
    ratingCount: 100,
    liked: false,
    href: "/properties/details",
  },
  {
    id: 14,
    propertyType: "3 bedroom apartment",
    propertyDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odioqui repellat quibusdam ipsam. Lorem ipsum dolor.",
    images: [
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
    ],
    price: 200000,
    paymentStructure: "Every-3-Years",
    monthlyAmount: 11000,
    deal: "",
    membership: "Unverified",
    rating: 1.2,
    ratingCount: 100,
    liked: false,
    href: "/properties/details",
  },
  {
    id: 15,
    propertyType: "3 bedroom apartment",
    propertyDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odioqui repellat quibusdam ipsam. Lorem ipsum dolor.",
    images: [
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
    ],
    price: 200000,
    paymentStructure: "Every-3-Years",
    monthlyAmount: 11000,
    deal: "",
    membership: "Unverified",
    rating: 1.2,
    ratingCount: 100,
    liked: false,
    href: "/properties/details",
  },
  {
    id: 16,
    propertyType: "3 bedroom apartment",
    propertyDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odioqui repellat quibusdam ipsam. Lorem ipsum dolor.",
    images: [
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
      "/assets/images/niceHome.png",
      "/assets/images/Stock.jpg",
    ],
    price: 200000,
    paymentStructure: "Every-3-Years",
    monthlyAmount: 11000,
    deal: "",
    membership: "Unverified",
    rating: 1.2,
    ratingCount: 100,
    liked: false,
    href: "/properties/details",
  },
];

export default listings;
