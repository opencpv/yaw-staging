"use client";
import { useEffect, useState } from "react";
import onlyUnique from "@/lib/utils/onlyUnique,";
import groupByCategory from "../lib/groupFAQ";
import FAQItem from "./FAQItem";
import Loader from "@/components/__shared/ui/loader/Loader";
import { useFaqStore } from "@/store/faq/useFaqStore";
import style from "../Faq.module.css";

const FAQBrowser = ({
  data,
  faqCategories = [],
}: {
  data: any[];
  faqCategories: any[];
}) => {
  // const [active, setActive] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setselectedCategory] = useState<string | null>(null);
  const [newData, setnewData] = useState<any[]>([]);
  const active = useFaqStore((state) => state.activeBrowser);
  const setActive = useFaqStore((state) => state.setActiveBrowser);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [filteredData, setfilteredData] = useState<any[]>([]);
  const handleToggle = (index: number | null) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    if (data) {
      setselectedCategory(faqCategories[0].title);
      setfilteredData(
        data.filter((item) => item.category.title === faqCategories[0].title),
      );
      setLoading(false);
    }
  }, [faqCategories]);

  return (
    <>
      {loading ? (
        <div className="flex h-40 items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-wrap items-start gap-10 pt-10 md:divide-x">
          <div className="flex flex-1 flex-wrap gap-12 sm:max-w-[180px]">
            {faqCategories.map((category: any, index: number) => (
              <button
                key={index}
                onClick={() => {
                  setActive(index);
                  setselectedCategory(category.title);
                  setfilteredData(
                    data.filter(
                      (item) => item.category.title === category.title,
                    ),
                  );
                }}
                className={`min-w-max px-1.5 py-1.5 text-start font-semibold transition-all duration-200 ${
                  active == index
                    ? "border-l-4 border-accent md:bg-[#EFEFEF]"
                    : ""
                } text-[#45808B]`}
              >
                {category.title}
              </button>
            ))}
          </div>
          <div className="faq-items min-w-full max-w-4xl flex-[6] sm:min-w-0 md:pl-10">
            {selectedCategory &&
              filteredData.map((faqItem: any, index: number) => (
                <FAQItem
                  key={index}
                  title={faqItem.title}
                  text={faqItem.description}
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
