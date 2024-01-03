import React from "react";

type Props = {};

const SearchCity = (props: Props) => {
  return (
    <div className="relative w-screen px-4 py-10 -ml-5 bg-white shadow-xl xs:mx-auto xs:w-full xs:px-12 bottom-20 rounded-xl lg:w-10/12">
      <input
        type="search"
        className="border block shadow-xl text-neutral-800 border-[#21A19F] rounded-xl w-full py-6 p-4 sm:pl-12 mx-auto uppercase lg:w-10/12"
        placeholder="Madina, Accra"
      />
    </div>
  );
};

export default SearchCity;
