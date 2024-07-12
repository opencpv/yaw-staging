type UserOverviewProps = {
  name: string;
  email: string;
  className: string;
  picture?: string;
  telephone?: string;
  type: "renter" | "lister";
  renterMessage?:string,
  listerMessage?:string
};
