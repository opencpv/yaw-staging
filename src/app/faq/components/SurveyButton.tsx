import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";

const SurveyButton = () => {
  const { icons } = useAssets();

  return (
    <div className="flex justify-end mb-10 md:mb-[37px]">
      <button>
        <Image src={icons.FeedbackButton} alt="survey" />
      </button>
    </div>
  );
};

export default SurveyButton;
