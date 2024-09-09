const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9.]+/g, "-") // Replace all characters except alphanumeric and period with '-'
    .replace(/^-|-$/g, ""); // Remove leading and trailing hyphens
};

export default slugify;
