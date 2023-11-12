const capitalizeName = (initialName: string, delimiter?: string) => {
  // Algorithm for getting contact name
  let nameSplit = initialName.split(delimiter ? delimiter : "%20");
  let nameSplitCapitalized = nameSplit.map(
    (name) => name.slice(0, 1).toUpperCase() + name.slice(1)
  );
  return nameSplitCapitalized.join(" ");
};

export default capitalizeName
