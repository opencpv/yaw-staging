"use client";
import { useEffect, useState } from "react";
import { montserat } from "@/styles/font";
import fetchFaqData from "../lib/fetchFaqData";
import onlyUnique from "@/lib/utils/onlyUnique,";
import groupByCategory from "../lib/groupFAQ";
import FAQItem from "./FAQItem";
import Loader from "@/components/__shared/loader/Loader";
import { useFaqStore } from "@/store/faq/useFaqStore";
import style from "../Faq.module.css";

const FAQBrowser = () => {
  // const [active, setActive] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [data, setData] = useState<any>({});
  const [selectedCategory, setselectedCategory] = useState<string | null>(null);

  const active = useFaqStore((state) => state.activeBrowser);
  const setActive = useFaqStore((state) => state.setActiveBrowser);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number | null) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    fetchFaqData()
      .then((data) => {
        const cats = data.map((item: any) => item.category.title);
        const grouped = groupByCategory(data);
        setData(grouped);
        setLoading(false);
        // console.log(grouped);
        const unique = cats.filter(onlyUnique);
        setselectedCategory(unique[0]);
        setCategories(unique);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex h-40 items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-wrap items-start gap-10 pt-10 md:divide-x">
          <div className="flex flex-1 flex-wrap gap-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setActive(index);
                  setselectedCategory(category);
                }}
                className={`min-w-max px-1.5 py-1.5 text-start font-semibold transition-all duration-200 ${
                  active == index
                    ? "border-l-4 border-[#DDB771] md:bg-[#EFEFEF]"
                    : ""
                } text-[#45808B]`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="faq-items max-w-6xl flex-[6] md:pl-10">
            {selectedCategory &&
              data[selectedCategory].map((categoryObj: any, index: number) => (
                <FAQItem
                  key={index}
                  title={categoryObj.title}
                  text={categoryObj.description}
                  isActive={index === openIndex}
                  onClick={() => handleToggle(index)}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FAQBrowser;
