import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";
import React from "react";

type Props = {};

const FaqHowToSwitch = (props: Props) => {
  const activePage = useFaqHowToSwitchStore((state) => state.activePage);
  const setActivePage = useFaqHowToSwitchStore((state) => state.setActivePage);

  return (
    <div className="p-3 mb-8 border rounded-xl w-fit">
      <OptionFilterTabs
        options={["FAQ", "how to"]}
        selectedKey={activePage}
        onSelectionChange={setActivePage}
        radius="large"
        padding="wide"
      />
    </div>
  );
};

export default FaqHowToSwitch;
