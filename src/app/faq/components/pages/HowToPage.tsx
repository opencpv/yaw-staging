import React from "react";
import HowToVideosSection from "../how_to/HowToVideosSection";
import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";
import { useHowToTabsStore } from "@/store/faq/useFaqStore";

type Props = {};

const HowToPage = (props: Props) => {
  const activeTab = useHowToTabsStore((state) => state.activeTab);
  const setActiveTab = useHowToTabsStore((state) => state.setActiveTab);

  return (
    <section id="G9mELbIrnVmy7A==">
      <div className="mb-8">
      <OptionFilterTabs
        options={["all", "renters", "service pros", "listing", "searching", "payment"]}
        selectedKey={activeTab}
        onSelectionChange={setActiveTab}
        radius="small"
      />
      </div>
      <HowToVideosSection />
    </section>
  );
};

export default HowToPage;
