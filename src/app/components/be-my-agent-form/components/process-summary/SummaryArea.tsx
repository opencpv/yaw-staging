import React, { useEffect } from "react";
import useProcessSummaryContent from "./hooks/useProcessSummaryContent";
import { BiPencil } from "react-icons/bi";
import { useLocalStorage } from "@uidotdev/usehooks";
import { ProcessSummary } from "../types";
import styles from "../index.module.css";

type Props = {};

const SummaryArea = (props: Props) => {
  const processSummaryContent = useProcessSummaryContent();
  const [processSummary] = useLocalStorage<ProcessSummary>("process-summary");
  const [agentFormActiveSlide, setAgentFormActiveSlide] = useLocalStorage(
    "agentFormActiveSlide",
  );

  const processPageRef = React.useRef<HTMLLIElement>(null);

  useEffect(() => {
    const pageElement = document.getElementById(
      processSummary?.currentSummaryPage
        .replaceAll(" ", "-")
        .replaceAll("&", "")
        .replaceAll("(", "")
        .replaceAll(")", ""),
    );
    if (pageElement) {
      pageElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    // if (processPageRef.current) {
    //   const sectionElement = processPageRef.current.querySelector(
    //     // scrolls to the section with the id of the currentSummaryPage
    //     `#${processSummary!
    //       .currentSummaryPage!.replaceAll(" ", "-")
    //       .replaceAll("&", "")
    //       .replaceAll("(", "")
    //       .replaceAll(")", "")}`,
    //   );
    //   if (sectionElement) {
    //     console.log(sectionElement);
    //     sectionElement.scrollIntoView({ behavior: "smooth" });
    //   }
    // }
    // if (processPageRef.current) {
    //   processPageRef.current.scrollIntoView({ behavior: "smooth" });
    // }
  }, [processSummary?.currentSummaryPage, processSummary]);

  return (
    <section className="lg:col-span-2">
      <ul className="space-y-10">
        {processSummaryContent?.map(
          (
            processPage,
            idx, // mapping through processPage: i.e: Location, Contact Information
          ) => (
            <li
              key={idx}
              className="space-y-4"
              id={processPage?.title
                .replaceAll(" ", "-")
                .replaceAll("&", "")
                .replaceAll("(", "")
                .replaceAll(")", "")}
              ref={processPageRef}
            >
              <div className="grid grid-cols-2 gap-10">
                <h2 className={`${styles.titleNoMargin} capitalize`}>
                  {processPage?.title}
                </h2>
                <button
                  type="button"
                  className="ml-auto flex max-h-8 items-center gap-1 rounded-md bg-[#E6EBEB] p-1.5 px-4 text-primary-400 hover:bg-[#ad832a20] hover:text-[#AD842A]"
                  onClick={() => setAgentFormActiveSlide({ activeSlide: idx })}
                >
                  <BiPencil />
                  Edit
                </button>
              </div>
              {Object.entries(processPage?.content).map(
                (
                  [key, value],
                  idx, // mapping through content: i.e: Title, First Name
                ) => (
                  <div key={idx} className="grid grid-cols-2 gap-10">
                    <p className="text-neutral-400">
                      {key.replaceAll("_", " ")}
                    </p>
                    <p className="ml-auto">{value}</p>
                  </div>
                ),
              )}
            </li>
          ),
        )}
      </ul>
    </section>
  );
};

export default SummaryArea;
