import { useDashboardStore } from "@/store/dashboard/dashboardStore";

export const useMenuLinks = () => {
  const { currentRole } = useDashboardStore();

  const linksAfterLogin = [
    {
      id: "#",
      url: `/dashboard/${currentRole}/my-agent/explore`,
      name: "HIRE US",
    },
    {
      id: "#",
      url: "#",
      name: "HOMES FOR RENT",
      sub: [
        {
          name: "View All Listings",
          url: "/properties",
          id: "#",
          label: "all-listings",
        },
        {
          name: "Self Contained ",
          url: "/properties/self-contained",
          id: "#",
          label: "self-contained",
        },
        {
          name: "Apartments",
          url: "/properties/apartments",
          id: "#",
          label: "apartments",
        },
        {
          name: "Flats",
          id: "#",
          url: "/properties/flats",
          label: "flats",
        },
        {
          name: "Compound Houses",
          id: "#",
          url: "/properties/compound-houses",
          label: "compound-houses",
        },
      ],
    },
    // COMMENTED OUT FOR NOW DON'T DELETE !!!
    // {
    //   id: "#",
    //   url: "",
    //   name: "HIRE A PROFESSIONAL",
    //   sub: [
    //     { url: "#", name: "Renter" },
    //     { url: "#", name: "Property Owner" },
    //     { url: "#", name: "Artisan" },
    //   ],
    // },
    { id: "#", url: "/moving-sale", name: "MOVING SALE" },
    { id: "#", url: "/blog", name: "AREA VIBES" },
    { id: "#", url: "/about", name: "OUR SERVICES" },
    { id: "#", url: "/faq", name: "FAQ" },

    {
      id: "#",
      url: "#",
      name: "MORE",
      sub: [
        {
          url: "/faq",
          name: "FAQ",
        },
        {
          url: "/how-to",
          name: "How to",
        },
        {
          url: "/contact",
          name: "Contact",
        },
        {
          url: "/b2b",
          name: "Payments",
        },
        {
          url: "/join-us",
          name: "Join Us",
        },
        {
          url: "/contact",
          name: "Report Fraud",
        },
      ],
    },
  ];

  const bottomLinksAfterLogin = [
    // COMMENTED OUT FOR NOW DON'T DELETE !!!
    // {
    //   url: "/about",
    //   name: "Our Services",
    // },
    {
      url: "/how-to",
      name: "How to",
    },
    {
      url: "/contact",
      name: "Contact",
    },
    {
      url: "/b2b",
      name: "Payments",
    },
    {
      url: "/join-us",
      name: "Join Us",
    },
    {
      url: "/contact",
      name: "Report Fraud",
    },
    {
      url: "/contact",
      name: "Feedback",
    },
  ];

  const linksBeforeLogin = [
    { id: "#", url: "/about", name: "OUR SERVICES" },
    { id: "#", url: "/faq", name: "FAQ" },
    // {
    //   id: "#",
    //   url: "",
    //   name: "HIRE A PROFESSIONAL",
    //   sub: [
    //     { url: "#", name: "Renter" },
    //     { url: "#", name: "Property Owner" },
    //     { url: "#", name: "Artisan" },
    //   ],
    // },
    { id: "#", url: "/contact", name: "CONTACT" },
    {
      id: "#",
      url: "#",
      name: "HOMES FOR RENT",
      sub: [
        {
          url: "/properties",
          name: "View All Listings",
          id: "#",
          label: "all-listings",
        },

        { name: "Self Contained ", id: "#", label: "self-contained" },
        { name: "Apartments", id: "#", label: "apartments" },
        { name: "Flats", id: "#", label: "flats" },
        { name: "Compound Houses", id: "#", label: "compound-houses" },
      ],
    },
    { id: "#", url: "/moving-sale", name: "MOVING SALE" },
    { id: "#", url: "/blog", name: "AREA VIBES" },
    {
      id: "#",
      url: "",
      name: "MORE",
      sub: [
        {
          url: "/blog",
          name: "Area Vibes",
        },
        {
          url: "/how-to",
          name: "How To",
        },
        {
          url: "/b2b",
          name: "Payments",
        },
        {
          url: "/join-us",
          name: "Join Us",
        },
        {
          url: "/contact",
          name: "Report Fraud",
        },
      ],
    },
  ];

  const bottomLinksBeforeLogin = [
    {
      url: "/how-to",
      name: "How To",
    },
    {
      url: "/b2b",
      name: "Payments",
    },
    // {
    //   url: "/how-to",
    //   name: "How to",
    // },
    // {
    //   url: "/contact",
    //   name: "Contact",
    // },
    {
      url: "/join-us",
      name: "Join Us",
    },
    {
      url: "/contact",
      name: "Report Fraud",
    },
    {
      url: "",
      name: "Feedback",
    },
  ];

  return {
    linksAfterLogin,
    bottomLinksAfterLogin,
    linksBeforeLogin,
    bottomLinksBeforeLogin,
  };
};
