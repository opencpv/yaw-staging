import Button from "@/components/__shared/ui/button/Button";
import Image from "next/image";
import { MdOutlineMessage, MdOutlineOutlinedFlag } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";

function UserImageAndDetailsSm() {
  return (
    <div>
      <div className="w-full  relative ">
          <div className="sticky aspect-[350/275] max-h-[275px] w-full max-w-md overflow-hidden rounded-2xl ">
              <Image
                src={"/assets/images/profile-image.jpg"}
                alt="User Profile Pic"
                fill
                objectFit="cover"
              />
              {/* Change alt text */}
            </div>
        <div className=" flex flex-col items-start justify-start gap-6 lg:flex-row px-5 w-full py-7 rounded-3xl bg-white relative top-[-10px] ">
       
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-3 items-start w-full">
              <div className="flex items-center gap-2.5 w-full">
                {" "}
                <h2 className="text-3xl">Esther Howards</h2>
                <p className="rounded-xl bg-primary px-4 py-1 text-base font-bold text-white ">
                  Renter
                </p>
              </div>
              <div className="flex items-center justify-between">
                <Button
                  variant="default"
                  color="primary"
                  className="max-w-[162px] whitespace-nowrap text-xs font-semibold"
                >
                  <MdOutlineMessage />
                  Send Message
                </Button>

                <div className="w-full ">
                  <Button
                    variant="outline"
                    color="primary"
                    className="   whitespace-nowrap text-xs font-semibold"
                  >
                    <MdOutlineOutlinedFlag />
                    Report this profile
                  </Button>
                </div>
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
