"use client";
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";
import Button from "@/components/__shared/ui/button/Button";
import Image from "next/image";
import { MdOutlineMessage, MdOutlineOutlinedFlag } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";

type Props = {
  type: string;
};

function UserImageAndDetailsSm({ type }: Props) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 250], [0, 100]);

  return (
    <div>
      <div className="relative w-full">
        <motion.div
          style={{ y }}
          className="relative  aspect-[350/275] max-h-[275px] w-full overflow-hidden"
        >
          <Image
            src={"/assets/images/general-details/profile-image1.jpg"}
            alt="User Profile Pic"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        <div className="relative top-[-15px] flex w-full flex-col items-start justify-start gap-6 rounded-3xl bg-white px-5 py-3 pt-7 lg:flex-row">
          <div className="flex w-full flex-col gap-3">
            <div className="flex w-full flex-col items-start gap-3">
              <div className="flex w-full items-center gap-2.5">
                <h2 className="text-3xl">Esther Howards</h2>
                <p className="rounded-xl bg-primary px-4 py-1 text-base font-bold capitalize text-white">
                  {type}
                </p>
              </div>
              <div className="flex w-full flex-wrap items-start justify-between gap-0 md:flex-nowrap md:gap-5">
                {type == "lister" && (
                  <Button
                    variant="default"
                    color="primary"
                    className="w-full max-w-[162px] whitespace-nowrap text-sm font-semibold"
                  >
                    <MdOutlineMessage className="shrink-0 text-xl" />
                    Send Message
                  </Button>
                )}
                <Button
                  variant="outline"
                  color="primary"
                  className={`whitespace-nowrap border-0 ${
                    type == "renter" ? "!px-0" : "!px-5"
                  } text-sm font-semibold md:px-10`}
                >
                  <MdOutlineOutlinedFlag className="text-xl" />
                  Report this profile
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2 text-shade-200">
              <TiLocationOutline />
              <p className="text-base">I live in Ghana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserImageAndDetailsSm;
