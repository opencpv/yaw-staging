import { useAssets } from "@/lib/custom-hooks/useAssets";
import urlFor from "@/lib/utils/urlFor";
import Image from "next/image";
import { date } from "yup";

const AboutItem = ({ data, index }: { data: any; index: number }) => {
  // console.log(data);
  const { images } = useAssets();

  const Heading1 = () => (
    <div className="relative mt-8 w-fit">
      <h2 className="border-l-8 text-[#2A4E55] border-[#DDB771] px-4 font-bold text-2xl md:text-4xl">
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
    <div className="relative w-fit ">
      <h2 className="border-l-8 mt-8 text-[#2A4E55] border-[#DDB771] px-4 font-bold text-2xl md:text-4xl">
        {data.title}
      </h2>
    </div>
  );

  const Description = () => (
    <p className="mt-8 text-[#8A8A8A] text-base md:text-lg font-[600]">
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
      <div className="grid items-center w-full grid-cols-1 gap-5 mt-16 lg:grid-cols-2 min-h-max">
        <div className="flex flex-col justify-center lg:py-36">
          <Heading1 />
          <Description />
        </div>
        <div className="relative w-full h-[27rem] min-h-0 lg:min-h-full">
          <ImageComponent />
        </div>
      </div>
    );
  } else if (index % 2 == 0) {
    return (
      <div className="grid items-center w-full grid-cols-1 gap-5 mt-8 lg:grid-cols-2 min-h-max">
        <div className="w-full relative h-[27rem] min-h-0 lg:min-h-full">
          <ImageComponent />
        </div>
        <div className="flex flex-col justify-center min-h-full lg:py-36">
          <Heading2 />
          <Description />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="grid items-center w-full grid-cols-1 mt-8 gap-5 lg:grid-cols-2 min-h-max">
          <div className="flex min-h-max justify-center flex-col lg:py-[9rem]">
            <Heading2 />
            <Description />
          </div>
          <div className="w-full relative md:h-[45rem] lg:h-full h-[27rem]">
            <ImageComponent />
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 mt-8 lg:grid-cols-2 ">
          <div className="flex min-h-max justify-center flex-col lg:py-[9rem]">
            <Heading2 />
            <Description />
          </div>
          <div className="w-full relative md:h-[45rem] lg:h-full h-[27rem]">
            <ImageComponent />
          </div>
        </div>
      </>
    );
  }
};

export default AboutItem;
