import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import Button from "@/components/__shared/ui/button/Button";
import { cn } from "@/lib/utils";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { firstToKnowStepsStore } from "@/store/dashboard/firstToKnowStepsStore";
import { useFormikContext } from "formik";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import GreenCheckLottie from "@/components/__shared/lotties/GreenCheckLottie";

const Success = () => {
  const { images, icons } = useAssets();
  const { onClose, setActiveSlide, lastSlide } = firstToKnowStepsStore();
  const { resetForm } = useFormikContext();

  const successPageRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setTimeout(() => {
      resetForm({});
      localStorage.removeItem("first-to-know-form");
      setActiveSlide(0);
      onClose();
    }, 300);
  };

  useEffect(() => {
    // Hack for radixui dialogue pointer event issues
    if (successPageRef.current) {
      if (!lastSlide) {
        successPageRef.current.classList.add("pointer-events-none");
      } else {
        setTimeout(() => {
          successPageRef?.current?.classList.remove("pointer-events-none");
        }, 300);
      }
    }
  }, [lastSlide]);

  return (
    <div
      className="flex flex-col items-center justify-center gap-10"
      ref={successPageRef}
    >
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
      <GreenCheckLottie />
      <div className="space-y-1 text-center">
        <h3>Search criteria created successfully</h3>
        <p className="max-w-md text-shade-200">
          You will be notified if a listing that matches your dream place gets
          posted to the site
        </p>
      </div>
      <Button
        href={`/dashboard/renter/overview`}
        className={cn(
          "h-[58px] rounded-lg bg-[#0B7371] font-semibold focus:outline-none xs:text-base sm:min-w-[22rem]",
        )}
        onClick={handleClose}
      >
        Go to my Dashboard
      </Button>
      <Link href="/properties" className="text-[#0B7371]" onClick={handleClose}>
        Keep searching
      </Link>
      <Link
        href="/dashboard/renter/my-agent/agent-explore"
        onClick={handleClose}
      >
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
