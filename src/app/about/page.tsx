import Image from "next/image";
import AboutItem from "./components/AboutItem";
import Navbar from "@/components/__shared/ui/Navbar";
import Footer from "@/components/__shared/ui/footer/Footer";
import SimpleSlider from "./components/Slider/SimpleSlider";
import "swiper/css";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import VerticalSlider from "./components/Slider/VerticalSlider";
import FeaturedListings from "@/components/__shared/ui/listing/FeaturedListings";
import { Metadata } from "next";
import { ABOUT_PAGE_QUERY, BLOG_QUERY } from "@/lib/utils/sanity/queries";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "@/lib/utils/sanity/utils";
import { fadeIn } from "@/lib/animations";
import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";
import AboutOurTags from "./components/AboutOurTags";

export const metadata: Metadata = {
  title: "About us",
  description: "", // tentative
};

const About = async () => {
  const initial = await loadQuery<SanityDocument[]>(ABOUT_PAGE_QUERY);
  const data = initial.data[0];
  const heading1 = data.heading1;
  const heading2 = data.heading2;
  const featuredImage = data.featuredImage;
  const aboutDescription = data.about_descriptions;
  const bannerData = data.banner;
  const services = data.verticalSlider;
  const initialBlogData: any = await loadQuery<SanityDocument[]>(BLOG_QUERY);
  const blogData = initialBlogData.data;
  const popularPosts = blogData
    .sort((a: { rating: number }, b: { rating: number }) => a.rating - b.rating)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden pb-8 sm:pb-14">
        <div className="wrapper flex items-center justify-center pb-0 sm:pb-0">
          <div className="grid items-center gap-x-36 gap-y-5 lg:grid-cols-2">
            <div className="w-full">
              {heading1.split("#").map((heading: string, index: number) => (
                <h1
                  className={`text-2xl font-[700] leading-normal text-[#305A61] ${
                    index != 0 && "text-[#65969F]"
                  } sm:text-4xl 2xl:text-5xl`}
                  key={index}
                >
                  {heading}
                </h1>
              ))}
            </div>
            <div className="w-full">
              {heading2.split("#").map((heading: string, index: number) => (
                <h2
                  className="max-w-2xl text-lg font-[500] text-[#65969F] lg:text-xl 2xl:text-2xl"
                  key={index}
                >
                  {heading}
                </h2>
              ))}
            </div>
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

        <div
          id="QePYkSphjGkugQ=="
          className="pointer-events-none relative bottom-20 opacity-0"
        />

        <FramerWrapper className="wrapper mt-10 flex min-h-max items-center justify-center py-0 lg:mt-24">
          <div className="flex min-h-max flex-col gap-10">
            {aboutDescription.map((data: any, index: number) => (
              <AboutItem key={index} index={index + 1} data={data} />
            ))}
          </div>
        </FramerWrapper>

        <div
          id="t73yjgClfDUknQ=="
          className="pointer-events-none relative bottom-20 opacity-0"
        />

        <FramerWrapper>
          <AboutOurTags />
        </FramerWrapper>

        <section className="section pt-10 lg:pt-7">
          {/* <AboutBanner data={bannerData} /> */}
          <FramerWrapper className="relative w-full">
            <div className="relative flex max-w-screen-xl flex-col items-center justify-between gap-10 bg-opacity-90 bg-gradient-to-r from-[#21A19F] to-[#1EA9A6A1] p-5 text-white xs:items-start xs:p-10 lg:flex-row min-[1048px]:max-xl:w-11/12 fhd:mx-auto">
              <div className="space-y-5">
                <h2 className="text-2xl  font-[700] xl:text-4xl 2xl:text-5xl">
                  {bannerData.title}
                </h2>
                <p className="max-w-2xl text-base font-[400] leading-normal md:text-xl md:leading-normal 2xl:text-2xl 2xl:leading-normal">
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
          </FramerWrapper>
          <SimpleSlider data={services} />
        </section>

        <FramerWrapper className="mx-auto h-fit max-w-screen-2xl px-5 sm:px-10 lg:pt-28">
          <VerticalSlider data={popularPosts} />
        </FramerWrapper>
        <FeaturedListings className="wrapper pb-0 pt-28" />
      </main>
      <Footer />
    </>
  );
};

export default About;
