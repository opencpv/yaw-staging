import { useMemo } from "react";

const useCapitalizeName = (initialName: string, delimiter?: string) => {
  let contactName = useMemo(() => {
    // Algorithm for getting contact name
    let nameSplit = initialName.split(delimiter ? delimiter : "%20");
    let nameSplitCapitalized = nameSplit.map(
      (name) => name.slice(0, 1).toUpperCase() + name.slice(1)
    );
    return nameSplitCapitalized.join(" ");
  }, [initialName, delimiter]);

  return contactName;
};

export { useCapitalizeName };
