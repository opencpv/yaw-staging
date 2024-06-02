const FAQTab = (props: any) => {
  const { text, activeIndex, index, onClick } = props;
  return (
    <button
      onClick={onClick()}
      className={`w-fit px-[5px] font-montserrat  font-semibold ${
        activeIndex == index ? "border-l-4 border-accent" : ""
      } text-[#45808B]`}
    >
      {props.text}
    </button>
  );
};

export default FAQTab;
