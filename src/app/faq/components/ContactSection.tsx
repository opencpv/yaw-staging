import ContactForm from "./ContactForm";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";

const ContactSection = () => {
  const { images } = useAssets();
  return (
    <section className="space-y-8">
      <h2
        className="sm:text-3xl"
      >
        Have more Questions?
      </h2>
      <div className="flex flex-col gap-10 gap-y-20 md:flex-row">
        <div className="flex-1">
          <ContactForm />
        </div>
        <div className="flex-1">
          <Image
            src={images.ContactImage}
            alt="contact image"
            width={1200}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
