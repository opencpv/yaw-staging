import Button from "@/components/__shared/ui/button/Button";
import Image from "next/image";
import { MdOutlineMessage, MdOutlineOutlinedFlag } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";

function UserImageAndDetailsSm() {
  return (
    <div>
      <div className="relative  w-full ">
        <div className="sticky aspect-[350/275] max-h-[275px] w-full overflow-hidden ">
          <Image
            src={"/assets/images/profile-image.jpg"}
            alt="User Profile Pic"
            fill
            objectFit="cover"
          />
          {/* Change alt text */}
        </div>
        <div className=" relative top-[-15px] flex w-full flex-col items-start justify-start gap-6 rounded-3xl bg-white px-5 py-7 lg:flex-row ">
          <div className="flex w-full flex-col gap-6">
            <div className="flex w-full flex-col items-start gap-3">
              <div className="flex w-full items-center gap-2.5">
                {" "}
                <h2 className="text-3xl">Esther Howards</h2>
                <p className="rounded-xl bg-primary px-4 py-1 text-base font-bold text-white ">
                  Renter
                </p>
              </div>
              <div className="w-full flex flex-wrap md:flex-nowrap items-start justify-start md:justify-between gap-0 md:gap-5">
                <Button
                  variant="default"
                  color="primary"
                  className="w-full max-w-[162px] whitespace-nowrap text-xs font-semibold"
                >
                  <MdOutlineMessage className="text-xl" />
                  Send Message
                </Button>

                <Button
                  variant="outline"
                  color="primary"
                  className="  border-0  whitespace-nowrap text-xs font-semibold !px-5 md:px-10"
                >
                  <MdOutlineOutlinedFlag className="text-xl" />
                  Report this profile
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2 text-shade-200">
              <TiLocationOutline />
              <p className="text-base ">I live in Ghana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserImageAndDetailsSm;
