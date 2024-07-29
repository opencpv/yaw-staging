import Button from "@/components/__shared/ui/button/Button";
import Image from "next/image";

import { MdOutlineOutlinedFlag } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";

function UserImageAndDetails() {
  return (
    <div className="w-full">
      <div className="hidden h-[330px] bg-[url('/assets/images/general-details/general-details-bg.png')] bg-cover bg-no-repeat lg:block"></div>

      <div className=" px-10 py-8 ">
        <div className=" flex h-fit flex-col-reverse items-end justify-start gap-6 lg:flex-row">
          <div className="relative flex h-full w-[350px] flex-col justify-end gap-3">
            <div className="absolute left-0 top-[-300px] z-[100] hidden h-full w-full lg:block">
              <div className="relative aspect-[350/275] max-h-[275px] w-full max-w-[350px] overflow-hidden rounded-2xl">
                <Image
                  src={"/assets/images/profile-image.jpg"}
                  alt="User Profile Pic"
                  fill
                  objectFit="cover"
                />
                {/* Change alt text */}
              </div>
            </div>
            <div className="w-full ">
              <Button
                variant="outline"
                color="primary"
                className="w-full    max-w-[181px] whitespace-nowrap text-xs font-semibold"
              >
                <MdOutlineOutlinedFlag />
                Report this profile
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                {" "}
                <h2 className="text-3xl">Esther Howards</h2>
                <p className="rounded-xl bg-primary px-4 py-1 text-base font-bold text-white ">
                  Renter
                </p>
              </div>

              <Button
                variant="default"
                color="primary"
                className="max-w-[162px] whitespace-nowrap text-xs font-semibold"
              >
                <MdOutlineMessage />
                Send Message
              </Button>
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

export default UserImageAndDetails;
