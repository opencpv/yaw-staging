import slugify from "@/lib/utils/slugify";

export const useMenuLinks = () => {
  const linksAfterLogin = [
    getMenuItem("hire us"),
    {
      name: "homes for rent",
      sub: homesForRentSubLinks,
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
    getMenuItem("moving sale"),
    getMenuItem("blog"),
    getMenuItem("about"),
    getMenuItem("faq"),
    {
      name: "more",
      sub: [
        getMenuItem("faq"),
        getMenuItem("how to"),
        getMenuItem("contact"),
        getMenuItem("payments"),
        getMenuItem("join us"),
        getMenuItem("report fraud"),
      ],
    },
  ];

  const bottomLinksAfterLogin = [
    getMenuItem("how to"),
    getMenuItem("contact"),
    getMenuItem("payments"),
    getMenuItem("join us"),
    getMenuItem("report fraud"),
    {
      name: "Feedback",
    },
  ];

  const linksBeforeLogin = [
    getMenuItem("about"),
    getMenuItem("faq"),
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
    getMenuItem("contact"),
    {
      name: "homes for rent",
      sub: homesForRentSubLinks,
    },
    getMenuItem("moving sale"),
    getMenuItem("blog"),
    {
      name: "more",
      sub: [
        getMenuItem("blog"),
        getMenuItem("how to"),
        getMenuItem("payments"),
        getMenuItem("join us"),
        getMenuItem("report fraud"),
      ],
    },
  ];

  const bottomLinksBeforeLogin = [
    getMenuItem("how to"),
    getMenuItem("payments"),
    getMenuItem("join us"),
    getMenuItem("report fraud"),
    {
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

const getMenuItem = (menu: string) => {
  switch (menu) {
    case "about":
      return {
        name: "our services",
        url: "/about",
      };
    case "blog":
      return {
        name: "area vibes",
        url: "/blog",
      };
    case "contact":
      return {
        name: "contact",
        url: "/contact/general",
      };
    case "payments":
      return {
        name: "payments",
        url: "/b2b",
      };
    case "report fraud":
      return {
        name: "report fraud",
        url: "/contact/report",
      };
    case "hire us":
      return {
        name: "hire us",
        url: `/dashboard/renter/my-agent/explore`,
      };
    default:
      return {
        name: menu,
        url: `/${slugify(menu.toLowerCase())}`,
      };
  }
};

const homesForRentSubLinks = [
  {
    id: "#",
    name: "View All Listings",
    url: "/properties",
    label: "all-listings",
    isSubLink: true,
  },
  //{
  //  name: "Self Contained",
  //  url: "/properties/self-contained",
  //  id: "#",
  //  label: "self-contained",
  //},
  {
    id: "#",
    name: "Apartments",
    url: "/properties/apartment",
    label: "apartments",
    isSubLink: true,
  },
  {
    id: "#",
    name: "Flats",
    url: "/properties/flats",
    label: "flats",
    isSubLink: true,
  },
  {
    id: "#",
    name: "Compound Houses",
    url: "/properties/compound-house",
    label: "compound-houses",
    isSubLink: true,
  },
];
