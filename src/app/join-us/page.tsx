import Image from "next/image";
import JoinUsButtons from "./components/JoinUsButtons";
import styles from "./index.module.css";
import Link from "next/link";
import Footer from "@/components/__shared/ui/footer/Footer";
import Navbar from "@/components/__shared/ui/Navbar";

const JoinUsPage = async () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full  flex-col items-center justify-center ">
        <div
          className={`flex h-[405px] w-full shrink-0 flex-col items-center  justify-center gap-6  lg:h-[656px]
               ${styles.header} !bg-cover !bg-no-repeat `}
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-[1.5625rem] font-semibold capitalize text-white lg:text-[3.0625rem]">
              Work with us
            </p>
            <p className="max-w-[20.624rem] text-center text-[0.8125rem] font-semibold text-white lg:max-w-[24.9375rem] lg:text-[1rem]">
              Lorem ipsum dolor sit amet consectetur. Eget suscipit condimentum
              at mauris ridiculus laoreet.
            </p>
          </div>{" "}
          <div className="flex w-full items-center justify-center gap-4 px-2 ">
            <Link
              href={"/join-us/open-positions"}
              className="flex w-full justify-end"
            >
              <JoinUsButtons variant="filled-green" content="Open Positions" />
            </Link>{" "}
            <Link
              href={"/join-us/open-positions/resume-bank"}
              className="w-full"
            >
              <JoinUsButtons variant="outline-green" content="Resume Bank" />
            </Link>{" "}
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 items-start  justify-center gap-8 px-5 lg:px-14 pt-10 lg:mt-24 2xl:px-7 max-w-[1728px] ">
          <p className="col-span-2 w-fit border-b-4 border-[#DDB771] pb-2 text-[1.5625rem] font-semibold capitalize text-[#333] lg:hidden lg:text-[3.0625rem]">
            What we do
          </p>
          <div className="relative col-span-2  mt-5  aspect-[403/283] w-full max-w-[770px] overflow-hidden rounded-xl lg:col-span-1 lg:mt-0 lg:aspect-[770/936]">
            <Image
              src={"/assets/images/joinus/house.jpeg"}
              alt="Join us House"
              fill
              objectFit="cover"
            />
          </div>{" "}
          <div className="col-span-2 mt-2 flex flex-col gap-7 lg:col-span-1 lg:mt-0">
            <p className="hidden w-fit border-b-4 border-[#DDB771] pb-5 text-[3.0625rem] font-semibold capitalize text-[#333] lg:flex">
              What we do
            </p>
            <div className="flex flex-col gap-5 font-semibold leading-[1.45rem] tracking-[0.01rem] text-shade-300">
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
};

export default JoinUsPage;
