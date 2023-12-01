import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
const MySearch = () => {
  return (
    <main className="w-full mt-[-20px] pb-36 px-8  bg-my-search-bg bg-cover bg-center">
      <h1 className="text-white font-semibold text-4xl pt-24 pb-12">
        My Search
      </h1>
      <section className="grid  lg:grid-cols-3 md:grid-cols-1 gap-[28px]">
        <div className="shadow-inner px-4 aspect-square  lg:px-[115px]  flex flex-col items-center justify-center  w-full rounded-lg text-white bg-black bg-opacity-30">
          <p className="text-3xl font-semibold mb-3">My Bookmarks</p>
          <p className="text-base mb-8 text-justify">
            Lorem ipsum dolor sit amet consectetur. Quisque neque et metus
            lectus proin et vestibulum. Vitae faucibus nulla egestas.
          </p>
          <Link href="/link" className="w-full rounded-lg   py-4 bg-[#99B3B2]">
            <div className="flex flex-row gap-2 items-center justify-center">
              <p>Explore</p>
              <IoArrowForward />
            </div>
          </Link>
        </div>
        <div className="relative px-4 shadow-inner overflow-hidden aspect-square lg:px-[115px]  flex flex-col items-center justify-center  w-full rounded-lg text-white bg-black bg-opacity-30">
          <p className="absolute shadow-md -rotate-[30deg] top-8 -left-8 bg-[#B0E3C9] py-[10px] px-24 text-black">
            Free Trial Limited
          </p>
          <p className="text-3xl font-semibold mb-3">Be The First To Know</p>
          <p className="text-base mb-8 text-justify">
            Lorem ipsum dolor sit amet consectetur. Quisque neque et metus
            lectus proin et vestibulum. Vitae faucibus nulla egestas.
          </p>
          <Link
            href="my-search/be-the-first-to-know"
            className="w-full rounded-lg   py-4 bg-[#99B3B2]"
          >
            <div className="flex flex-row gap-2 items-center justify-center">
              <p>Explore</p>
              <IoArrowForward />
            </div>
          </Link>
        </div>
        <div className="relative px-4 shadow-inner overflow-hidden aspect-square lg:px-[115px]  flex flex-col items-center justify-center  w-full rounded-lg text-white bg-black bg-opacity-30">
          <p className="absolute shadow-md -rotate-[30deg] top-8 -left-8 bg-[#E9515E] py-[10px] px-28 text-white">
            Upgrade
          </p>
          <p className="text-3xl font-semibold mb-3">Be My Agent</p>
          <p className="text-base mb-8 text-justify">
            Lorem ipsum dolor sit amet consectetur. Quisque neque et metus
            lectus proin et vestibulum. Vitae faucibus nulla egestas.
          </p>
          <Link href="/link" className="w-full rounded-lg   py-4 bg-[#99B3B2]">
            <div className="flex flex-row gap-2 items-center justify-center">
              <p>Explore</p>
              <IoArrowForward />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default MySearch;
