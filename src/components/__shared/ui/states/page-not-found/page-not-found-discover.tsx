import { motion } from "framer-motion";
import RecommendedListings from "../../listing/recommended-listings";

function PageNotFoundDiscover() {
  return (
    <motion.div
      layout
      className="flex flex-col lg:flex-row w-full items-center justify-center gap-16"
    >
      <div className="flex w-full  lg:w-[40%] flex-col gap-5">
        <h2 className="lg:text-4xl font-bold capitalize text-[#1E1E1E]">
          Discover your new home with us
        </h2>
        <h3 className="text-[#6F6F6F] font-normal">Browse through our genuine listings without stress</h3>
      </div>
      <div className="w-full">
        <RecommendedListings />
      </div>{" "}
    </motion.div>
  );
}

export default PageNotFoundDiscover;
