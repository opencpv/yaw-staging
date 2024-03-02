import styles from "../../index.module.css";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Button from "@/components/__shared/ui/button/Button";
import { cn } from "@/lib/utils";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import { IoIosCloseCircle } from "react-icons/io";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import { firstToKnowStepsStore } from "@/store/dashboard/firstToKnowStepsStore";
import { useFormikContext } from "formik";

const Success = () => {
  const { images, icons } = useAssets();
  const { onOpen, setActiveSlide } = firstToKnowStepsStore();
  const { resetForm } = useFormikContext();

  const handleClose = () => {
    resetForm({});
    localStorage.removeItem("first-to-know-form");
    onOpen();
    setActiveSlide(0);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="relative ml-auto flex w-full justify-end 2xl:left-60">
        <Button
          variant="ghost"
          isIconOnly
          onClick={handleClose}
          className="cursor-pointer text-4xl text-red-500 xs:text-5xl"
        >
          <IoIosCloseCircle />
        </Button>
      </div>
      <AOSWrapper animation="zoom-in" duration="600">
        <Image src={icons.GreenCheck} alt="green check" width={70} />
      </AOSWrapper>
      <div className="space-y-1 text-center">
        <h3>Search criteria created successfully</h3>
        <p className="max-w-md text-shade-200">
          You will be notified if a listing that matches your targeted search
          gets posted to the site
        </p>
      </div>
      <Button
        href={`/dashboard/renter/overview`}
        className={cn(
          "h-[58px] rounded-lg bg-[#0B7371] font-semibold focus:outline-none xs:text-base sm:min-w-[22rem]",
        )}
      >
        Go to my Dashboard
      </Button>
      <Link href="/properties" className="text-[#0B7371]">
        Keep searching
      </Link>
      <Link href="/dashboard/renter/my-agent/agent-explore">
        <div className="flex flex-col items-center gap-10 rounded-xl bg-[#ECEEEC] p-6 pb-0 ssm:flex-row ssm:items-start ssm:pr-0">
          {/* #ECEEEC */}
          <div className="flex flex-col gap-5 pb-10 pt-8 max-ssm:items-center ssm:pt-14">
            <h3 className="max-ssm:text-center">
              Not finding what you&apos;re looking for?
            </h3>
            <p className="max-w-xs text-shade-300 max-ssm:text-center">
              Let the professionals at RentRight help you find an ideal home
            </p>
            <Button
              href="/dashboard/renter/my-agent/agent-explore"
              variant="outline"
              className="w-fit border border-[#0B7371] text-[#0B7371]"
            >
              Explore Now
              <IoChevronForwardOutline />
            </Button>
          </div>
          <Image
            src={images.BusinessPersonWithHouseKeys}
            alt="Business person with house keys"
            width={200}
            height={200}
            className="self-end"
          />
        </div>
      </Link>
    </div>
  );
};

export default Success;
