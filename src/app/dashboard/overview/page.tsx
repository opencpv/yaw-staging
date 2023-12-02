import React from "react";
import { HiOutlineExclamationCircle, HiOutlinePencil } from "react-icons/hi2";
import Callout from "../components/Callout";
import Image from "next/image";
import Button from "@/components/__shared/Button";
import { FaArrowRight, FaRegEnvelope } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import FeatureExplainer from "./components/FeatureExplainer";
import FeatureUpgradeCard from "./components/FeatureUpgradeCard";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import RecommendedListings from "@/components/__shared/listing/RecommendedListings";
import AOSWrapper from "@/components/__shared/AOSWrapper";

const OverviewPage = () => {
  const { icons, images } = useAssets();
  return (
    <main className="my-10 text-neutral-800 section">
      {/* Overview */}
      <section className="justify-between grid-cols-3 mx-auto mb-20 gap-x-16 xl:gap-x-32 lg:grid lg:mb-32">
        <div className="col-span-2">
          <h2 className="text-2xl font-[600] mb-6">Overview</h2>
          <h3 className="text-neutral-700 font-[500] text-lg mb-6 md:hidden">
            Welcome, John
          </h3>
          {/* CallOut */}
          <Callout className="flex items-center w-full gap-5 mb-6 text sm:w-11/12">
            <HiOutlineExclamationCircle className="text-5xl rotate-180 text-accent-50" />
            <div className="space-y-1">
              <p>
                Get started by effortlessly{" "}
                <span className="font-[600]">renting</span> and publishing{" "}
                <span className="font-[600]">products</span> with ease.
              </p>
              <p>
                Navigate through the menu on the top to discover more features
                and tools.
              </p>
            </div>
          </Callout>
          <div className="hidden w-full p-10 pt-20 pb-0 mx-auto bg-primary-400 rounded-xl max-h-60 md:block">
            <div className="w-11/12 mx-auto">
              <h3 className="text-white mb-4 font-[600] text-xl">
                Welcome, John
              </h3>
              <div className="flex items-center p-8 py-16 bg-white shadow-2xl gap-x-6 gap-y-3 rounded-xl max-h-60">
                <div className="relative w-32 h-32 rounded-xl shadow-lg">
                  <Image
                    src={images.ProfileImage}
                    alt="John Doe"
                    className="rounded-xl"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="">John Doe</h4>
                  <div className="flex flex-wrap items-center mb-4 text-sm gap-x-5 gap-y-3">
                    <div className="flex items-center gap-2 text-neutral-700">
                      <FaRegEnvelope className="text-primary-400" />
                      johndoe@gmail.com
                    </div>
                    <div className="flex items-center gap-2 text-neutral-700">
                      <BsTelephone className="text-primary-400" />
                      (+233) 647 748 927
                    </div>
                  </div>
                  <Button className="flex items-center gap-1.5 font-[400] text-xs text-white p-1 px-4 rounded-md bg-[#597C7B]">
                    Complete your profile <HiOutlinePencil />{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* Tablet view */}
          <div className="flex flex-col items-center w-full p-8 bg-white shadow-2xl gap-x-6 gap-y-3 rounded-xl sm:py-16 sm:max-h-60 sm:flex-row sm:justify-start md:hidden">
            <div className="relative w-32 h-32 rounded-xl shadow-lg">
              <Image
                src={images.ProfileImage}
                alt="John Doe"
                className="rounded-xl"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex flex-col items-center gap-y-2 xs:items-start">
              <h4 className="">John Doe</h4>
              <div className="flex flex-wrap items-center mb-4 text-sm gap-x-5 gap-y-3">
                <div className="flex items-center gap-2 text-neutral-700">
                  <FaRegEnvelope className="text-primary-400" />
                  johndoe@gmail.com
                </div>
                <div className="flex items-center gap-2 text-neutral-700">
                  <BsTelephone className="text-primary-400" />
                  (+233) 647 748 927
                </div>
              </div>
              <Button className="flex items-center gap-1.5 font-[400] text-xs text-white p-1 px-4 rounded-md bg-[#597C7B]">
                Complete your profile <HiOutlinePencil />{" "}
              </Button>
            </div>
          </div>
        </div>
        {/* Paid features */}
        <div className="col-span-1 mt-20 space-y-8 md:mt-48 lg:40">
          <FeatureExplainer title="Be The First To Know" />
          <FeatureExplainer title="Be My Agent" />
        </div>
      </section>
      {/* Explore */}
      <section className="mx-auto mb-20">
        <h2 className="text-2xl font-[600] mb-6">Explore</h2>
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="space-y-5">
            <FeatureUpgradeCard title="Be The First To Know" />
            <FeatureUpgradeCard title="Be My Agent" />
          </div>
          <div className="flex items-center justify-center p-5 text-xs border rounded-xl ">
            <div className="flex flex-col gap-y-3 xs:max-[500px]:px-16 min-[500px]:flex-row">
              <AOSWrapper animation="zoom-in" >
                <Image src={icons.PeopleSell} alt="" width={200} height={200} />
              </AOSWrapper>
              <div className="space-y-3 ">
                <h4 className="font-[600] text-sm capitalize">
                  Sell Your Item
                </h4>
                <p className="capitalize text-neutral-600 mb-1">
                  Your Exclusive Marketplace, Completely Fee-Free
                </p>
                <Button
                  color="primary"
                  className="w-10/12 p-2 px-4 text-xs capitalize"
                >
                  Add New Product <FaArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto">
        <h2 className="text-2xl font-[600] mb-6">Recommended Listings</h2>
        <RecommendedListings />
      </section>
    </main>
  );
};

export default OverviewPage;
