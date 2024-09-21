import { Button } from "@/components/__shared/ui/button";
import MessageButton from "@/components/__shared/ui/button/message-button";
import Image from "next/image";

import { MdOutlineOutlinedFlag } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";

type Props = {
  type: string;
};
function UserImageAndDetails({ type }: Props) {
  return (
    <div className="w-full">
      <div className="block h-[330px] bg-[url('/assets/images/general-details/general-details-bg.png')] bg-fixed bg-no-repeat bg-contain"></div>

      <div className="wrapper px-10 pb-8 pt-10">
        <div className="flex h-fit flex-row items-end justify-start gap-6">
          <div className="relative flex h-full w-[350px] flex-col justify-end gap-3">
            <div className="absolute left-0 top-[-290px] z-[50] block h-full w-full">
              <div className="relative aspect-[350/275] max-h-[275px] w-full max-w-[350px] overflow-hidden rounded-2xl">
                <Image
                  src={"/assets/images/general-details/profile-image1.jpg"}
                  alt="User Profile Pic"
                  fill
                  objectFit="cover"
                />
                {/* Change alt text */}
              </div>
            </div>
            <div className="w-full">
              <Button
                variant="outline"
                color="primary"
                className="w-fit whitespace-nowrap border-0 px-4 py-2 text-sm font-semibold"
              >
                <MdOutlineOutlinedFlag className="text-lg text-primary" />
                Report this profile
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                {" "}
                <h2 className="text-3xl">Esther Howards</h2>
                <p className="rounded-xl bg-primary px-4 py-1 text-base font-bold capitalize text-white">
                  {type}
                </p>
              </div>

              {type == "lister" && (
                // <Button
                //   variant="default62                //   color="primary"
                //   className=" w-fit whitespace-nowrap px-4 py-2 text-xs font-semibold"
                // >
                //   <MdOutlineMessage className="text-xl text-white" />
                //   Send Message
                // </Button>
                <MessageButton
                  className="w-full max-w-[162px] text-sm font-semibold !px-1"
                  iconType="MdOutlineMessage"
                  id="user123"
                  variant={"default"}
                  withIconAndText
                >
                  Send Message
                </MessageButton>
              )}
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

export default UserImageAndDetails;
