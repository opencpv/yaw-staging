import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import { BUBBLES_QUERY } from "@/lib/utils/sanity/queries";
import ApplicationsPageView from "./components/ApplicationsPage";

const ApplicationsPage = async () => {
  const initial = await loadQuery<SanityDocument[]>(BUBBLES_QUERY);
  const bubblesData = initial.data[0];

  return <ApplicationsPageView bubblesData={bubblesData} />;
};

export default ApplicationsPage;
