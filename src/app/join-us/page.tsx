import Image from "next/image";
import styles from "./index.module.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { LinkButton } from "@/components/__shared/ui/button";
const Footer = dynamic(() => import("@/components/__shared/ui/footer"));
const ScrollTopAndSocial = dynamic(
  () => import("@/components/__shared/ui/scroll-top/scroll-top-and-social"),
);

export const metadata: Metadata = {
  title: "Join Us",
  description: "", // tentative
};

const JoinUsPage = async () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center">
        <div
          className={`flex h-[405px] w-full shrink-0 flex-col items-center justify-center gap-6 px-5 lg:h-[656px] ${styles.header} !bg-cover !bg-no-repeat`}
        >
          <div className="flex flex-col items-center justify-center gap-4 max-sm:mt-10">
            <h1
              className="fade-in-top text-3xl font-semibold capitalize text-white lg:text-5xl"
              style={{ animationDelay: "0.2s" }}
            >
              Work with us
            </h1>
            <h5 className="fade-in-bottom-slight max-w-xs text-center text-shade sm:max-w-sm">
              Explore exciting opportunities to join our team and make a
              meaningful impact.
            </h5>
          </div>{" "}
          <div className="flex w-full flex-wrap items-center justify-center gap-4 px-2">
            <LinkButton
              href="/join-us/open-positions"
              className="fade-in-bottom bg-secondary-400"
              style={{ animationDelay: "0.5s" }}
            >
              Open Positions
            </LinkButton>
            <LinkButton
              variant={"outline"}
              href="/join-us/open-positions/resume-bank"
              className="fade-in-bottom border-secondary-400 text-secondary-400"
              style={{ animationDelay: "1s" }}
            >
              Resume Bank
            </LinkButton>
          </div>
        </div>
        <div className="mt-5 grid max-w-[1728px] grid-cols-2 items-start justify-center gap-16 px-5 pt-10 lg:mt-24 lg:px-14 2xl:px-7">
          <h2 className="col-span-2 w-fit border-b-4 border-accent pb-2 capitalize text-[#333] lg:hidden">
            What we do
          </h2>
          <div className="relative col-span-2 mt-0 aspect-[403/283] w-full max-w-[770px] overflow-hidden rounded-xl lg:col-span-1 lg:aspect-[770/936]">
            <Image
              src={"/assets/images/joinus/house.jpeg"}
              alt="Join us House"
              fill
              objectFit="cover"
            />
          </div>{" "}
          <div className="col-span-2 mt-2 flex flex-col gap-7 lg:col-span-1 lg:mt-0">
            <h2 className="hidden w-fit border-b-4 border-accent pb-4 font-semibold capitalize text-[#333] lg:flex">
              What we do
            </h2>
            <div className="flex flex-col gap-5 leading-[1.45rem] tracking-[0.01rem] text-shade-300">
              <p className="">
                Lorem ipsum dolor sit amet consectetur. Amet scelerisque egestas
                nisi faucibus risus interdum nulla sed tortor. Morbi dictum
                aliquet nunc vulputate egestas quam faucibus ullamcorper sem. In
                aliquet erat mauris egestas convallis. Sociis id odio augue eu
                tortor in diam sit. Eget vestibulum semper sed at in tristique.
                Consequat nisl vitae sagittis vivamus quis. Turpis turpis dui
                duis cursus proin. Ut mi iaculis turpis in leo aliquet nisl nam
                quis. Mi ipsum faucibus neque luctus facilisis sagittis cursus
                non. Mi metus rhoncus pellentesque sit nisi sed quam. Risus mi
                velit blandit pharetra nisl augue nulla. Phasellus amet
                facilisis elit ipsum aliquam.
              </p>
              <p>
                {" "}
                Lorem mattis dictumst sapien ornare tristique pellentesque ut
                arcu suspendisse. Sagittis et lectus elit donec eget. Lacus
                purus et lorem curabitur auctor imperdiet. Pulvinar lacus diam
                enim rutrum condimentum consectetur nunc tellus. Urna quis
                facilisis posuere vehicula egestas arcu lectus rhoncus felis.
                Senectus facilisis nisl consequat sed ut eleifend sed aliquet
                tempus. Consequat eget arcu elit risus ipsum ac luctus. Est
                scelerisque scelerisque volutpat bibendum. Est sit vulputate
                condimentum placerat dictum. Egestas leo mi nunc enim vulputate
                diam egestas pharetra elementum. Cras mollis amet tortor tortor
                interdum pharetra. Proin aliquet eros id lobortis libero
                curabitur integer feugiat nisl.
              </p>
            </div>
          </div>
        </div>
        <ScrollTopAndSocial />
        <Footer />
      </div>
    </div>
  );
};

export default JoinUsPage;
