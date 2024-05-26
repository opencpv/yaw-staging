export const formatPrice = (price: number, prefix = true) => {
  return prefix
    ? price?.toLocaleString("en-US", {
        style: "currency",
        currency: "GHS",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : price?.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};
