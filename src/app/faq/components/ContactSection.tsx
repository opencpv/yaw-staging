import { openSans } from "@/app/styles/font";
import ContactForm from "./ContactForm";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";

const ContactSection = () => {
  const { images } = useAssets();
  return (
    <section className="px-[15px] md: lg:px-[39px] mb-[444px] mt-[120px] md:mt[125px]">
      <h1
        className={`${openSans.className} lg:text-[31px] mb-[30px] font-semibold lg:mt-[125px] md:mt-[30px]`}
      >
        Have more Questions?
      </h1>
      <div className="grid  grid-cols-1 lg:grid-cols-5 gap-[44px]">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        <div className="relative h-[400px] lg:col-span-3 lg:h-[692px]">
          <Image
            src={images.ContactImage}
            alt="contact image"
            fill
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
