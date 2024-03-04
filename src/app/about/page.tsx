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
import { Metadata } from "next";
import { ABOUT_PAGE_QUERY } from "@/lib/utils/sanity/queries";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "@/lib/utils/sanity/utils";

export const metadata: Metadata = {
  title: "About us",
};

const About = async () => {
  const initial = await loadQuery<SanityDocument[]>(ABOUT_PAGE_QUERY);
  const data = initial.data[0];
  const heading1 = data.heading1;
  const heading2 = data.heading2;
  const featuredImage = data.featuredImage;
  const aboutDescription = data.about_descriptions;
  const bannerData = data.banner;
  const vSlider = data.verticalSlider;
  const hSlider = data.horizontalSlider;

  const { images } = useAssets();

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden pb-8 sm:pb-14">
        <div className="wrapper flex items-center justify-center pb-0 sm:pb-0">
          <div className="grid items-center gap-x-36 gap-y-5 lg:grid-cols-2">
            <h1 className="text-2xl font-[700] leading-normal text-[#305A61] sm:text-4xl">
              {heading1}
            </h1>
            <h2 className="max-w-2xl text-lg font-[500] text-[#65969F]">
              {heading2}
            </h2>
          </div>
        </div>
        <div className="mt-14 flex items-center justify-center">
          <div className="relative h-60 w-full md:h-[30rem]">
            <Image
              src={urlForImage(featuredImage)?.url() as string}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <AOSWrapper
          animation="fade-up"
          className="wrapper flex min-h-max items-center justify-center py-0 sm:py-0"
        >
          <div className="min-h-max">
            {aboutDescription.map((data: any, index: number) => (
              <AboutItem key={index} index={index + 1} data={data} />
            ))}
          </div>
        </AOSWrapper>
        <section className="section">
          {/* <AboutBanner data={bannerData} /> */}
          <AOSWrapper animation="fade-up" className="relative w-full">
            <div className="relative flex max-w-screen-xl flex-col items-center justify-between gap-10 bg-opacity-90 bg-gradient-to-r from-[#21A19F] to-[#1EA9A6A1] p-5 text-white xs:items-start xs:p-10 lg:flex-row min-[1048px]:max-xl:w-11/12 fhd:mx-auto">
              <div className="">
                <h2 className="text-2xl font-[700] md:text-4xl">
                  {bannerData.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base font-[500] md:text-lg">
                  {bannerData.description}
                </p>
              </div>
              <Image
                src={urlForImage(bannerData.featuredImage)?.url() as string}
                height={400}
                width={400}
                alt="House searching cuate"
                className="xs:self-end lg:mt-14"
              />
            </div>
          </AOSWrapper>
          <SimpleSlider data={hSlider} />
        </section>
        <AOSWrapper
          animation="fade-up"
          className="mx-auto h-fit max-w-screen-2xl px-5 sm:px-10 lg:pt-28"
        >
          <VerticalSlider data={vSlider} />
        </AOSWrapper>
        <FeaturedListings className="wrapper-section" />
      </main>
      <Footer />
    </>
  );
};

export default About;
