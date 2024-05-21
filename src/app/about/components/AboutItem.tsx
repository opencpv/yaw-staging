import { urlForImage } from "@/lib/utils/sanity/utils";
import Image from "next/image";

const AboutItem = ({ data, index }: { data: any; index: number }) => {
  const Heading1 = () => (
    <div className="relative  w-fit first:mt-0">
      <h2 className="border-l-8 border-[#DDB771] px-4 text-2xl font-bold text-[#2A4E55] md:text-4xl 2xl:text-5xl">
        {data.title}
      </h2>
    </div>
  );

  const Heading2 = () => (
    <div className="relative w-fit ">
      <h2 className=" border-l-8 border-[#DDB771] px-4 text-2xl font-bold text-[#2A4E55] md:text-4xl 2xl:text-5xl">
        {data.title}
      </h2>
    </div>
  );

  const Description = () => (
    <p className="text-base font-[500] leading-normal text-[#8A8A8A] md:text-lg md:leading-normal 2xl:text-2xl 2xl:leading-normal">
      {data.description}
    </p>
  );

  const ImageComponent = () => (
    <Image
      src={urlForImage(data.featuredImage)?.url() as string}
      alt=""
      fill
      objectFit="cover"
      objectPosition="center"
    />
  );

  if (index % 2 !== 0) {
    return (
      <div className=" grid  w-full grid-cols-1 items-center gap-6 lg:grid-cols-2 justify-center">
        <div className="flex flex-col justify-center gap-3  ">
          <Heading1 />
          <Description />
        </div>
        <div className="relative w-full aspect-[403/426]  sm:aspect-[775/716]   lg:aspect-[824/557] max-w-[824px] lg:rounded-xl overflow-hidden">
          <ImageComponent />
        </div>
      </div>
    );
  } else if (index % 2 == 0) {
    return (
      <div className="grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-2 justify-center">

        <div className="order-2 lg:order-1 relative w-full aspect-[403/426]  sm:aspect-[775/716]   lg:aspect-[824/557] max-w-[824px] lg:rounded-xl overflow-hidden">
          <ImageComponent />
        </div>

        <div className="order-1 flex flex-col justify-center gap-3 lg:order-2">
          <Heading2 />
          <Description />
        </div>
      </div>
    );
  }
};

export default AboutItem;
