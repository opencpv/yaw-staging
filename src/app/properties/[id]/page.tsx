import { Metadata } from "next";
import PropertyDetailsPage from "../components/pages/PropertyDetailsPage";

export const metadata: Metadata = {
  title: "",
  description: "", // tentative
};

const page = ({ params }: { params: { id: string } }) => {
  return <PropertyDetailsPage params={params} />;
};

export default page;
