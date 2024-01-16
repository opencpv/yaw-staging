import Head from "next/head";
import fetchAboutData from "./lib/fetchAboutData";
import Image from "next/image";
import AboutItem from "./components/AboutItem";
import Navbar from "@/components/__shared/Navbar";
import Footer from "@/components/__shared/footer/Footer";
import SimpleSlider from "./components/Slider/SimpleSlider";
import "swiper/css";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import VerticalSlider from "./components/Slider/VerticalSlider";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import FeaturedListings from "@/components/__shared/listing/FeaturedListings";

const About = async () => {
  const data = await fetchAboutData();
  const heading1 = await data[0].heading1;
  const heading2 = await data[0].heading2;
  const aboutDescription = await data[0].about_descriptions;
  const bannerData = await data[0].banner;

  const { images } = useAssets();

  return (
    <>
      <Head>
        <title>About Us - RentRight Gh</title>
      </Head>
      <Navbar />
      <main className="overflow-x-hidden mt-14">
        <div className="flex items-center justify-center mx-auto wrapper wrapper-no-pb">
          <div className="grid items-center lg:grid-cols-2 gap-x-36 gap-y-5">
            <h1 className="font-[700] text-2xl text-[#305A61] leading-normal sm:text-4xl">
              {heading1}
            </h1>
            <h2 className="text-[#65969F] font-[500] text-lg max-w-2xl">
              {heading2}
            </h2>
          </div>
        </div>
        <AOSWrapper animation="fade-up" className="section">
          <div className="flex items-center justify-center">
            <div className="relative w-full h-60 md:h-[30rem]">
              {/* <Image
                src={urlFor(data[0].featuredImage).width(1728).url() as string}
                fill
                style={{ objectFit: "cover" }}
                objectPosition="center"
                alt="banner image"
                className="py-8 border-b-[1px] border-[#D9D9D9] mb-[32.5px] md:mb-[64px]"
              /> */}
              <Image
                src="/assets/images/about/about1.webp"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <AOSWrapper
            animation="fade-up"
            className="flex items-center justify-center mx-auto min-h-max wrapper wrapper-no-pb"
          >
            <div className="min-h-max">
              {aboutDescription.map((data: any, index: number) => (
                <AboutItem key={index} index={index + 1} data={data} />
              ))}
            </div>
          </AOSWrapper>
        </AOSWrapper>
        <section className="section">
          {/* <AboutBanner data={bannerData} /> */}
          <AOSWrapper animation="fade-up" className="relative w-full">
            <div className="relative flex flex-col lg:flex-row items-center xs:items-start gap-10 justify-between fhd:mx-auto bg-gradient-to-r from-[#21A19F] to-[#1EA9A6A1] text-white p-5 xs:p-10 max-w-screen-xl bg-opacity-90 min-[1048px]:max-xl:w-11/12">
              <div className="">
                <h2 className="font-[700] text-2xl md:text-4xl">Ipsum Lorem</h2>
                <p className="max-w-2xl mt-5 font-[500] text-base md:text-lg">
                  Lorem ipsum dolor sit amet consectetur. Orci suspendisse
                  fringilla consequat placerat velit dui. Sit in condimentum sed
                  a orci ac. Porttitor sagittis facilisi consequat morbi tortor
                  dui.
                </p>
              </div>
              <Image
                src={images.HouseSearchingCuate}
                height={400}
                width={400}
                alt="House searching cuate"
                className="xs:self-end lg:mt-14"
              />
            </div>
          </AOSWrapper>
          <SimpleSlider />
        </section>
        <AOSWrapper animation="fade-up" className="mt-12 h-fit wrapper wrapper-no-pb lg:mt-28">
          <VerticalSlider />
        </AOSWrapper>
        <FeaturedListings className="section wrapper" />
      </main>
      <Footer />
    </>
  );
};

export default About;
