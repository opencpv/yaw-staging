import Image from "next/image";
import AgentButtons from "./Button";
import styles from "../index.module.css";
import CaRelume from "./icons/CaRelume";
import CaAgentTick from "./icons/CaAgentTick";
import BeMyAgentModal from "@/app/components/be-my-agent-form";

export default function AgentLandingPage() {
  return (
    <div className="flex flex-col justify-center items-center max-w-[1668px] gap-8 ">
      <div className="flex flex-col gap-10 lg:gap-24 ">
        <div className="relative w-full max-w-[1668px] lg:aspect-[527/380] lg:bg-[url('/svgs/be-my-agent.svg')]  bg-no-repeat bg-cover bg-right flex flex-col gap-8 justify-center  px-4 py-4 max-h-[667px]">
          <AgentButtons variant={"agent"} content="Agent Services" />
          <div className="flex flex-col max-w-[685px]">
            <p className="text-[1.9375rem] lg:text-[2.4375rem] font-bold">
              Let RentRightGh take it from here
            </p>
            <p className="text-shade-200">
              Lorem ipsum dolor sit amet consectetur. Mollis id enim turpis
              egestas ut urna posuere. Nec elementum placerat in mauris. Dui
              convallis dolor ante quisque porta eget leo hendrerit purus. Diam
              lorem faucibus tortor arcu at.
            </p>
          </div>
          <div className="flex gap-5 w-full">
            <div className="w-full-">
              <BeMyAgentModal />
            </div>{" "}
            <div className="w-full">
              {" "}
              <AgentButtons content="Learn More" variant={"learn-more"} />
            </div>
          </div>
        </div>
        <div className="lg:hidden w-full h-[470px]">
          <div className="relative w-full h-full max-h-[470px] ">
            <Image
              src={"/assets/images/agent-man-mobile.png"}
              fill
              alt="No saved search"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-12 min-h-[40vh] px-4">
          <div className="col-span-2 lg:col-span-1 items-center hidden lg:flex">
            <div className="relative w-full aspect-[825/759] ">
              <Image
                src={"/assets/images/agent-process1.png"}
                fill
                alt="No saved search"
              />
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 flex items-center flex-col justify-center gap-[3rem]">
            <div className="flex flex-col">
              <AgentButtons variant={"how-it-works"} content="How it works" />
              <p className="text-[1.5625rem] lg:text-[2.4375rem] font-bold mt-5">
                Lorem ipsum dolor sit amet consectetur. Egestas tempor eget quam
                justo neque.
              </p>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
            </div>
            <div className="flex flex-col gap-12 items-start w-full">
              <Subheading />
              <Subheading />
              <Subheading />
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-[1728/597] bg-[url('/assets/images/agent-footer-mobile.svg')]  
         lg:bg-[url('/assets/images/agent-footer.svg')]  
        bg-no-repeat bg-cover  items-start justify-center gap-5 mt-10 lg:mt-[150px] grid grid-cols-3 xl:px-14 2xl:px-24 gap-x-5 py-10 lg:py-0">
          <div className="col-span-2 lg:col-span-1 relative w-full aspect-[543/579] lg:max-w-[543px] rounded-2xl overflow-hidden  left-[20px] lg:left-0 lg:bottom-[100px] max-w-[70%] ">
            <Image
              src={"/assets/images/agent-footer2.png"}
              fill
              alt="No saved search"
            />
          </div>
          <div className="col-span-3 lg:col-span-2 w-full flex flex-col lg:items-end justify-center h-full px-4">
            <div className="flex flex-col gap-1 text-[#eee] ">
              <p className="text-[1.5625rem] lg:text-[2.4375rem] font-bold">
                Get started by letting us be your No 1 Agent
              </p>
              <p>Get your dream home now !!</p>
              <div className="mt-5">
                {" "}
                <AgentButtons
                  content="Get Started"
                  variant={"green-fade-light"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Subheading = () => {
  return (
    <div className="flex flex-col gap-4 pr-5">
      <div className="flex gap-4 items-center">
        <CaRelume />
        <p className="text-[1.25rem] font-semibold">Subheading one</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <CaAgentTick />
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <CaAgentTick />
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
        </div>
      </div>
    </div>
  );
};
