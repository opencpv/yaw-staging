import Head from "next/head";
import fetchAboutData from "./lib/fetchAboutData";
import Image from "next/image";
import AboutItem from "./components/AboutItem";
import Navbar from "@/components/__shared/Navbar";
import Footer from "../components/Footer";
import SimpleSlider from "./components/Slider/SimpleSlider";
import "swiper/css";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import ListingCardSlider from "./components/ListingCardsSlider";
import listings from "@/enum/demodb/listings";
import VerticalSlider from "./components/Slider/VerticalSlider";

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
      <main className="pt-10 overflow-x-hidden">
        <div className="flex items-center justify-center mx-auto mb-10 max-w-screen-2xl">
          <div className="grid items-center px-5 xs:px-10 lg:grid-cols-2 gap-x-36 gap-y-5">
            <h1 className="font-[700] text-2xl sm:text-4xl text-[#305A61] leading-normal">
              {heading1}
            </h1>
            <h2 className="text-[#65969F] font-[500] text-lg max-w-2xl">
              {heading2}
            </h2>
          </div>
        </div>
        <section className="flex items-center justify-center mx-auto max-w-screen-2xl">
          <div className="relative w-full h-[30rem]">
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
        <section className="flex items-center justify-center px-5 pb-10 mx-auto min-h-max xs:px-10 max-w-screen-2xl">
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
        <section className="relative w-full xl:w-10/12 ml-auto fhd:mx-auto pt-0 pb-10 xl:py-10 h-[60rem] min-[340px]:h-[50rem] xl:h-[37rem] px-5 xs:px-10 flex max-w-[1100px]">
          <VerticalSlider />
          {/* <div className="absolute top-0 left-0 z-10 w-[87%] h-full bg-transparent xl:hidden"></div> */}
        </section>
        <section className="w-full py-10 px-5 xs:px-10 mx-auto h-[38rem] max-w-screen-2xl">
          {
            <ListingCardSlider
              listings={listings.map((listing) => {
                return {
                  id: listing.id,
                  propertyType: listing.propertyType,
                  deal: listing.deal as
                    | "Editor's Choice"
                    | "Price Drop"
                    | "Best Value"
                    | "None"
                    | "none"
                    | "",
                  images: listing.images,
                  liked: listing.liked,
                  membership: listing.membership as
                    | "Certified"
                    | "Verified"
                    | "Unverified"
                    | "None"
                    | "none"
                    | "",
                  listing: listing.monthlyAmount,
                  paymentStructure: listing.paymentStructure as
                    | "Yearly"
                    | "Bi-Annually"
                    | "Quarterly"
                    | "Every-6-Months"
                    | "Every-3-Years",
                  price: listing.price,
                  propertyDescription: listing.propertyDescription,
                  rating: listing.rating,
                  ratingCount: listing.ratingCount,
                  monthlyAmount: listing.monthlyAmount,
                  href: listing.href,
                };
              })}
            />
          }
        </section>
        <Footer />
      </main>
    </>
  );
};

export default About;
