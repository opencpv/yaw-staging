import MySearchItems from "./components/MySearchItems";

const MySearch = () => {
  const data = [1];
  const { images } = useAssets();
  const { value, handleSelectionChange } = useSelectDisclosure<
    "favourites" | "saved search" | "be the first to know" | "listing" | "all"
  >("favourites");

  return (
    <main className="mt-[-20px] w-full bg-my-search-bg bg-cover  bg-center px-8 pb-36">
      <h1 className="pb-12 pt-24 text-center text-4xl font-semibold text-white">
        My Search
      </h1>
      <MySearchItems />
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
