import OptionFilterTabs from "@/components/__shared/ui/OptionFilterTabs";
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
    <div className="mb-6 mt-8 w-fit rounded-xl border p-3">
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
