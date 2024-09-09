export const scrollToBottom = (scrollSize: number = 500) => {
  window.scrollTo({
    top: scrollSize,
    behavior: "smooth",
  });
};
