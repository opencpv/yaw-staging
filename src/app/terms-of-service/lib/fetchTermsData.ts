import { sanityClient } from "@/lib/utils/sanityClient";

const fetchTermsData = async () => {
  const query = `*[_type == "terms"]{
    title,
    subtitle,
    description,
      termCategories
  }`;

  const data = await sanityClient.fetch(query);
  return await data;
};

export default fetchTermsData;
