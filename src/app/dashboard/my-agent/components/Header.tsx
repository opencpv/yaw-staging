import Image from "next/image";
import AgentButtons from "./Button";
import styles from "../index.module.css";
import CaRelume from "./icons/CaRelume";
import CaAgentTick from "./icons/CaAgentTick";
import BeMyAgentModal from "@/app/components/be-my-agent-form";


export default function AgentLandingPage() {
  return (
    <div className="flex flex-col justify-center items-center max-w-[1668px] gap-8">
  
      <div className="flex flex-col gap-24 ">
        <div className="relative w-full max-w-[1668px] aspect-[527/380] bg-[url('/svgs/be-my-agent.svg')]  bg-no-repeat bg-cover bg-right flex flex-col gap-8 justify-center  px-6 py-4 max-h-[667px]">
          <AgentButtons variant={"agent"} content="Agent Prices" />
          <div className="flex flex-col max-w-[685px]">
            <p className="text-[2.4375rem] font-bold">
              Let RentRightGh take it from here
            </p>
            <p className="text-shade-200">
              Lorem ipsum dolor sit amet consectetur. Mollis id enim turpis
              egestas ut urna posuere. Nec elementum placerat in mauris. Dui
              convallis dolor ante quisque porta eget leo hendrerit purus. Diam
              lorem faucibus tortor arcu at.
            </p>
          </div>
          <div className="flex gap-5">
            <BeMyAgentModal/>
            <AgentButtons content="Learn More" variant={"learn-more"} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-12 min-h-[40vh]">
          <div className="col-span-2 lg:col-span-1 flex items-center">
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
              <p className="text-[2.4375rem] font-bold mt-5">
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

        <div className="relative w-full aspect-[1728/597] bg-[url('/assets/images/agent-footer.svg')]  bg-no-repeat bg-cover  items-start justify-center gap-5 mt-[150px] grid grid-cols-3 xl:px-14 2xl:px-24 gap-x-5">
          <div className="relative w-full aspect-[543/579] max-w-[543px] rounded-2xl overflow-hidden bottom-[100px] ">
            <Image
              src={"/assets/images/agent-footer2.png"}
              fill
              alt="No saved search"
            />
          </div>
          <div className="col-span-2 w-full flex flex-col items-end justify-center h-full p">
            <div className="flex flex-col gap-1 text-[#eee] ">
              <p className="text-[2.4375rem] font-bold">
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
