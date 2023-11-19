import "../style.css";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import style from "./PropertyDetails.module.css";
import Link from "next/link";
import { FaCaretDown, FaPlusCircle, FaStar } from "react-icons/fa";
import Button from "../components/Button";
import AdditionalInfo from "../components/AdditionalInfo";
import {
  HiMiniShieldCheck,
  HiOutlineExclamationCircle,
  HiOutlineHomeModern,
  HiStar,
} from "react-icons/hi2";
import ReviewComment from "../components/ReviewComment";
import AdditionalInfoTitle from "../components/AdditionalInfoTitle";
import ListingCardSlider from "@/app/about/components/ListingCardsSlider";
import listings from "@/enum/demodb/listings";
import Footer from "@/app/components/Footer";
import { Rate } from "antd";
import Navbar from "@/components/__shared/Navbar";
import ReviewCount from "../components/ReviewCount";
import Feature from "../components/Feature";
import ViewProperty from "../components/ViewProperty";
import ReportIssue from "@/components/__shared/ReportIssue";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import PropertyDetailsSlider from "../components/PropertyDetailsSlider";

type Props = {};

const PropertyDetailsPage = (props: Props) => {
  const { images } = useAssets();
  return (
    <>
      <Navbar />
      <main>
        <section className={`${style.shape} relative w-full min-h-[50rem]`}>
          <Image
            src={images.StockImage}
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
          {/* View */}
          <ViewProperty href="#" />
        </section>
        <section className="px-5 py-10 mx-auto max-w-screen-2xl sm:px-10">
          <div className="text-[#305A61] font-[600] text-xl">
            <Link href="" className="text-neutral-300">
              Home
            </Link>{" "}
            / <span className="">2 Bedroom house at Kasoa</span>
          </div>
          {/* Property images */}
          <section className="grid grid-cols-1 gap-10 mt-8 md:mt-16 lg:grid-cols-2">
            <div className="h-full">
              <div className="hidden h-full grid-cols-2 gap-3 lg:grid">
                <div className="relative">
                  <Image
                    src={images.niceHome}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="relative">
                  <Image
                    src={images.niceHome}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="relative">
                  <Image
                    src={images.niceHome}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="relative">
                  <Image
                    src={images.niceHome}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="relative">
                  <Image
                    src={images.niceHome}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="relative">
                  <Image
                    src={images.niceHome}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="relative">
                  <Image
                    src={images.niceHome}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="relative">
                  <Image
                    src={images.niceHome}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="relative">
                  <Image
                    src={images.niceHome}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="relative">
                  <Image
                    src={images.niceHome}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              {/* Slider */}
              <div className="w-full h-80 lg:hidden">
                <PropertyDetailsSlider
                  images={["/assets/images/niceHome.png", "/assets/images/Stock.jpg"]}
                  propertyType="2 bedroom house at Kasoa"
                />
              </div>
              <ReportIssue href="" className="mt-5" />
            </div>
            {/*  */}
            <div className="">
              <section className="">
                <div className="space-y-5">
                  <div className="flex flex-wrap gap-x-16 gap-y-2">
                    <h2 className="text-[#305A61] font-[600] text-xl">
                      2 Bedroom house at Kasoa
                    </h2>
                    <div className="flex items-center gap-2">
                      <HiMiniShieldCheck className="text-lg text-green-700" />
                      <p className="text-sm text-neutral-800">Verified Listing</p>
                    </div>
                  </div>
                  <p className="max-w-2xl text-sm text-neutral-800">
                    Splendid Homes - Gated community of two and four bedroom
                    Gated community of two and four bedroom ...Gated community
                    of two and four bedroom ...Gated community of two and four
                    bedroom ...
                  </p>
                  <Rate allowHalf defaultValue={4.5} disabled />
                </div>
                <div className="mt-20 space-y-10">
                  <Button className="bg-gradient-to-r  from-[#21A19F] to-[#1EA9A6A1] p-4 text-xl text-white capitalize py-7 w-60">
                    Apply Now
                  </Button>
                  <div className="flex flex-col justify-between px-10 py-8 text-sm bg-white border border-gray-500 shadow-xl text-primary-400 rounded-xl sm:flex-row sm:items-center sm:px-2">
                    <div className="px-5 py-2 space-y-1 border-b border-gray-400 sm:border-r sm:border-b-0 sm:last:border-r-0 sm:py-0">
                      <h3 className="items-center justify-between text-center gap-x-4 sm:flex sm:text-start ">
                        Monthly Rent{" "}
                        <HiOutlineExclamationCircle className="inline text-lg rotate-180 sm:inline-flex" />{" "}
                      </h3>
                      <p className="text-center sm:text-start">
                        <span className="mr-2 font-[600]">GHS</span>22,200.00
                      </p>
                    </div>
                    <div className="px-5 py-2 space-y-1 border-b border-gray-400 sm:border-r sm:border-b-0 sm:last:border-r-0 sm:py-0">
                      <h3 className="text-center text-primary-400">Bedrooms</h3>
                      <p className="text-center">3</p>
                    </div>
                    <div className="px-5 py-2 space-y-1 border-b border-gray-400 sm:border-r sm:border-b-0 sm:last:border-r-0 sm:py-0">
                      <h3 className="text-center text-primary-400">
                        Bathrooms
                      </h3>
                      <p className="text-center">3</p>
                    </div>
                    <div className="px-5 py-2 space-y-1 border-b border-gray-400 sm:border-r sm:border-b-0 sm:last:border-r-0 sm:py-0">
                      <h3 className="text-center text-primary-400">
                        Square Meter
                      </h3>
                      <p className="text-center sm:text-start">
                        483 - 965 M<sup>2</sup>
                      </p>
                    </div>
                  </div>
                  <p className="relative bottom-5 inline-block rounded-lg font-[500] bg-[#E7F8F2] text-gray-900 p-3 text-xs">
                    One Year Advance
                  </p>
                </div>
                <div className="flex items-center justify-center max-w-lg mx-auto">
                  <div className="flex flex-col items-center w-full gap-10 mt-12 sm:w-11/12">
                    <div className="flex items-center gap-10 font-[600]">
                      <div className="relative w-24 h-24 rounded-full">
                        <Image
                          src={images.StockImage}
                          className="rounded-full"
                          alt=""
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="flex items-center gap-2 text-primary-500">
                        <FaStar className="text-yellow-400" />
                        3.2
                      </div>
                      <p className="text-neutral-800">120 Reviews</p>
                    </div>
                    {/* Contact this property */}
                    <div className="flex flex-col items-center w-full gap-2 px-10 py-8 border border-neutral-300 rounded-xl">
                      <h2 className="text-center capitalize text-neutral-800 font-[600] sm:w-9/12">
                        Contact This Property
                      </h2>
                      <Button className="bg-gradient-to-r  from-[#21A19F] to-[#1EA9A6A1] w-full p-4 text-white py-7">
                        Send Message
                      </Button>
                      <Button
                        variant="outline"
                        borderColor="#21A19F"
                        className="p-4 py-7 w-full text-[#21A19F]"
                      >
                        Call
                      </Button>
                    </div>
                    {/* Report issue */}
                    <div className="relative self-start -top-6">
                      <ReportIssue href="" />
                    </div>
                  </div>
                </div>
              </section>

              {/*  */}
              <section className="mb-12">
                <AdditionalInfoTitle title="Advance Payment Options" />
                <AdditionalInfo>
                  <ul className="properties-li">
                    <li>1, 2</li>
                  </ul>
                </AdditionalInfo>
                <AdditionalInfo>
                  <div className="grid grid-cols-4">
                    <p className="col-span-2 sm:col-span-1">Available from: </p>
                    <p className="col-span-2 text-right sm:col-span-3 sm:text-left">
                      DD-MM-YY
                    </p>
                  </div>
                </AdditionalInfo>
              </section>
              <section className="my-12">
                <h2 className="text-neutral-800 font-[600] text-xl mt-6">
                  Additional Information
                </h2>
                <AdditionalInfoTitle title="Agency Fees" />
                <div className="p-5 bg-[#FFF7E7] text-[#65969F] rounded-xl mt-2 flex items-center gap-5 text-sm">
                  <HiOutlineExclamationCircle className="text-5xl text-yellow-500 rotate-180" />
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Atque illo dolore voluptatum eum.
                </div>
                <AdditionalInfo className="">
                  <div className="flex flex-wrap items-center justify-between py-2 border-b gap-x-5 gap-y-2 last:border-b-0">
                    <p className="flex-1 w-full">Agent</p>
                    <p className="flex-1 w-full">GHS 500.00</p>
                    <Button className="flex-1 justify-self-end bg-[#99B3B2] text-white flex items-center gap-2 min-w-[8rem] p-2 rounded-lg justify-center">
                      Add to cart
                      <FaPlusCircle className="shrink-0" />
                    </Button>
                  </div>
                </AdditionalInfo>
                <AdditionalInfo>
                  <div className="flex flex-wrap items-center justify-between py-2 border-b gap-x-5 gap-y-2 last:border-b-0">
                    <p className="flex-1 w-full">Viewing</p>
                    <p className="flex-1 w-full">GHS 500.00</p>
                    <Button className="flex-1 justify-self-end bg-[#99B3B2] text-white flex items-center gap-2 min-w-[8rem] p-2 rounded-lg justify-center">
                      Add to cart
                      <FaPlusCircle className="shrink-0" />
                    </Button>
                  </div>
                </AdditionalInfo>
                <AdditionalInfoTitle title="Property Fees" />
                <AdditionalInfo>
                  <div className="flex flex-wrap justify-between gap-2">
                    <p className="">Refundable Security Deposit</p>
                    <p className="">GHS 500.00</p>
                  </div>
                </AdditionalInfo>
                <AdditionalInfoTitle title="Utilities included" />
                <AdditionalInfo>
                  <ul className="grid justify-between w-full grid-cols-1 gap-x-10 gap-y-3 properties-li xs:grid-cols-2">
                    <li className="">Water</li>
                    <li className="">Gas</li>
                    <li className="">Electricity</li>
                    <li className="">Kitchen Appliances</li>
                    <li className="">Satellite TV</li>
                    <li className="">Internet</li>
                  </ul>
                </AdditionalInfo>
                <AdditionalInfoTitle title="Things to know" />
                <AdditionalInfo>
                  <p className="max-w-2xl leading-normal">
                    Lorem ipsum dolor sit amet consectetur. Et tellus viverra
                    faucibus nunc mauris netus. Sem id tincidunt ante non a
                    suspendisse tortor libero. Elementum in lectus varius mus
                    accumsan. Volutpat nec mi pellentesque facilisi. Quisque
                    facilisis nec bibendum dui nullam. Penatibus netus felis
                    quam purus. Nascetur est lobortis egestas leo amet aenean.
                    Vestibulum leo nibh ut pellentesque purus. Dolor gravida at
                    ac pharetra amet malesuada molestie. Amet pretium donec odio
                    dis. Sagittis interdum nibh consectetur pellentesque nunc
                    diam eleifend eu turpis. Tempor urna fames interdum vitae
                    mattis.
                  </p>
                  <Button
                    variant="outline"
                    className="text-xs rounded-md border text-[#65969F] px-4 py-2 mt-3"
                    borderColor="#65969F"
                  >
                    Read More
                  </Button>
                </AdditionalInfo>
              </section>
            </div>
          </section>
        </section>
        {/* Features and Amenities */}
        <section className="px-5 mx-auto my-10 max-w-screen-2xl sm:px-10">
          <h2 className="text-neutral-800 font-[600] text-xl">
            Features and Amenities
          </h2>
          <div className="grid justify-between w-full mt-8 gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            <Feature label="Wifi" />
            <Feature label="Security Cameras on Property" />
            <Feature label="Hot Tub" />
            <Feature label="Air Conditioning" />
            <Feature label="Fire Extinguisher" />
            <Feature label="Free Parking on Premises" />
            <Feature label="Gas" />
            <Feature label="Kitchen" />
            <Feature label="Pool" />
            <Feature label="Smoke Alarm" />
            <Feature label="Pool Table" />
            <Feature label="Satellite TV" />
          </div>
          <Button
            variant="ghost"
            className="flex items-center ml-auto text-sm gap-1 text-[#305A61] mt-10"
          >
            Show more <FaCaretDown className="text-neutral-800" />
          </Button>
        </section>
        {/* Rating */}
        <section className="px-5 py-10 mx-auto my-10 max-w-screen-2xl sm:px-10">
          <div className=" border-neutral-200 md:px-14 rounded-xl md:border-3 md:pt-10 md:pb-32">
            <div className="flex flex-wrap justify-between gap-5 bg-[#65969F] text-white rounded-xl p-10">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xl font-[600]">
                  How would you rate this property?
                </p>
                <BsBookmarkStarFill className="text-lg shrink-0" />
              </div>
              <Button
                variant="outline"
                borderColor="white"
                className="p-4 text-white py-7 w-60"
              >
                Write a review
              </Button>
            </div>
            {/* Rating count */}
            <div className="grid items-start grid-cols-3 mt-20 gap-x-20 gap-y-10">
              <div className="col-span-3 flex items-center text-neutral-800 gap-10 font-[600] xl:col-span-1">
                <div className="flex items-center gap-1.5">
                  <HiOutlineHomeModern />
                  <HiStar className="text-yellow-500" />
                  <p className="">3.2</p>
                </div>
                <p className="">10 reviews</p>
              </div>
              <div className="grid justify-between grid-cols-1 w-full col-span-3 gap-x-8 gap-y-4 min-[900px]:grid-cols-2 xl:col-span-2">
                <ReviewCount />
                <ReviewCount />
                <ReviewCount />
                <ReviewCount />
                <ReviewCount />
                <ReviewCount />
              </div>
            </div>
            {/* Review comment */}
            <div className="mt-24 space-y-10">
              <ReviewComment />
              <ReviewComment />
              <ReviewComment />
            </div>
          </div>
        </section>
        <section className="relative px-5 mx-auto -top-14 max-w-screen-2xl sm:px-10">
          <ReportIssue href="" />
        </section>
        <Button
          variant="ghost"
          className="block px-5 ml-auto text-sm text-neutral-800 sm:px-10"
        >
          Show all
        </Button>
        {/* Recommended Listings */}
        <section className="px-5 mx-auto max-w-screen-2xl sm:px-10">
          <h2 className="text-neutral-800 text-xl ml-10 mb-2 font-[600]">
            Recommended Listings
          </h2>
          <div className="w-full py-10 px-5 sm:px-10 mx-auto h-[38rem] max-w-screen-2xl">
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PropertyDetailsPage;
