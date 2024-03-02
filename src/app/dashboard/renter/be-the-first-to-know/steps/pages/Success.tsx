import styles from "../../index.module.css";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Button from "@/components/__shared/ui/button/Button";
import { cn } from "@/lib/utils";
import { FaCheck } from "react-icons/fa6";

const Success = () => {
  const { images } = useAssets();

  return (
    <div>
      <div className="">
        <FaCheck />
        <div className="">
          <h3>Search criteria created successfully</h3>
          <p className="text-shade-200">
            You will be notified if a listing that matches your targeted search
            gets posted to the site
          </p>
          F
        </div>
        <Button
          color={"primary"}
          className={cn(
            "h-[58px] rounded-lg font-semibold focus:outline-none xs:text-base sm:min-w-[16rem]",
          )}
        >
          Go to my Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Success;
