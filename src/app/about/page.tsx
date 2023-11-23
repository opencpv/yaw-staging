import Head from "next/head";
import fetchAboutData from "./lib/fetchAboutData";
import Image from "next/image";
import urlFor from "@/lib/utils/urlFor";
import AboutItem from "./components/AboutItem";
import AboutBanner from "./components/AboutBanner";
import { MdOutlineImage } from "react-icons/md";
import GraySliderDesktop from "./components/GraySliderDesktop";
import GraySliderMobile from "./components/GraySliderMobile";
import Navbar from "@/components/__shared/Navbar";
import Footer from "../components/Footer";
import SimpleSlider from "./components/Slider/SimpleSlider";
import "swiper/css";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import ListingCard from "../../components/__shared/listing/ListingCard";
import listingsdb from "@/enum/demodb/listings";
import VerticalSlider from "./components/Slider/VerticalSlider";
import SliderMultiItems from "@/components/__shared/sliders/SliderMultiItems";

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
      <main className="pt-10 pb-40 overflow-x-hidden">
        <div className="flex items-center justify-center mx-auto mb-10 section">
          <div className="grid items-center lg:grid-cols-2 gap-x-36 gap-y-5">
            <h1 className="font-[700] text-2xl sm:text-4xl text-[#305A61] leading-normal">
              {heading1}
            </h1>
            <h2 className="text-[#65969F] font-[500] text-lg max-w-2xl">
              {heading2}
            </h2>
          </div>
        </div>
        <section className="flex items-center justify-center">
          <div className="relative w-full h-60 md:h-[30rem]">
            {/* <Image
              src={urlFor(data[0].featuredImage).width(1728).url() as string}
              fill
              objectFit="cover"
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
        </section>
        <section className="flex items-center justify-center pb-10 mx-auto min-h-max section">
          <div className="min-h-max">
            {aboutDescription.map((data: any, index: number) => (
              <AboutItem key={index} index={index + 1} data={data} />
            ))}
          </div>
        </section>
        <section className="relative w-full">
          <div className="relative flex flex-col lg:flex-row items-center xs:items-start gap-10 justify-between fhd:mx-auto bg-gradient-to-r from-[#21A19F] to-[#1EA9A6A1] text-white p-5 xs:p-10 max-w-screen-xl bg-opacity-90 lg:top-20">
            <div className="">
              <h2 className="font-[700] text-2xl md:text-4xl">Ipsum Lorem</h2>
              <p className="max-w-2xl mt-5 font-[500] text-base md:text-lg">
                Lorem ipsum dolor sit amet consectetur. Orci suspendisse
                fringilla consequat placerat velit dui. Sit in condimentum sed a
                orci ac. Porttitor sagittis facilisi consequat morbi tortor dui.
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
          {/* <AboutBanner data={bannerData} /> */}
          <SimpleSlider />
        </section>
        <section className="relative flex w-full ml-auto pt-0 pb-10 h-[60rem] px-5 min-[340px]:h-[50rem] xl:py-10 xl:h-[37rem] xl:w-10/12 xs:px-10 max-w-[1100px] fhd:mx-auto">
          <VerticalSlider />
          {/* <div className="absolute top-0 left-0 z-10 w-[87%] h-full bg-transparent xl:hidden"></div> */}
        </section>
        <section className="w-full py-10 h-fit section">
          {
            <SliderMultiItems
              slidesPerView={1}
              breakpoints={{
                500: {
                  slidesPerView: 1.5,
                },
                768: {
                  slidesPerView: 2.5,
                },
                1200: {
                  slidesPerView: 3,
                },
                1300: {
                  slidesPerView: 3.5,
                },
                1536: {
                  slidesPerView: 4,
                },
              }}
              items={listingsdb.map((listing) => (
                <ListingCard
                  key={listing.id}
                  propertyType={listing.propertyType}
                  propertyDescription={listing.propertyDescription}
                  images={listing.images}
                  price={listing.price}
                  paymentStructure={
                    listing.paymentStructure as PaymentStructure
                  }
                  monthlyAmount={listing.monthlyAmount}
                  deal={listing.deal as Deal}
                  membership={listing.membership as Membership}
                  rating={listing.rating}
                  ratingCount={listing.ratingCount}
                  liked={listing.liked}
                  href={listing.href}
                />
              ))}
            />
          }
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
