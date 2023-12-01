"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import CaSearchHomeIcon from "../../components/icons/CaOverview copy";
import Image from "next/image";
import { montserat, openSans } from "@/app/styles/font";
import CaDashAdd from "../../components/icons/CaDashAdd";
import CaDashFilter from "../../components/icons/CaDashFilter";
import CaDashEyeOff from "../../components/icons/CaDashEyeOff";
import listings from "@/enum/demodb/listings";
import ListingCard2 from "../components/ListingCard2";

const BeTheFirstToKnow = () => {
  const data = [1];
  const { images } = useAssets();
  return (
    <main className={`w-full bg-white px-8 ${openSans.className}`}>
      <h1 className="mb-4 text-3xl font-semibold ">Be the first to Know</h1>

      {data.length == 0 ? (
        <section className="w-full h-[100vh] flex flex-col items-center justify-center">
          <Image
            src={images.SearchIcon}
            alt="search icon"
            width={214}
            height={214}
          />
          <p className="text-[25px] font-semibold text-center ">
            You have no search <br></br>criteria
          </p>
          <p className="lg:w-[675px] md:px-8 px-2 text-center mt-5">
            Tell us what you are looking for and let RentRight do the work for
            you. Receive instant notifications when a match is found or new
            properties are listed. Give it a try, create your customized search
            criteria
          </p>
          <button className="mt-[45px] px-10 py-[15px] bg-[#073B3A] font-semibold text-white text-center rounded-md">
            Add New Search Criteria{" "}
          </button>
        </section>
      ) : (
        <section>
          <button className="flex gap-[36px] items-center py-6 px-8 rounded-[12px] shadow-1">
            <div className="flex items-center justify-center h-[64px] w-[64px] bg-[#F1F1F1] rounded-full ">
            <CaDashAdd/>
            </div>
            <p className="text-5">Add New Search Criteria </p>
          </button>
          {/* saved criteria filter */}
          <div className="flex items-center lg:mt-20 lg:mb-[70px] gap-[11px]">
            <CaDashFilter/>
            <p className={`text-[24px] ${montserat.className}`}>Saved Criteria&apos;s</p>
          </div>
          {/* results found */}
         <div className="grid lg:grid-cols-3 sm:grid-cols-1 mb-2">
         <div className="px-6 py-3 rounded-[12px] border-[1px] flex justify-between">
            <p className="text-[#00763A] font-semibold mt-1">{data.length} {data.length>1?"results":"result"} found</p>
            <div className="relative">
              <CaDashEyeOff/>
              <div className="absolute top-[2px] right-[-14px] rounded-full h-7 w-7 bg-[#B71851] text-[10px] text-white flex items-center justify-center">
                20+
              </div>
            </div>
          </div>
         </div>
         {/* properties grid */}
         <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
       
            {listings.map((listing) => (
            <ListingCard2
              key={listing.id}
              href={listing.href}
              images={listing.images}
              liked={listing.liked}
              membership={
                listing.membership as
                  | "Certified"
                  | "Verified"
                  | "Unverified"
                  | "None"
                  | "none"
                  | ""
              }
              monthlyAmount={listing.monthlyAmount}
              paymentStructure={
                listing.paymentStructure as
                  | "Yearly"
                  | "Bi-Annually"
                  | "Quarterly"
                  | "Every-6-Months"
                  | "Every-3-Years"
              }
              propertyDescription={listing.propertyDescription}
              price={listing.price}
              propertyType={listing.propertyType}
              rating={listing.rating}
              ratingCount={listing.ratingCount}
              deal={
                listing.deal as
                  | "Editor's Choice"
                  | "Price Drop"
                  | "Best Value"
                  | "None"
                  | "none"
                  | ""
              }
            />
          ))}
</div>

        </section>
      )}
    </main>
  );
};

export default BeTheFirstToKnow;
