import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";
import React, { useRef } from "react";
import { useScrollIntoView } from "@/lib/custom-hooks/useWindowEvents";

type Props = {};

const FaqHowToSwitch = (props: Props) => {
  const activePage = useFaqHowToSwitchStore((state) => state.activePage);
  const setActivePage = useFaqHowToSwitchStore((state) => state.setActivePage);

  const tabRef = useRef(null);

  // useScrollIntoView(tabRef, "center")

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
