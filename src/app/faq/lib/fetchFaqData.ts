import { sanityClient } from "@/lib/utils/sanityClient";


const fetchFaqData = async () => {
    const query = `*[_type == "faqItem"]{
        _id,
        title,
        description,
        category->{title}
        
      }`;

    const data = await sanityClient.fetch(query);
    return data;
}

export default fetchFaqData;