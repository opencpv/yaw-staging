"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { openSans } from "@/styles/font";

import listings from "@/enum/demodb/listings";
import CaDashEyeOff from "../components/icons/CaDashEyeOff";
import ListingCard2 from "./components/ListingCard2";
import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";
import { useSelectDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import Select from "../components/Select";

const MySearch = () => {
  const data = [1];
  const { images } = useAssets();
  const { value, handleSelectionChange } = useSelectDisclosure<
    "favourites" | "be the first to know" | "listing" | "all"
  >("favourites");

  return (
    <main className={`w-full bg-white px-8 ${openSans.className}`}>
      {/* xl and above */}
      <div className="mb-8 hidden w-fit rounded-xl border p-3 md:block">
        <OptionFilterTabs
          options={[
            "Favourites",
            "Be the first to know",
            "Recommendations",
            "All",
          ]}
          selectedKey={"favourites"}
          onSelectionChange={() => console.log("changed")}
          radius="large"
          padding="small"
        />
      </div>
      {/* xl and below */}
      <div className="my-8 md:hidden">
        <Select
          options={[
            "Favourties",
            "Be the first to know",
            "Recommendations",
            "All",
          ]}
          value={value}
          className="mx-0"
          variant="ghost"
          color="primary"
          handleSelectionChange={handleSelectionChange}
        />
      </div>

      <section>
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
    </main>
  );
};

export default MySearch;

// NOT APPLICABLE ANY  //

// const MySearch = () => {
//   return (
//     <main className="mt-[-20px] w-full bg-my-search-bg bg-cover  bg-center px-8 pb-36">
//       <h1 className="pb-12 pt-24 text-4xl font-semibold text-white">
//         My Search
//       </h1>
//       <section className="grid  gap-[28px] md:grid-cols-1 lg:grid-cols-3">
//         <div className="flex aspect-square w-full  flex-col  items-center justify-center rounded-lg bg-black  bg-opacity-30 px-4 text-white shadow-inner lg:px-[115px]">
//           <p className="mb-3 text-3xl font-semibold">Bookmarks</p>
//           <p className="mb-8 text-justify text-base">
//             Lorem ipsum dolor sit amet consectetur. Quisque neque et metus
//             lectus proin et vestibulum. Vitae faucibus nulla egestas.
//           </p>
//           <Link href="/link" className="w-full rounded-lg   bg-[#99B3B2] py-4">
//             <div className="flex flex-row items-center justify-center gap-2">
//               <p>Explore</p>
//               <IoArrowForward />
//             </div>
//           </Link>
//         </div>
//         <div className="relative flex aspect-square w-full flex-col items-center  justify-center overflow-hidden rounded-lg bg-black  bg-opacity-30 px-4 text-white shadow-inner lg:px-[115px]">
//           <p className="absolute -left-8 top-8 -rotate-[30deg] bg-[#B0E3C9] px-24 py-[10px] text-black shadow-md">
//             Free Trial Limited
//           </p>
//           <p className="mb-3 text-3xl font-semibold">Be The First To Know</p>
//           <p className="mb-8 text-justify text-base">
//             Lorem ipsum dolor sit amet consectetur. Quisque neque et metus
//             lectus proin et vestibulum. Vitae faucibus nulla egestas.
//           </p>
//           <Link
//             href="my-search/be-the-first-to-know"
//             className="w-full rounded-lg   bg-[#99B3B2] py-4"
//           >
//             <div className="flex flex-row items-center justify-center gap-2">
//               <p>Explore</p>
//               <IoArrowForward />
//             </div>
//           </Link>
//         </div>
//         <div className="relative flex aspect-square w-full flex-col items-center  justify-center overflow-hidden rounded-lg bg-black  bg-opacity-30 px-4 text-white shadow-inner lg:px-[115px]">
//           <p className="absolute -left-8 top-8 -rotate-[30deg] bg-[#E9515E] px-28 py-[10px] text-white shadow-md">
//             Upgrade
//           </p>
//           <p className="mb-3 text-3xl font-semibold">Be My Agent</p>
//           <p className="mb-8 text-justify text-base">
//             Lorem ipsum dolor sit amet consectetur. Quisque neque et metus
//             lectus proin et vestibulum. Vitae faucibus nulla egestas.
//           </p>
//           <Link href="/link" className="w-full rounded-lg   bg-[#99B3B2] py-4">
//             <div className="flex flex-row items-center justify-center gap-2">
//               <p>Explore</p>
//               <IoArrowForward />
//             </div>
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default MySearch;
