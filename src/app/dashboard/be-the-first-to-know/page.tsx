"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import { montserat, openSans } from "@/styles/font";
import CaDashAdd from "../components/icons/CaDashAdd";
import CaDashFilter from "../components/icons/CaDashFilter";
import CaDashEyeOff from "../components/icons/CaDashEyeOff";
import listings from "@/enum/demodb/listings";
import ListingCard2 from "../my-search/components/ListingCard2";

const BeTheFirstToKnow = () => {
  const data = [1];
  const { images } = useAssets();
  return (
    <main className={`w-full bg-white px-8 ${openSans.className}`}>
      <h1 className="mb-4 text-3xl font-semibold ">Be the first to Know</h1>

      {data.length == 0 ? (
        <section className="flex h-[100vh] w-full flex-col items-center justify-center">
          <Image
            src={images.SearchIcon}
            alt="search icon"
            width={214}
            height={214}
          />
          <p className="text-center text-[25px] font-semibold ">
            You have no search <br></br>criteria
          </p>
          <p className="mt-5 px-2 text-center md:px-8 lg:w-[675px]">
            Tell us what you are looking for and let RentRight do the work for
            you. Receive instant notifications when a match is found or new
            properties are listed. Give it a try, create your customized search
            criteria
          </p>
          <button className="mt-[45px] rounded-md bg-[#073B3A] px-10 py-[15px] text-center font-semibold text-white">
            Add New Search Criteria{" "}
          </button>
        </section>
      ) : (
        <section>
          <button className="shadow-1 flex items-center gap-[36px] rounded-[12px] px-8 py-6">
            <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#F1F1F1] ">
              <CaDashAdd />
            </div>
            <p className="text-5">Add New Search Criteria </p>
          </button>
          {/* saved criteria filter */}
          <div className="flex items-center gap-[11px] lg:mb-[70px] lg:mt-20">
            <CaDashFilter />
            <p className={`text-[24px] ${montserat.className}`}>
              Saved Criteria&apos;s
            </p>
          </div>
          {/* results found */}
          <div className="mb-2 grid sm:grid-cols-1 lg:grid-cols-3">
            <div className="flex justify-between rounded-[12px] border-[1px] px-6 py-3">
              <p className="mt-1 font-semibold text-[#00763A]">
                {data.length} {data.length > 1 ? "results" : "result"} found
              </p>
              <div className="relative">
                <CaDashEyeOff />
                <div className="absolute right-[-14px] top-[2px] flex h-7 w-7 items-center justify-center rounded-full bg-[#B71851] text-[10px] text-white">
                  20+
                </div>
              </div>
            </div>
          </div>
          {/* properties grid */}
          <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing) => (
              <ListingCard2
                key={listing.id}
                href={listing.href}
                images={listing.images}
                liked={listing.liked}
                membership={listing.membership as Membership}
                monthlyAmount={listing.monthlyAmount}
                paymentStructure={listing.paymentStructure as PaymentStructure}
                propertyDescription={listing.propertyDescription}
                price={listing.price}
                propertyName={listing.propertyName}
                rating={listing.rating}
                ratingCount={listing.ratingCount}
                deal={listing.deal as Deal}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default BeTheFirstToKnow;
