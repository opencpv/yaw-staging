"use client";
import CaInstagram from "@/components/__shared/ui/icons/CaInstagram";
import CaTwitter from "@/components/__shared/ui/icons/CaTwitter";
import CaWhatsappBusiness from "@/components/__shared/ui/icons/CaWhatsappBusiness";
import Link from "next/link";
import CaFacebook from "@/components/__shared/ui/icons/CaFacebook";
import quickLinks from "@/enum/footer/quickLinks";
import { getCurrentYear } from "@/lib/utils/numberManipulation";
import Logo from "@/components/__shared/ui/Logo";
import SubscribeForm from "../SubscribeForm";
import Feedback from "@/components/__shared/ui/feedback/Feedback";
import { LowerCase } from "@/lib/utils/stringManipulation";
import legal from "@/enum/about/legal";
import ReportFraud from "@/components/__shared/ui/links/ReportFraud";
import HowToLink from "@/components/__shared/ui/links/HowToLink";
import { FaEnvelope } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { socialLinks } from "@/enum/links/socials";
import { useQuery } from "@tanstack/react-query";
import { v4 as uuid } from "uuid";
import { pacifico } from "@/lib/utils/fonts";

const Footer = () => {
  const { onOpen } = useToastDisclosure();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle logic
    onOpen("Congratulations, you are in the loop!", "success");
  };

  const { data } = useQuery({
    queryKey: ["feedback", "global"],
    queryFn: async () => {
      const res = await fetch("/api/global/feedback");

      if (!res.ok) {
        throw new Error("Failed to fetch feedback");
      }

      const data = await res.json();

      return data;
    },
  });

  return (
    <footer
      className={`gap no-print mt-16 flex w-full flex-col gap-[min(10vh,10rem)] bg-[#131B1A] font-montserrat sm:mt-20`}
      key={uuid()}
      id="footer"
    >
      <div className="flex flex-col justify-center gap-10 bg-[#333] px-5 py-8 text-[#8A8A8A] hover:*:text-accent [@media(min-width:950px)]:flex-row">
        {quickLinks.map((r) =>
          LowerCase(r.label) === "report fraud" ? (
            <ReportFraud key={r?.label} className="font-[400]" />
          ) : LowerCase(r.label) === "how to" ? (
            <HowToLink key={r?.label} className="font-[400]" />
          ) : LowerCase(r?.label) === "feedback" ? (
            <Feedback data={data} key={r?.label}>
              <button className="text-2xl">Feedback</button>
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
            "max-w-[1077px] text-[32px] font-[500] leading-normal xl:text-[48px] 2xl:tracking-[-1.92px]"
          }
        >
          Sign up to get the{" "}
          <strong className={"font-medium text-accent"}>latest</strong>&nbsp;
          deals, info and insights on{" "}
          <strong className={"font-medium text-accent"}>
            renting in Ghana
          </strong>
          . We don&apos;t spam. We simply share quality{" "}
          <strong className={"font-medium text-accent"}>advice for free</strong>
          .
        </p>
        <SubscribeForm onSubmit={handleSubmit} />
      </div>

      <div className="mt-10 flex flex-col items-center gap-10 pb-14 text-[32px] text-[#fff] ">
        <h2 className="font-bold">
          Get{" "}
          <span className={`font-pacifico ${pacifico.className}`}>social</span>{" "}
          with us:
        </h2>

        <div className="flex items-center gap-4 md:gap-8">
          {socialLinks.coloured.map((link) => (
            <Link key={link.name} href={link.href} passHref>
              <button className="w-[30px] duration-1000 hover:rotate-[360deg] xsm:w-[60px] sm:w-[120px]">
                {link.icon}
              </button>
            </Link>
          ))}

          {/* COMMENTED OUT FOR NOW!!! PLEASE DO NOT REMOVE */}
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
              | {legal.copyrightNotice}
              <span> | </span>
              <Link
                href="/terms-of-service"
                className="inline-block text-[#B0B0B0] hover:text-accent hover:underline"
              >
                Legal
              </Link>
            </span>
          </div>
        </div>
        <div
          className={
            "order-1 flex flex-row flex-wrap gap-4 text-white min-[1110px]:order-2"
          }
        >
          <div className={"flex flex-row items-center gap-2 truncate"}>
            <FaEnvelope className="text-accent-50" size={24} />
            <span title={legal.email}>{legal.email}</span>
          </div>
          <div className={"flex flex-row items-center gap-2"}>
            <MdLocalPhone className="text-accent-50" size={24} />
            <span>{legal.telephone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
