import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("./ContactForm"), { ssr: false });

export const metadata: Metadata = {
  title: "FAQ",
  description: "FAQ page",
};

const ContactSection = () => {
  const { images } = useAssets();
  return (
    <section className="section space-y-8">
      <h2>Have more Questions?</h2>
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
