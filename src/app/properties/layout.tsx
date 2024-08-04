import legal from "@/enum/about/legal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: `%s | Properties - ${legal.websiteName}`,
    default: "Properties",
  },
  description: "Find your dream home in Ghana. Browse through a wide variety of properties for rent. Compare properties and get notified when new listings match your preferences.", // tentative
};

const PropertyLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default PropertyLayout;
