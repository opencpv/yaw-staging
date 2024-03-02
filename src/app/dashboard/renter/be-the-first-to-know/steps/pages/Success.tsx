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
  const { images } = useAssets();
  const { onOpen, setActiveSlide } = firstToKnowStepsStore();
  const { resetForm } = useFormikContext();

  const handleClose = () => {
    resetForm({});
    localStorage.removeItem("first-to-know-form");
    onOpen();
    setActiveSlide(0);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Button
        variant="ghost"
        isIconOnly
        className="absolute right-8 top-5 text-red-500"
        onClick={handleClose}
      >
        <IoIosCloseCircle size={24} />
      </Button>
      <AOSWrapper animation="zoom-in" duration="600">
        <FaCheck size={60} className="text-primary-800" />
      </AOSWrapper>
      <div className="space-y-1 text-center">
        <h3>Search criteria created successfully</h3>
        <p className="text-shade-200">
          You will be notified if a listing that matches your targeted search
          gets posted to the site
        </p>
      </div>
      <Button
        href={`/dashboard/renter/overview`}
        color="accent"
        className={cn(
          "h-[58px] rounded-lg font-semibold focus:outline-none xs:text-base sm:min-w-[16rem]",
        )}
      >
        Go to my Dashboard
      </Button>
      <Link href="/properties" className="text-accent-50">
        Keep searching
      </Link>
      <div className="flex flex-col items-center gap-10 rounded-xl bg-[#F9F9F8] p-6 ssm:flex-row ssm:items-start ssm:pb-0 ssm:pr-0">
        <div className="space-y-5 pt-8 ssm:pt-14">
          <h3>Not finding what you&apos;re looking for?</h3>
          <p className="text-shade-300">
            Get professional agents to help you find an ideal home{" "}
          </p>
          <Button variant="outline" color="accent">
            Explore Now
            <IoChevronForwardOutline />
          </Button>
        </div>
        <Image
          src={images.BusinessPersonWithHouseKeys}
          alt="Business person with house keys"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Success;
