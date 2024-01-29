import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

const MySearchItems = () => {
  return (
    <section className="flex flex-wrap items-center justify-center gap-[28px]">
      <div className="shadow-inner px-4 py-4 md:aspect-square lg:w-[551px] lg:px-[115px]  flex flex-col items-center justify-center  w-full rounded-lg text-white bg-black bg-opacity-30">
        <p className="text-3xl font-semibold mb-3 ">My Bookmarks</p>
        <p className="text-base mb-8 text-justify">
          Lorem ipsum dolor sit amet consectetur. Quisque neque et metus lectus
          proin et vestibulum. Vitae faucibus nulla egestas.
        </p>
        <Link
          href="/dashboard/my-search/bookmarks"
          className="w-full rounded-lg   py-4 bg-[#99B3B2]"
        >
          <div className="flex flex-row gap-2 items-center justify-center">
            <p>Explore</p>
            <IoArrowForward />
          </div>
        </Link>
      </div>
      <div className="relative lg:w-[551px] px-4 shadow-inner overflow-hidden md:aspect-square p-8 lg:px-[115px]  flex flex-col items-center justify-center  w-full rounded-lg text-white bg-black bg-opacity-30">
        <p className="absolute shadow-md md:-rotate-[30deg] top-16 md:top-8 -left-8 bg-[#B0E3C9] py-[10px] px-24 text-black">
          Free Trial Limited
        </p>
        <p className="text-3xl mt-24 font-semibold mb-3">
          Be The First To Know
        </p>
        <p className="text-base mb-8 text-justify">
          Lorem ipsum dolor sit amet consectetur. Quisque neque et metus lectus
          proin et vestibulum. Vitae faucibus nulla egestas.
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
      {/* <div className="relative px-4 shadow-inner overflow-hidden aspect-square lg:px-[115px]  flex flex-col items-center justify-center  w-full rounded-lg text-white bg-black bg-opacity-30">
        <p className="absolute shadow-md -rotate-[30deg] top-8 -left-8 bg-[#E9515E] py-[10px] px-28 text-white">
          Upgrade
        </p>
        <p className="text-3xl font-semibold mb-3">Be My Agent</p>
        <p className="text-base mb-8 text-justify">
          Lorem ipsum dolor sit amet consectetur. Quisque neque et metus lectus
          proin et vestibulum. Vitae faucibus nulla egestas.
        </p>
        <Link href="/link" className="w-full rounded-lg   py-4 bg-[#99B3B2]">
          <div className="flex flex-row gap-2 items-center justify-center">
            <p>Explore</p>
            <IoArrowForward />
          </div>
        </Link>
      </div> */}
    </section>
  );
};

export default MySearchItems;
