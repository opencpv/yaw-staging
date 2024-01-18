import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";
import React, { useRef } from "react";
import { useScrollIntoView } from "@/lib/custom-hooks/useWindowEvents";

type Props = {};

const FaqHowToSwitch = (props: Props) => {
  const activePage = useFaqHowToSwitchStore((state) => state.activePage);
  const setActivePage = useFaqHowToSwitchStore((state) => state.setActivePage);

  const tabRef = useRef(null)
  
  useScrollIntoView(tabRef, "center")

  return (
    <div className="p-3 my-8 border rounded-xl w-fit">
      <OptionFilterTabs
        options={["FAQ", "how to"]}
        selectedKey={activePage}
        onSelectionChange={setActivePage}
        radius="large"
        padding="wide"
        ref={tabRef}
      />
    </div>
  );
};

export default FaqHowToSwitch;
