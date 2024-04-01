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
// import { ABOUT_PAGE_QUERY } from "@/lib/utils/sanity/queries";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
// import { SanityDocument } from "next-sanity";
import { urlForImage } from "@/lib/utils/sanity/utils";

export const metadata: Metadata = {
  title: "About us",
  description: "", // tentative
};

const About = async () => {
  // const initial = await loadQuery<SanityDocument[]>(ABOUT_PAGE_QUERY);
  // const data = initial.data[0];

  // const heading1 = data.heading1;
  // const heading2 = data.heading2;
  // const featuredImage = data.featuredImage;
  // const aboutDescription = data.about_descriptions;
  // const bannerData = data.banner;
  // const vSlider = data.verticalSlider;
  // const hSlider = data.horizontalSlider;

  const { images } = useAssets();

  return (
    <>
      <Navbar />

      <Footer />
    </>
  );
};

export default About;
