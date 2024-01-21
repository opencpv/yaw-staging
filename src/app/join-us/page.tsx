import Image from "next/image";
import JoinUsButtons from "./components/JoinUsButtons";
import styles from "./index.module.css";
import Link from "next/link";
import Footer from "@/components/__shared/footer/Footer";
import Navbar from "@/components/__shared/Navbar";

function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center max-w-[1728px] w-full">
        <div
          className={`flex items-center justify-center w-full max-w-[1728px] h-[405px] lg:h-[656px]  flex-col gap-6  shrink-0
               ${styles.header} !bg-cover !bg-no-repeat`}>
          <div className="flex flex-col gap-4 items-center justify-center">
            <p className="capitalize text-[1.5625rem] lg:text-[3.0625rem] text-white font-semibold">
              Work with us
            </p>
            <p className="text-white text-[0.8125rem] lg:text-[1rem] font-semibold max-w-[20.624rem] lg:max-w-[24.9375rem] text-center">
              Lorem ipsum dolor sit amet consectetur. Eget suscipit condimentum
              at mauris ridiculus laoreet.
            </p>
          </div>{" "}
          <div className="flex items-center justify-center gap-4 w-full px-2">
            <Link
              href={"/join-us/open-positions"}
              className="w-full flex justify-end">
              <JoinUsButtons variant="filled-green" content="Open Positions" />
            </Link>{" "}
            <Link
              href={"/join-us/open-positions/resume-bank"}
              className="w-full">
              <JoinUsButtons variant="outline-green" content="Resume Bank" />
            </Link>{" "}
          </div>
        </div>
        <div className="grid grid-cols-2 mt-5 lg:mt-24  pt-10 items-start justify-center gap-4 px-5 lg:px-7">
          <p className="col-span-2 lg:hidden capitalize text-[1.5625rem] lg:text-[3.0625rem] font-semibold text-[#333] border-b-4 border-[#DDB771] pb-2 w-fit">
            What we do
          </p>
          <div className="col-span-2 lg:col-span-1  relative  aspect-[403/283] lg:aspect-[770/936] w-full max-w-[770px] rounded-xl overflow-hidden mt-5 lg:mt-0">
            <Image
              src={"/assets/images/joinus/house.jpeg"}
              alt="Join us House"
              fill
              objectFit="cover"
            />
          </div>{" "}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-7 mt-2 lg:mt-0">
            <p className="hidden lg:flex capitalize text-[3.0625rem] font-semibold text-[#333] border-b-4 border-[#DDB771] pb-2 w-fit">
              What we do
            </p>
            <div className="flex flex-col gap-5 font-semibold leading-[1.45rem] text-shade-300 tracking-[0.01rem]">
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
        <div className="mt-24 w-full  pt-10">
          <Footer />
        </div>{" "}
      </div>
    </div>
  );
}

export default Page;
