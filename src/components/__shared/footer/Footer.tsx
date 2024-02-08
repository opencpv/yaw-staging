"use client";
import CaInstagram from "@/app/components/icons/CaInstagram";
import CaStarRainbow from "@/app/components/icons/CaStarRainbow";
import CaTwitter from "@/app/components/icons/CaTwitter";
import CaWhatsappBusiness from "@/app/components/icons/CaWhatsappBusiness";
import Link from "next/link";
import CaFacebook from "@/app/components/icons/CaFacebook";
import { montserat } from "@/styles/font";
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

const Footer = () => {
  return (
    <footer
      className={`gap no-print flex w-full flex-col gap-[min(10vh,10rem)] bg-[#131B1A] ${montserat.className} font-montserrat`}
    >
      <div className="flex flex-col justify-center gap-10 bg-[#333] px-5 py-8 text-[#8A8A8A] md:flex-row">
        {quickLinks.map((r) =>
          LowerCase(r.label) === "report fraud" ? (
            <ReportLink key={r?.label} className="font-[400]" />
          ) : LowerCase(r.label) === "how to" ? (
            <HowToLink key={r?.label} className="font-[400]" />
          ) : LowerCase(r?.label) === "feedback" ? (
            <Feedback key={r?.label}>
              <h2 className="font-[400]">Feedback</h2>
            </Feedback>
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
          <button className="w-full duration-1000 hover:rotate-[360deg]">
            <CaInstagram width={"100%"} height={"100%"} />
          </button>
          <button className="w-full duration-1000 hover:rotate-[360deg]">
            <CaTwitter width={"100%"} height={"100%"} />
          </button>

          <button className="w-full duration-1000 hover:rotate-[360deg]">
            <CaFacebook width={"100%"} height={"100%"} />
          </button>

          <button className="w-full duration-1000 hover:rotate-[360deg]">
            <CaWhatsappBusiness width={"100%"} height={"100%"} />
          </button>

          <button className="w-full duration-1000 hover:rotate-[360deg]">
            <CaStarRainbow width={"100%"} height={"100%"} />
          </button>
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
          <div className={"flex flex-row items-center gap-1 truncate"}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M7.33269 36.6654C6.32435 36.6654 5.46085 36.306 4.74219 35.5874C4.02352 34.8687 3.6648 34.0058 3.66602 32.9987V10.9987C3.66602 9.99037 4.02535 9.12687 4.74402 8.4082C5.46269 7.68953 6.32557 7.33081 7.33269 7.33203H36.666C37.6744 7.33203 38.5378 7.69137 39.2565 8.41003C39.9752 9.1287 40.3339 9.99159 40.3327 10.9987V32.9987C40.3327 34.007 39.9734 34.8705 39.2547 35.5892C38.536 36.3079 37.6731 36.6666 36.666 36.6654H7.33269ZM21.9994 23.832L36.666 14.6654V10.9987L21.9994 20.1654L7.33269 10.9987V14.6654L21.9994 23.832Z"
                fill="#0B6E4F"
              />
            </svg>
            <Link
              href={`mailto:${legal.email}`}
              title={legal.email}
              className="text-[#ffff]"
            >
              {legal.email}
            </Link>
          </div>
          <div className={"flex flex-row items-center gap-1"}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.575 38.5C32.6333 38.5 28.7913 37.6212 25.0488 35.8637C21.3064 34.1061 17.9911 31.7839 15.103 28.897C12.2149 26.0101 9.89267 22.6948 8.13633 18.9512C6.38 15.2075 5.50122 11.3654 5.5 7.425C5.5 6.875 5.68333 6.41667 6.05 6.05C6.41667 5.68333 6.875 5.5 7.425 5.5H14.85C15.2778 5.5 15.6597 5.6375 15.9958 5.9125C16.3319 6.1875 16.5306 6.53889 16.5917 6.96667L17.7833 13.3833C17.8444 13.8111 17.8365 14.201 17.7595 14.553C17.6825 14.905 17.5071 15.2179 17.2333 15.4917L12.8333 19.9833C14.1167 22.1833 15.7208 24.2458 17.6458 26.1708C19.5708 28.0958 21.6944 29.7611 24.0167 31.1667L28.325 26.8583C28.6 26.5833 28.9593 26.3774 29.403 26.2405C29.8467 26.1036 30.2818 26.0651 30.7083 26.125L37.0333 27.4083C37.4611 27.5 37.8125 27.7066 38.0875 28.028C38.3625 28.3494 38.5 28.7234 38.5 29.15V36.575C38.5 37.125 38.3167 37.5833 37.95 37.95C37.5833 38.3167 37.125 38.5 36.575 38.5Z"
                fill="#0B6E4F"
              />
            </svg>
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
