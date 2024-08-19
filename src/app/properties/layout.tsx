import legal from "@/enum/about/legal";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/__shared/ui/Navbar"));

export const metadata: Metadata = {
  title: {
    template: `%s | Properties - ${legal.websiteName}`,
    default: "Properties",
  },
  description:
    "Find your dream home in Ghana. Browse through a wide variety of properties for rent. Compare properties and get notified when new listings match your preferences.", // tentative
};

const PropertyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default PropertyLayout;
