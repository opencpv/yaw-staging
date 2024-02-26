import { styled } from "@stitches/react";
import SlideEnter from "./SlideEnter";
import FormSwitch from "@/app/contact/components/FormSwitch";
import { useState } from "react";
import CircleTick from "./CircleTick";
import CircleWrong from "./CircleWrong";
import styles from './index.module.css'


const differences = [
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit amet consectetur.",
];

type PayButtonProps = {
  title: string;
  variant: string;
};
const PayButton = ({ title, variant }: PayButtonProps) => {
  return (
    <button
      className={`max-w-[261px] w-full flex items-center justify-center aspect-[261/48] text-white rounded-2xl
        text-[1.25rem] font-bold
        ${variant == "blue" ? "bg-primary-200" : "bg-[#DCA847]"}`}>
      {title}
    </button>
  );
};

export default function ChooseTemplate() {
  const [showComparison, setShowComparison] = useState(false);
  return (
    <>
      <Root className="flex flex-col items-center justify-center w-full lg:px-20 h-full">
        <div className="flex flex-col gap-8 w-full lg:w-[75%]">
          <div className="grid grid-cols-8 w-full">
            <div className={`col-span-8 lg:col-span-5 font-semibold leading-[43.4px] ${styles.title}`}>
              <p>Choose your preferred template to list your property</p>
            </div>
          </div>
          <div>
            <FormSwitch
              label="Show Comparison"
              onChange={() => setShowComparison((init) => !init)}
            />
          </div>
          {showComparison && (
            <div className="border-x-[1px] border-x-[#E6E6E6] mb-20">
              <div className="grid grid-cols-3 text-white bg-accent-400 font-semibold text-[13px] lg:text-[1rem]">
                <div className="feature-header">Features</div>
                <div className="feature-header">Basic Template</div>
                <div className="feature-header">Professional Template</div>
              </div>
              {differences?.map((r, index) => (
                <SlideEnter key={index}>
                  <div
                    className="grid grid-cols-3 py-[10px] border-b-[#E6E6E6] border-b-[1px] "
                    key={index}>
                    <div className="text-left lg:text-center h-[80px] flex items-center justify-center font-semibold text-[13px] lg:text-[1rem] pl-3 lg:pl-0">
                      {r}
                    </div>
                    <div className="flex items-center justify-center">
                      <div
                        className="rounded-[4px] bg-white
                        tick
                         flex items-center justify-center w-[40px] h-[32px]">
                        <CircleTick />
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div
                        className="rounded-[4px] bg-white
                      tick
                      flex items-center justify-center w-[40px] h-[32px]">
                        <CircleWrong />
                      </div>{" "}
                    </div>
                  </div>
                </SlideEnter>
              ))}
            </div>
          )}
          <div className="grid grid-cols-8 gap-y-20 lg:gap-y-0 lg:gap-x-20 w-full">
            <div className="col-span-8 lg:col-span-4 flex flex-col gap-4 w-full">
              <p>Continue with Basic Template</p>

              <TemplateButton className="w-full h-full bg-[url('/svgs/template.svg')]  ">
                <PayButton title="GHS 50" variant="yellow" />
                <p className="w-full text-right">View Sample</p>{" "}
              </TemplateButton>
            </div>
            <div className="col-span-8 lg:col-span-4 flex flex-col gap-4 w-full">
              <p>Continue with Professional Template</p>

              <TemplateButton className="w-full h-full bg-[url('/svgs/professional-template.svg')]  ">
                <PayButton title="GHS 50" variant="blue" />

                <p className="w-full text-right mt-20">View Sample</p>
              </TemplateButton>
            </div>
          </div>
        </div>
      </Root>
    </>
  );
}

const TemplateButton = styled("button", {
  paddingInline: "1rem",
  paddingBlock: "1rem",
  aspectRatio: "511/541",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1rem",
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: "16px",

  "&:hover": {
    backgroundColor: "#45808b17",
  },
});

const Root = styled("div", {
  ".feature-header": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "54px",
  },
  ".tick": {
    boxShadow: "0px 24px 48px -12px rgba(0, 0, 0, 0.18)",
  },
});
