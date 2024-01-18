"use client";
import { useEffect, useState } from "react";
import { montserat } from "@/styles/font";
import fetchFaqData from "../lib/fetchFaqData";
import onlyUnique from "@/lib/utils/onlyUnique,";
import groupByCategory from "../lib/groupFAQ";
import FAQItem from "./FAQItem";

const FAQBrowser = () => {
  const [active, setActive] = useState<number>(0);
  const [categories, setCategories] = useState<string[]>([]);
  const [data, setData] = useState<any>({});
  const [selectedCategory, setselectedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetchFaqData()
      .then((data) => {
        const cats = data.map((item: any) => item.category.title);
        const grouped = groupByCategory(data);
        setData(grouped);
        console.log(grouped);
        const unique = cats.filter(onlyUnique);
        setselectedCategory(unique[0]);
        setCategories(unique);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="flex flex-col items-start px-[15px] md:px-[39px] lg:flex-row">
      <div className="lg:border-r- mt-14 flex flex-row flex-wrap gap-[50px] md:mb-14 lg:mr-[109px] lg:flex-col lg:pr-[109px] ">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`block flex-shrink px-[10px] py-[5px] transition-all duration-200 lg:bg-none lg:px-0 ${
              active == index ? "md:bg-[#EFEFEF]" : ""
            }`}
          >
            <button
              onClick={() => {
                console.log(index);
                setActive(index);
                setselectedCategory(category);
              }}
              className={`${
                montserat.className
              } px-[5px] font-semibold  transition-all  duration-200 ${
                active == index ? "border-l-4 border-[#DDB771]" : ""
              } text-[#45808B]`}
            >
              {category}
            </button>
          </div>
        ))}
      </div>
      <div>
        {selectedCategory &&
          data[selectedCategory].map((categoryObj: any, index: number) => (
            <FAQItem
              key={index}
              title={categoryObj.title}
              text={categoryObj.description}
            />
          ))}
      </div>
    </div>
  );
};

export default FAQBrowser;
