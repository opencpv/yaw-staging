"use client";
import { useEffect, useState } from "react";
import FAQItem from "./FAQItem";
import Loader from "@/components/__shared/ui/loader";
import { useFaqStore } from "@/store/faq/useFaqStore";
import { Accordion } from "@/components/__shared/ui/accordion/accordion";

const FAQBrowser = ({
  data,
  faqCategories = [],
}: {
  data: any[];
  faqCategories: any[];
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setselectedCategory] = useState<string | null>(null);
  const active = useFaqStore((state) => state.activeBrowser);
  const setActive = useFaqStore((state) => state.setActiveBrowser);
  const [filteredData, setfilteredData] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
      setselectedCategory(faqCategories[0].title);
      setfilteredData(
        data.filter((item) => item.category.title === faqCategories[0].title),
      );
      setLoading(false);
    }
  }, [faqCategories, data]);

  return (
    <>
      {loading ? (
        <div className="flex h-40 items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="items-start gap-10 pt-10 sm:grid sm:grid-cols-6 md:grid-cols-5 md:divide-x">
          <div className="hidden-scrollbar col-span-2 flex w-full gap-12 overflow-x-scroll max-sm:mb-10 sm:max-w-[180px] sm:flex-col md:col-span-1">
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
          <Accordion
            key={filteredData[0]?.title}
            type="single"
            collapsible
            className="col-span-4 w-full min-w-full max-w-3xl sm:min-w-0 md:pl-10"
            defaultValue={filteredData[0]?.title}
          >
            {selectedCategory &&
              filteredData.map((faqItem: any, index: number) => (
                <FAQItem
                  key={index}
                  title={faqItem.title}
                  text={faqItem.description}
                />
              ))}
          </Accordion>
        </div>
      )}
    </>
  );
};

export default FAQBrowser;
