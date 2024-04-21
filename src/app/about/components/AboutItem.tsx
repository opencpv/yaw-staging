import { urlForImage } from "@/lib/utils/sanity/utils";
import Image from "next/image";

const AboutItem = ({ data, index }: { data: any; index: number }) => {
  const Heading1 = () => (
    <div className="relative mt-8 w-fit first:mt-0">
      <h2 className="border-l-8 border-[#DDB771] px-4 text-2xl font-bold text-[#2A4E55] md:text-4xl">
        {data.title}
      </h2>
    </div>
  );

  const Heading2 = () => (
    <div className="relative w-fit ">
      <h2 className="mt-8 border-l-8 border-[#DDB771] px-4 text-2xl font-bold text-[#2A4E55] md:text-4xl">
        {data.title}
      </h2>
    </div>
  );

  const Description = () => (
    <p className="mt-8 text-base font-[600] text-[#8A8A8A] md:text-lg">
      {data.description}
    </p>
  );

  const ImageComponent = () => (
    <Image
      src={urlForImage(data.featuredImage)?.url() as string}
      alt=""
      fill
      style={{ objectFit: "cover" }}
      objectPosition="center"
    />
  );

  if (index == 1) {
    return (
      <div className="mt-16 grid min-h-max w-full grid-cols-1 items-center gap-5 lg:grid-cols-2">
        <div className="flex flex-col justify-center lg:py-36">
          <Heading1 />
          <Description />
        </div>
        <div className="relative h-[27rem] min-h-0 w-full lg:min-h-full">
          <ImageComponent />
        </div>
      </div>
    );
  } else if (index % 2 == 0) {
    return (
      <div className="mt-8 grid min-h-max w-full grid-cols-1 items-center gap-5 lg:grid-cols-2">
        <div className="relative h-[27rem] min-h-0 w-full lg:min-h-full">
          <ImageComponent />
        </div>
        <div className="flex min-h-full flex-col justify-center lg:py-36">
          <Heading2 />
          <Description />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="mt-8 grid min-h-max w-full grid-cols-1 items-center gap-5 lg:grid-cols-2">
          <div className="flex min-h-max flex-col justify-center lg:py-[9rem]">
            <Heading2 />
            <Description />
          </div>
          <div className="relative h-[27rem] w-full md:h-[45rem] lg:h-full">
            <ImageComponent />
          </div>
        </div>
        <div className="mt-8 grid w-full grid-cols-1 gap-5 lg:grid-cols-2 ">
          <div className="flex min-h-max flex-col justify-center lg:py-[9rem]">
            <Heading2 />
            <Description />
          </div>
          <div className="relative h-[27rem] w-full md:h-[45rem] lg:h-full">
            <ImageComponent />
          </div>
        </div>
      </>
    );
  }
};

export default AboutItem;
