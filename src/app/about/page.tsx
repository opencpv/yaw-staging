import Head from "next/head";
import fetchAboutData from "./lib/fetchAboutData";
import Image from "next/image";
import urlFor from "@/lib/utils/urlFor";
import AboutItem from "./components/AboutItem";
import AboutBanner from "./components/AboutBanner";
import { MdOutlineImage } from "react-icons/md";
import GraySliderDesktop from "./components/GraySliderDesktop";
import GraySliderMobile from "./components/GraySliderMobile";

const About = async () => {
  const data = await fetchAboutData();
  const heading1 = await data[0].heading1;
  const heading2 = await data[0].heading2;
  const aboutDescription = await data[0].about_descriptions;
  const bannerData = await data[0].banner;

  return (
    <>
      <Head>
        <title>About Us - RentRight Gh</title>
      </Head>
      <main className="max-w-[1728px] mx-auto ">
        <div className="px-4 md:px-[30px] grid grid-cols-1 md:grid-cols-2 mt-8 items-center">
          <p className="text-[31px] md:text-[49px] font-bold text-[#305A61]">
            {heading1}
          </p>
          <div className="text-[25px]  lg:pl-[] text-[#65969F]">
            <p>{heading2}</p>
          </div>
        </div>
        <div className="w-full h-[464px] aspect-[1728/728] md:h-[728px] relative">
          <Image
            src={urlFor(data[0].featuredImage).width(1728).url() as string}
            fill
            objectFit="cover"
            objectPosition="center"
            alt="banner image"
            className="py-8 border-b-[1px] border-[#D9D9D9] mb-[32.5px] md:mb-[64px]"
          />
        </div>
        <div className="px-4 md:px-[30px] pt-[64px]">
          {aboutDescription.map((data: any, index: number) => (
            <AboutItem key={index} index={index + 1} data={data} />
          ))}
        </div>
        {/* <div className="w-full relative ">
          <AboutBanner data={bannerData} />
          <GraySliderDesktop data={{}} />
          <GraySliderMobile data={{}} />
        </div> */}
      </main>
    </>
  );
};

export default About;
