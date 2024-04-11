import { Metadata } from "next";

export const metadata: Metadata = {
  // title: {
  //   template: "%s | Property",
  //   default: "Property",
  // },
  title: "Property",
  description: "", // tentative
};

const PropertyLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default PropertyLayout;
