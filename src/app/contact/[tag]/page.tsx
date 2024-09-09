import { Metadata } from "next";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import { CONTACT_US_PAGE_QUERY } from "@/lib/utils/sanity/queries";
import dynamic from "next/dynamic";
import capitalizeName, { unslugify } from "@/lib/utils/stringManipulation";
import { ContactTabActiveKey } from "@/store/contact/useContactStore";
import { Suspense } from "react";
import Loader from "@/components/__shared/ui/loader";
const ContactFormSideContent = dynamic(
  () => import("../components/ContactFormSideContent"),
);

const ContactForm = dynamic(() => import("../components/ContactForm"), {
  ssr: false,
  loading: () => <Loader />,
});

type Props = {
  params: { tag: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const tag = capitalizeName(unslugify(params.tag));

  return {
    title: tag,
    description: "", // tentative
  };
}

export default async function page({ params }: Props) {
  const contactUsData = await loadQuery<SanityDocument[]>(
    CONTACT_US_PAGE_QUERY,
  );

  return (
    <>
      <Suspense fallback={<Loader />}>
        <ContactForm tag={params.tag as ContactTabActiveKey} />
      </Suspense>
      <ContactFormSideContent
        tag={params.tag as ContactTabActiveKey}
        data={contactUsData.data[0]}
      />
    </>
  );
}
