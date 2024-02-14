import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

const MySearchItems = () => {
  return (
    <section className="flex flex-wrap items-center justify-center gap-[28px]">
      <div className="flex w-full flex-col items-center justify-center rounded-lg  bg-black bg-opacity-30 px-4 py-4  text-white shadow-inner md:aspect-square lg:w-[551px] lg:px-[115px]">
        <p className="mb-3 text-3xl font-semibold ">My Bookmarks</p>
        <p className="mb-8 text-justify text-base">
          Lorem ipsum dolor sit amet consectetur. Quisque neque et metus lectus
          proin et vestibulum. Vitae faucibus nulla egestas.
        </p>
        <Link
          href="my-search/bookmarks"
          className="w-full rounded-lg   bg-secondary-400 py-4"
        >
          <div className="flex flex-row items-center justify-center gap-2">
            <p>Explore</p>
            <IoArrowForward />
          </div>
        </Link>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-black bg-opacity-30 p-8 px-4  text-white shadow-inner md:aspect-square lg:w-[551px] lg:px-[115px]">
        <p className="absolute -left-8 top-16 bg-[#B0E3C9] px-24 py-[10px] text-black shadow-md md:top-8 md:-rotate-[30deg]">
          Free Trial Limited
        </p>
        <p className="mb-3 mt-24 text-3xl font-semibold">
          Be The First To Know
        </p>
        <p className="mb-8 text-justify text-base">
          Lorem ipsum dolor sit amet consectetur. Quisque neque et metus lectus
          proin et vestibulum. Vitae faucibus nulla egestas.
        </p>
        <Link
          href="my-search/be-the-first-to-know"
          className="w-full rounded-lg   bg-secondary-400 py-4"
        >
          <div className="flex flex-row items-center justify-center gap-2">
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
        <Link href="/link" className="w-full rounded-lg   py-4 bg-secondary-400">
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
