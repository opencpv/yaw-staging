import { sanityClient } from "@/lib/utils/sanityClient";

const fetchAboutData = async () => {
  const query = `*[_type == "about"]`;

  const data = await sanityClient.fetch(query);
  return data;
};

export default fetchAboutData;
