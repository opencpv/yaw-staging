const contentAccordionVariants = (height = "6rem") => {
  return {
    expanded: { height: "auto" },
    collapsed: { height },
  };
};

export { contentAccordionVariants };
