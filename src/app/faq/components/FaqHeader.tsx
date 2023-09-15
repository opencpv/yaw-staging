import { openSans } from "@/app/styles/font";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";

const FaqHeader = () => {
  const { images } = useAssets();
  return (
    <section className="md:mx-[30px] md:mt-[48px] green-gradient justify-between md:rounded-[36px] flex flex-wrap pl-[29px] lg:pl-[141px] md:pl-[83px] mb-[89px] bg-white">
      <div>
        <h1
          className={`font-bold  md:text-[31px] lg:text-[49px] ${openSans.className} text-white mt-[91px] md:mt-20 lg:mt-[160px]`}
        >
          FAQ
        </h1>
        <p
          className={`font-semibold text-[25px] ${openSans.className} text-white mt-5 lg:mt-[10.5px] mb-[43px] md:mb-[56px] `}
        >
          Everything You Need to Know
        </p>
      </div>
      <Image
        src={images.FaqImage}
        alt="faq image"
        className="lg:py-[42.45px] md:mb-[53px]"
      />
    </section>
  );
};

export default FaqHeader;
