import { montserat } from "@/styles/font";

const FAQTab = (props: any) => {
  const { text, activeIndex, index, onClick } = props;
  return (
    <button
      onClick={onClick()}
      className={`${
        montserat.className
      } font-montserrat w-fit px-[5px]  font-semibold ${
        activeIndex == index ? "border-l-4 border-[#DDB771]" : ""
      } text-[#45808B]`}
    >
      {props.text}
    </button>
  );
};

export default FAQTab;
