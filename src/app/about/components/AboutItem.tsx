import { useAssets } from "@/lib/custom-hooks/useAssets";
import urlFor from "@/lib/utils/urlFor";
import Image from "next/image";
import { date } from "yup";

const AboutItem = ({ data, index }: { data: any; index: number }) => {
  console.log(data);
  const { images } = useAssets();

  const Heading1 = () => (
    <div className="relative w-fit mt-8 ">
      <h2 className="border-l-[11px]  text-[#2A4E55] border-[#DDB771] px-[15px] font-bold text-[39px] md:text-[49px]">
        {data.title}
      </h2>
      <Image
        src={images.SplashImage}
        alt="splash"
        className="absolute top-0 -right-[107px] -z-10 "
      />
    </div>
  );

  const Heading2 = () => (
    <div className="relative w-fit  ">
      <h2 className="border-l-[11px] mt-[32.5px] text-[#2A4E55] border-[#DDB771] px-[15px] font-bold text-[39px] md:text-[49px]">
        {data.title}
      </h2>
    </div>
  );

  const Description = () => (
    <p className="mt-8 text-[#8A8A8A] text-base  md:text-[25px]">
      {data.description}
    </p>
  );

  const ImageComponent = () => (
    <Image
      src={urlFor(data.featuredImage).width(1728).url()}
      alt=""
      fill
      objectFit="cover"
      objectPosition="center"
    />
  );
  if (index == 1) {
    return (
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 ">
        <div className="flex h-full justify-center flex-col lg:py-[150px] ">
          <Heading1 />
          <Description />
        </div>
        <div className="w-full relative  md:h-[716px] lg:h-full h-[426px]">
          <ImageComponent />
        </div>
      </div>
    );
  } else if (index % 2 == 0) {
    return (
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 ">
        <div className="w-full relative md:h-[716px] lg:h-full h-[426px]">
          <ImageComponent />
        </div>
        <div className="flex h-full justify-center flex-col lg:py-[150px]">
          <Heading2 />
          <Description />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 ">
          <div className="flex h-full justify-center flex-col lg:py-[150px]">
            <Heading2 />
            <Description />
          </div>
          <div className="w-full relative md:h-[716px] lg:h-full h-[426px]">
            <ImageComponent />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 ">
          <div className="flex h-full justify-center flex-col lg:py-[150px]">
            <Heading2 />
            <Description />
          </div>
          <div className="w-full relative md:h-[716px] lg:h-full h-[426px]">
            <ImageComponent />
          </div>
        </div>
      </>
    );
  }

  return <div></div>;
};

export default AboutItem;
