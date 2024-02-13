import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";
import React, { useRef } from "react";
import { useScrollIntoView } from "@/lib/custom-hooks/useWindowEvents";
import { useSearchStore } from "@/store/search/useSearchStore";

type Props = {};

const SearchSwitch = (props: Props) => {
  const activePage = useSearchStore((state) => state.activePage);
  const setActivePage = useSearchStore((state) => state.setActivePage);

  const tabRef = useRef(null);

  useScrollIntoView(tabRef, "center");

  return (
    <div className="p-3 mt-8 mb-6 border rounded-xl w-fit">
      <OptionFilterTabs
        options={["Favorites", "Saved"]}
        selectedKey={activePage}
        onSelectionChange={setActivePage}
        radius="large"
        padding="wide"
        ref={tabRef}
      />
    </div>
  );
};

export default SearchSwitch;
