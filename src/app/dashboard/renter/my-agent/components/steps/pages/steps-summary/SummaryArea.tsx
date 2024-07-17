import React from "react";
import useStepsSummaryContent from "./hooks/useStepsSummaryContent";
import { BiPencil } from "react-icons/bi";
import { BeMyAgentStepsStore } from "@/store/dashboard/BeMyAgentStepsStore";
import { LowerCase, createUUID } from "@/lib/utils/stringManipulation";
import { cn } from "@/lib/utils";

type Props = {
  processPagesRefs: React.MutableRefObject<any[]>;
};

const SummaryArea = ({ processPagesRefs }: Props) => {
  const processSummaryContent = useStepsSummaryContent();
  const { setActiveSlide, agentRequest } = BeMyAgentStepsStore();

  const handleEdit = (idx: number) => {
    const title = "Screening & Other Details";
    const titleIndex = processSummaryContent.findIndex(
      (processPage) => processPage.title === title,
    );

    agentRequest?.is_paid !== true &&
      setActiveSlide(idx >= titleIndex ? idx - 1 : idx);
  };

  return (
    <section>
      <ul className="space-y-10">
        {processSummaryContent?.map(
          (
            processPage,
            idx, // mapping through processPage: i.e: Location, Contact Information
          ) => (
            <li
              key={createUUID()}
              className="space-y-4"
              ref={processPagesRefs.current[idx]}
            >
              <div className="grid grid-cols-2 gap-10">
                <h2 className={`text-lg capitalize lg:text-2xl`}>
                  {processPage?.title}
                </h2>
                <button
                  type="button"
                  className={cn(
                    "ml-auto flex max-h-8 items-center gap-1 rounded-md bg-[#E6EBEB] p-1.5 px-4 text-primary-400 hover:bg-[#ad832a20] hover:text-[#AD842A]",
                    {
                      "cursor-not-allowed": agentRequest?.is_paid,
                    },
                  )}
                  onClick={() => handleEdit(idx)}
                >
                  <BiPencil />
                  Edit
                </button>
              </div>
              {Object.entries(processPage?.content).map(
                (
                  [key, value],
                  // mapping through content: i.e: Title, First Name
                ) => (
                  <React.Fragment key={createUUID()}>
                    {LowerCase(key) === "property_type" ||
                    LowerCase(key) === "required_features" ? (
                      <div className="grid-cols-2 gap-10 xs:grid">
                        <div className="leading-loose text-neutral-400">
                          {value || "_"}
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-10">
                        <p className="text-neutral-400">
                          {key.replaceAll("_", " ")}
                        </p>
                        <p className="ml-auto text-right">{value}</p>
                      </div>
                    )}
                  </React.Fragment>
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
