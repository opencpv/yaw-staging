"use client";
import Image from "next/image";
import AgentButtons from "../Button";
import CaRelume from "../icons/CaRelume";
import CaAgentTick from "../icons/CaAgentTick";
import BeMyAgentModal from "@/app/dashboard/renter/my-agent/components/steps/BeMyAgentModal";
import { ClientOnly } from "@/components/__shared/hoc/ClientOnly";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import style from "../../index.module.css";
import React from "react";
import LearnMoreYoutubeBtn from "../LearnMoreYoutubeBtn";
import { fadeIn } from "@/lib/animations";
import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";

export default function AgentExplorePage() {
  const { images } = useAssets();

  return (
    <main className="mt-8">
      <div className="relative mx-auto max-w-screen-3xl px-5 sm:px-10">
        <section className="fade-in-bottom relative flex h-fit w-full items-center justify-center rounded-3xl bg-transparent bg-[length:600px_400px] bg-right bg-no-repeat pt-5 max-lg:pb-0 lg:bg-[#E6F6EE] lg:bg-[url('/assets/images/dashboard/my-agent-shapes.png')] lg:p-10">
          <div className="flex w-full flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="space-y-8">
              <AgentButtons variant={"agent"} content="Agent Services" />
              <div className="max-w-xl space-y-7">
                <h2 className="font-bold text-shade-300 sm:text-3xl">
                  Let RentRightGh take it from here
                </h2>
                <p className="text-shade-200">
                  Lorem ipsum dolor sit amet consectetur. Mollis id enim turpis
                  egestas ut urna posuere. Nec elementum placerat in mauris. Dui
                  convallis dolor ante quisque porta eget leo hendrerit purus.
                  Diam lorem faucibus tortor arcu at.
                </p>
                <div className="flex w-full flex-wrap items-center gap-3">
                  <ClientOnly>
                    <BeMyAgentModal button="Hire Us Now" />
                  </ClientOnly>
                  <LearnMoreYoutubeBtn />
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
        </section>
        {/* How it works */}
        <section className="section grid grid-cols-2 gap-x-12 gap-y-16 px-4">
          <div className="col-span-2 hidden h-full items-center justify-center lg:col-span-1 lg:flex">
            <Image
              src={"/assets/images/agent-process1.png"}
              width={550}
              height={550}
              alt="No saved search"
            />
          </div>
          <div className="col-span-2 mt-12 flex max-w-2xl flex-col items-center justify-center gap-[3rem] lg:col-span-1 lg:mt-0">
            <div className="flex flex-col">
              <AgentButtons variant={"how-it-works"} content="How it works" />
              <h2 className="mt-6 font-bold sm:text-3xl">
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
        </section>
      </div>

      {/* Footer */}
      <footer
        className={`relative mt-28 flex w-full items-start justify-center gap-5 xl:px-14 2xl:px-24 ${style.myAgentExploreFooter}`}
      >
        <div className="gap relative z-10 flex w-full flex-col justify-center gap-x-24 gap-y-8 px-5 sm:px-10 lg:flex-row lg:items-center lg:pb-24">
          <FramerWrapper {...fadeIn}>
            <Image
              src={"/assets/images/agent-footer2.png"}
              alt="house with a lot of plant"
              width={300}
              height={300}
              className="relative sm:w-[400px]"
            />
          </FramerWrapper>
          <div className="flex flex-col gap-6 py-10 text-[#eee] lg:mt-20">
            <h2 className="font-bold sm:text-3xl">
              Get started by letting us be your No 1 Agent
            </h2>
            <p>Get your dream home now !!</p>
            <div>
              <ClientOnly>
                <BeMyAgentModal button="Get Started" />
              </ClientOnly>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

const Subheading = () => {
  return (
    <section className="flex flex-col gap-4 pr-5">
      <div className="flex items-center gap-4">
        <CaRelume />
        <h3>Subheading one</h3>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <CaAgentTick />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <CaAgentTick />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
        </div>
      </div>
    </section>
  );
};
