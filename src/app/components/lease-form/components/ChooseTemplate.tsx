import { styled } from "@stitches/react";
import SlideEnter from "./SlideEnter";

type PayButtonProps = {
  title: string;
  variant: string;
};
const PayButton = ({ title, variant }: PayButtonProps) => {
  return (
    <button
      className={`max-w-[261px] w-full flex items-center justify-center aspect-[261/48] text-white rounded-2xl
        text-[20px] font-bold
        ${variant == "blue" ? "bg-[#45808B]" : "bg-[#DCA847]"}`}>
      {title}
    </button>
  );
};

export default function ChooseTemplate() {
  return (
    <SlideEnter>
      <div className="flex flex-col items-center justify-center w-full px-5 lg:px-20 h-full">
        <div className="flex flex-col gap-8 w-full lg:w-[75%]">
          <div className="grid grid-cols-8 w-full">
            <div className="col-span-8 lg:col-span-5 text-[31px] font-semibold leading-[43.4p]">
              <p>Choose your preferred template to list your property</p>
            </div>
          </div>
          <div className="grid grid-cols-8 gap-y-20 lg:gap-y-0 lg:gap-x-20 w-full">
            <div className="col-span-8 lg:col-span-4 flex flex-col gap-4 w-full">
              <p>Continue with Basic Template</p>

              <TemplateButton className="w-full h-full bg-[url('/assets/svgs/free-template.svg')] ">
                <PayButton title="GHS 50" variant="yellow" />
              </TemplateButton>
            </div>
            <div className="col-span-8 lg:col-span-4 flex flex-col gap-4 w-full">
              <p>Continue with Professional Template</p>

              <TemplateButton className="w-full h-full bg-[url('/assets/svgs/professional-template.svg')] ">
                <PayButton title="GHS 50" variant="blue" />
              </TemplateButton>
            </div>
          </div>
        </div>
      </div>
    </SlideEnter>
  );
}

const TemplateButton = styled("button", {
  paddingInline: "1rem",
  paddingBlock: "1rem",
  aspectRatio: "511/501",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

  "&:hover": {
    border: "2px solid #45808B45",
    borderRadius: "16px",
  },
});
