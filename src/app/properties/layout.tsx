import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | RentRightGH",
    default: "Property",
  },
  description: "", // tentative
};

const PropertyLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default PropertyLayout;
