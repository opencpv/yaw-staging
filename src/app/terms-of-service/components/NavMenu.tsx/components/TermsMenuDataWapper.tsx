import React from "react";
import { TERMS_QUERY } from "@/lib/utils/sanity/queries";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import TermsMenuArea from "./TermsMenuArea";

const TermsMenuDataWrapper = async () => {
  const initial = await loadQuery<SanityDocument[]>(TERMS_QUERY);
  const data = initial.data[0];

  return <TermsMenuArea termsData={data} />;
};

export default TermsMenuDataWrapper;
