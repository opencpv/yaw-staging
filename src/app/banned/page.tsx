"use client";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { Button } from "@/components/__shared/ui/button";
import CaCallIconn from "./icons/CaCallIcon";
import CaEnvelope from "./icons/CaEnvelope";

const BannedUserPage = () => {
  const { images } = useAssets();
  return (
    <main className="grid w-full grid-cols-1 p-5 md:px-20 md:pt-20 lg:h-[100vh] lg:grid-cols-2 lg:pt-0">
      <div className=" flex w-full items-center justify-start  lg:h-full ">
        <div className="flex flex-col gap-10">
          <h2>Under Reveiw</h2>
          <p>
            We regret to inform you that your account is under review due to a
            violation of our terms of service. As a result, you will be unable
            to access our platform or utilize our services.
          </p>
          <p>
            If you believe this is a mistake or have any questions, please
            contact our support team for further assistance.
          </p>
          <div className="flex flex-wrap gap-2 md:gap-4 ">
            <a href="tel:555-555-5555">
              <Button className="flex w-fit gap-2 text-xs font-semibold md:text-sm ">
                <CaCallIconn />
                <p className="truncate">(233) 555-0127-484</p>
              </Button>
            </a>

            <Button className="flex w-fit gap-2 text-xs font-semibold md:text-sm ">
              <CaEnvelope />
              <p className="truncate">support@rentrightgh.com</p>
            </Button>
          </div>
        </div>
      </div>
      <div className="relative aspect-square h-full w-full">
        <Image
          src={images.BlockedImage}
          fill
          objectFit="contain"
          alt="banned page image"
        />
      </div>
    </main>
  );
};

export default BannedUserPage;
