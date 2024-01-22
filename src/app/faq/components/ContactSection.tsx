import ContactForm from "./ContactForm";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";
// import type { Viewport } from "next";
import type { Metadata } from "next";
import Head from "next/head";

// export const viewport = {
//   // width: 'device-width',
//   // initialScale: 1,
//   maximumScale: 1,
//   // userScalable: false,
//   // Also supported by less commonly used
//   // interactiveWidget: 'resizes-visual',
// };

export const metadata: Metadata = {
  title: "FAQ",
  description: "FAQ page",
};

const ContactSection = () => {
  const { images } = useAssets();
  return (
    <section className="section space-y-8">
      {/* <Head>
        <title>FAQ</title>
      </Head> */}
      <h2 className="sm:text-3xl">Have more Questions?</h2>
      <div className="flex flex-col gap-10 gap-y-20 md:flex-row">
        <div className="flex-1">
          <ContactForm />
        </div>
        <div className="flex-1">
          <Image src={images.ContactImage} alt="contact image" width={1200} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
