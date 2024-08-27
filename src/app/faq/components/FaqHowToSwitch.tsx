import { Tabs } from "@/components/__shared/ui/tabs";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";
import React from "react";

const FaqHowToSwitch = () => {
  const activePage = useFaqHowToSwitchStore((state) => state.activePage);
  const setActivePage = useFaqHowToSwitchStore((state) => state.setActivePage);

  return (
    <div className="my-8 w-fit rounded-xl border p-3">
      <Tabs
        options={["FAQ", "How To"]}
        selectedKey={activePage}
        onSelectionChange={setActivePage}
        variant="rounded"
      />
    </div>
  );
};

export default FaqHowToSwitch;
