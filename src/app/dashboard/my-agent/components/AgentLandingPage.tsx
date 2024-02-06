import Image from "next/image";
import AgentButtons from "./Button";
import CaRelume from "./icons/CaRelume";
import CaAgentTick from "./icons/CaAgentTick";
import BeMyAgentModal from "@/app/components/be-my-agent-form";
import { ClientOnly } from "@/components/ui/ClientOnly";
import { useAssets } from "@/lib/custom-hooks/useAssets";

export default function AgentLandingPage() {
  const { images } = useAssets();

  return (
    <div>
      <div className="mx-auto flex max-w-screen-3xl flex-col gap-10 px-5 sm:px-10 lg:gap-24">
        <div className="relative flex h-fit w-full items-center justify-center rounded-3xl bg-transparent bg-[length:600px_400px] bg-right bg-no-repeat pt-5 lg:bg-[#E6F6EE] lg:bg-[url('/assets/images/dashboard/my-agent-shapes.png')] lg:p-10">
          <div className="flex w-full flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="space-y-8">
              <AgentButtons variant={"agent"} content="Agent Services" />
              <div className="max-w-xl space-y-7">
                <h2 className="text-4xl font-extrabold text-[#333333]">
                  Let RentRightGh take it from here
                </h2>
                <p className="text-shade-200">
                  Lorem ipsum dolor sit amet consectetur. Mollis id enim turpis
                  egestas ut urna posuere. Nec elementum placerat in mauris. Dui
                  convallis dolor ante quisque porta eget leo hendrerit purus.
                  Diam lorem faucibus tortor arcu at.
                </p>
                <div className="flex w-full gap-5">
                  <div className="w-full-">
                    <ClientOnly>
                      <BeMyAgentModal />
                    </ClientOnly>
                  </div>{" "}
                  <div className="w-full">
                    {" "}
                    <AgentButtons content="Learn More" variant={"learn-more"} />
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={images.BusinessPersonWithHouseKeys}
              alt="person holding mini house"
              width={350}
              className="bg-[url('/assets/images/dashboard/my-agent-shapes.png')] bg-cover bg-right bg-no-repeat lg:bg-none"
            />
          </div>
        </div>

        {/* How it works */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-20 px-4">
          <div className="col-span-2 hidden h-full items-center justify-center border lg:col-span-1 lg:flex">
            <Image
              src={"/assets/images/agent-process1.png"}
              width={550}
              height={550}
              alt="No saved search"
            />
          </div>
          <div className="col-span-2 mt-20 flex max-w-2xl flex-col items-center justify-center gap-[3rem] lg:col-span-1 lg:mt-0">
            <div className="flex flex-col">
              <AgentButtons variant={"how-it-works"} content="How it works" />
              <h2 className="mt-6 text-4xl font-extrabold leading-tight">
                Lorem ipsum dolor sit amet consectetur. Egestas tempor eget quam
                justo neque.
              </h2>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
            </div>
            <div className="flex w-full flex-col items-start gap-12">
              <Subheading />
              <Subheading />
              <Subheading />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="relative mt-40 grid
         w-full grid-cols-3 items-start
        justify-center gap-5 gap-x-5 bg-[url('/assets/images/agent-footer-mobile.svg')] bg-cover bg-no-repeat py-10 lg:mt-80 lg:bg-[url('/assets/images/agent-footer.svg')] lg:py-0 xl:px-14 2xl:px-24"
      >
        <div className="relative left-[20px] col-span-2 aspect-[543/579] w-full max-w-[70%] overflow-hidden rounded-2xl  lg:bottom-[100px] lg:left-0 lg:col-span-1 lg:max-w-[543px] ">
          <Image
            src={"/assets/images/agent-footer2.png"}
            fill
            alt="No saved search"
          />
        </div>
        <div className="col-span-3 flex h-full w-full flex-col justify-center px-4 lg:col-span-2 lg:items-end">
          <div className="flex flex-col gap-1 text-[#eee] ">
            <p className="text-[1.5625rem] font-bold lg:text-[2.4375rem]">
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
  );
}

const Subheading = () => {
  return (
    <div className="flex flex-col gap-4 pr-5">
      <div className="flex items-center gap-4">
        <CaRelume />
        <p className="text-[1.25rem] font-semibold">Subheading one</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <CaAgentTick />
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
        </div>
        <div className="flex items-center gap-2">
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
