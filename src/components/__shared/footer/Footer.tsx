"use client";
import CaInstagram from "@/app/components/icons/CaInstagram";
import CaStarRainbow from "@/app/components/icons/CaStarRainbow";
import CaTwitter from "@/app/components/icons/CaTwitter";
import CaWhatsappBusiness from "@/app/components/icons/CaWhatsappBusiness";
import Link from "next/link";
import CaFacebook from "@/app/components/icons/CaFacebook";
import quickLinks from "@/enum/footer/quickLinks";
import { getCurrentYear } from "@/lib/utils/numberManipulation";
import Logo from "@/components/__shared/Logo";
import SubscribeForm from "../ui/SubscribeForm";
import style from "./Style.module.css";
import Feedback from "@/components/feedback/Feedback";
import { LowerCase } from "@/lib/utils/stringManipulation";
import legal from "@/enum/about/legal";
import ReportLink from "@/components/__shared/ReportLink";
import HowToLink from "@/components/__shared/HowToLink";
import { FaEnvelope } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className={`gap no-print flex w-full flex-col gap-[min(10vh,10rem)] bg-[#131B1A] font-montserrat`}
    >
      <div className="flex flex-col justify-center gap-10 bg-[#333] px-5 py-8 text-[#8A8A8A] [@media(min-width:950px)]:flex-row">
        {quickLinks.map((r) =>
          LowerCase(r.label) === "report fraud" ? (
            <ReportLink key={r?.label} className="font-[400]" />
          ) : LowerCase(r.label) === "how to" ? (
            <HowToLink key={r?.label} className="font-[400]" />
          ) : (
            <Link key={r?.label} href={r?.href}>
              <h2 className="font-[400]">{r.label}</h2>
            </Link>
          ),
        )}
      </div>

      <div className="w-fit px-8">
        <Logo size="lg" />
      </div>
      <div className="mx-auto flex flex-col items-center gap-10 px-6 text-[#fff] lg:w-8/12">
        <p
          className={
            "max-w-[1077px] text-[32px] font-[500] xl:text-[48px] 2xl:tracking-[-1.92px]"
          }
        >
          Sign up to get the{" "}
          <strong className={"font-medium text-[#DDB771]"}>latest</strong>&nbsp;
          deals, info and insights on{" "}
          <strong className={"font-medium text-[#DDB771]"}>
            renting in Ghana
          </strong>
          . We don&apos;t spam. We simply share quality{" "}
          <strong className={"font-medium text-[#DDB771]"}>
            advice for free
          </strong>
          .
        </p>
        <SubscribeForm />
      </div>

      <div className="mt-10 flex flex-col items-center gap-10 pb-14 text-[32px] text-[#fff] ">
        <h2 className="font-bold">Connect with us:</h2>

        <div className="flex w-4/5 items-center gap-4 md:w-2/5 md:gap-8">
          <Link href="https://instagram.com/ca.rr" passHref>
            <button className="w-full duration-1000 hover:rotate-[360deg]">
              <CaInstagram width={"100%"} height={"100%"} />
            </button>
          </Link>
          <Link href="https://twitter.com/ca_rr" passHref>
            <button className="w-full duration-1000 hover:rotate-[360deg]">
              <CaTwitter width={"100%"} height={"100%"} />
            </button>
          </Link>

          <Link href="https://facebook.com/rr" passHref>
            <button className="w-full duration-1000 hover:rotate-[360deg]">
              <CaFacebook width={"100%"} height={"100%"} />
            </button>
          </Link>

          <Link href="https://wa.me/233245678910" passHref>
            <button className="w-full duration-1000 hover:rotate-[360deg]">
              <CaWhatsappBusiness width={"100%"} height={"100%"} />
            </button>
          </Link>

          {/* COMMENTED OUT FOR NOW!!! PLEASE REMOVE */}
          {/* <button className="w-full duration-1000 hover:rotate-[360deg]">
            <CaStarRainbow width={"100%"} height={"100%"} />
          </button> */}
          {/* <Link href="https://youtube.com/c/rr" passHref>
            <button className="w-full aspect-square duration-1000 hover:rotate-[360deg]">
            </button>
          </Link> */}
        </div>
      </div>
      <div className="mb-10 flex w-full flex-col gap-10 bg-transparent px-8 text-xl min-[1110px]:mx-auto min-[1110px]:flex-row min-[1110px]:items-center min-[1110px]:justify-between">
        <div
          className={
            "order-2 flex flex-row flex-wrap gap-x-1 gap-y-4 min-[1110px]:order-1"
          }
        >
          <div className="flex flex-wrap gap-x-2 gap-y-4 text-[#B0B0B0]">
            <span>
              Copyright &copy; {getCurrentYear()} {legal.companyName}
            </span>
            <span>
              | {legal.copyrightNotice}{" "}
              <Link href="/legal" className="inline-block text-[#B0B0B0]">
                | Legal
              </Link>
            </span>
          </div>
        </div>
        <div
          className={
            "order-1 flex flex-row flex-wrap gap-4 min-[1110px]:order-2"
          }
        >
          <div className={"flex flex-row items-center gap-2 truncate"}>
            <FaEnvelope className="text-accent-50" size={24} />
            <Link
              href={`mailto:${legal.email}`}
              title={legal.email}
              className="text-[#ffff]"
            >
              {legal.email}
            </Link>
          </div>
          <div className={"flex flex-row items-center gap-2"}>
            <MdLocalPhone className="text-accent-50" size={24} />
            <Link
              href={`tel:${legal.telephoneFormatted}`}
              className="text-[#ffff]"
            >
              {legal.telephone}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
