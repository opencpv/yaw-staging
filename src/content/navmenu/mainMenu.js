const mainMenu = [
  {
    id: 1,
    text: "Home for rent",
    submenus: [
      {
        id: 1,
        text: "Single Unit Houses",
        hasData: true
      },
      {
        id: 2,
        text: "Duplex Houses",
        hasData: true
      },
      {
        id: 3,
        text: "Apartments",
        hasData: true
      },
      {
        id: 4,
        text: "Self Contained Rooms",
        hasData: true
      },
    ],
  },
  {
    id: 2,
    text: "Hire a professional",
    submenus: [
      {
        id: 1,
        text: "Renter",
        hasData: false,
      },
      {
        id: 2,
        text: "Property Owner",
        hasData: false,
      },
      {
        id: 3,
        text: "Artisan",
        hasData: false,
      },
    ],
  },
  {
    id: 3,
    text: "Moving sale",
    submenus: [],
  },
  {
    id: 4,
    text: "Area vibes",
    submenus: [],
  },
  {
    id: 5,
    text: "FAQs",
    submenus: [],
  },
  {
    id: 6,
    text: "Contact",
    submenus: [],
  },
];

export default mainMenu;
