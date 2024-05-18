import OptionFilterTabs from "@/components/__shared/ui/OptionFilterTabs";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";
import React, { useRef } from "react";

const FaqHowToSwitch = () => {
  const activePage = useFaqHowToSwitchStore((state) => state.activePage);
  const setActivePage = useFaqHowToSwitchStore((state) => state.setActivePage);

  return (
    <div className="my-8 w-fit rounded-xl border p-3">
      <OptionFilterTabs
        options={["FAQ", "how to"]}
        selectedKey={activePage}
        onSelectionChange={setActivePage}
        radius="large"
        padding="wide"
        cursorAnimation
        // ref={tabRef}
      />
    </div>
  );
};

export default FaqHowToSwitch;
