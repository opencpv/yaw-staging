import { montserat } from "@/styles/font";

const FAQTab = (props: any) => {
  const { text, activeIndex, index, onClick } = props;
  return (
    <button
      onClick={onClick()}
      className={`${montserat.className} font-semibold w-fit  px-[5px] ${
        activeIndex == index ? "border-[#DDB771] border-l-4" : ""
      } text-[#45808B]`}
    >
      {props.text}
    </button>
  );
};

export default FAQTab;
