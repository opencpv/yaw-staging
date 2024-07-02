import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import Button from "@/components/__shared/ui/button/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import { BTFTKStepsStore } from "@/store/dashboard/BTFTKStepsStore";
import { useFormikContext } from "formik";
import { useEffect, useRef } from "react";
import GreenCheckLottie from "@/components/__shared/lotties/GreenCheckLottie";
import CloseModalIcon from "@/components/__shared/ui/icons/CloseModalIcon";
import { useRouter } from "next/navigation";

const Success = () => {
  const { images } = useAssets();
  const { onClose, onCloseEditPage, setCriterion, setActiveSlide, lastSlide } =
    BTFTKStepsStore();
  const { resetForm } = useFormikContext();
  const router = useRouter();
  const successPageRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setTimeout(() => {
      resetForm({});
      setActiveSlide(0);
      onClose();
      onCloseEditPage();
      setCriterion(null);
      localStorage.removeItem("BTFTKSteps");
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
      <CloseModalIcon
        className="relative ml-auto flex justify-end 2xl:left-60"
        onClick={() => {
          handleClose();
          router.push("/dashboard/renter/be-the-first-to-know");
        }}
      />
      <GreenCheckLottie />
      <div className="space-y-1 text-center">
        <h3>Search criteria created successfully.</h3>
        <p className="max-w-md text-base text-shade-200">
          You will be notified if a listing that matches your dream place gets
          posted to the site
        </p>
      </div>
      <Button
        href={`/dashboard/renter/overview`}
        className={cn(
          "h-[58px] rounded-lg bg-[#0B7371] font-semibold focus:outline-none xs:text-base sm:min-w-[22rem]",
        )}
        onClick={() => {
          handleClose();
          router.push("/dashboard/renter/overview");
        }}
      >
        Go to my Dashboard
      </Button>
      <Link
        href="/dashboard/renter/be-the-first-to-know/manage-criteria"
        className="text-[#0B7371]"
        onClick={() => {
          handleClose();
          router.push("/dashboard/renter/be-the-first-to-know/manage-criteria");
        }}
      >
        I want to create another search criteria
      </Link>
      <Link
        href="/dashboard/renter/my-agent/agent-explore"
        onClick={handleClose}
      >
        <div className="flex flex-col gap-10 rounded-xl bg-gradient-to-r from-[#0B7371] to-[#A5CACD] p-6 pb-0 text-white max-ssm:items-center ssm:flex-row ssm:items-start ssm:pr-0">
          <div className="flex flex-col gap-5 pb-10 pt-8  max-ssm:items-center">
            <h3 className="max-ssm:text-center">
              Not finding what you&apos;re looking for?
            </h3>
            <p className="max-w-xs text-base max-ssm:text-center">
              Let the professionals at RentRight help you find an ideal home
            </p>
            <Button
              color="white"
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
