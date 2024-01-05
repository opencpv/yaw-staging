"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useAppStore } from "@/store/dashboard/AppStore";
import { Button, Link } from "@nextui-org/react";
import JoinUsButtons from "./JoinUsButtons";
import ModalCloseIcon from "@/app/components/ModalCloseIcon";
import { HiOutlineDownload } from "react-icons/hi";

type Props = {};
export default function JobDescriptionButton({}: Props) {
  const [animation, setAnimation] = useState(false);

  const { user } = useAppStore();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          className={`h-[52px] px-[2.5rem] py-[0.94rem]  rounded-lg font-semibold ${"bg-[#DDB771] text-white max-w-[198px]"} gap-2.5 `}>
          Job Description
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-modalOverlay data-[state=open]:animate-overlayShow fixed inset-0 " />
        <Dialog.Content
          className={`data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-[85vh] w-[90vw] translate-x-[-50%] z-[1000] max-w-[784px] max-h-[786px] hidden-scrollbar ${
            animation ? " overflow-y-hidden" : "overflow-y-scroll"
          } translate-y-[-50%] rounded-xl bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none `}>
          <div className={`relative z-[1001] p-4`}>
            <div className="flex flex-col gap-3 px-8 py-2 rounded-2xl border-[1px] border-shade-50 bg-[#FAFAFA] mt-10 relative">
              <p className="text-[1.5rem] font-semibold text-shade-300 border-b-[1px] border-shade-50 py-3">
                JOB DESCRIPTION
              </p>
              <p className="text-shade-300  overflow-y-scroll hidden-scrollbar">
                Lorem ipsum dolor sit amet consectetur. Bibendum felis nunc
                tincidunt odio tristique massa tempus ornare rhoncus. Enim et
                pellentesque sed id porttitor nibh ante ullamcorper. Sodales non
                tortor congue ac commodo at lacus. Mattis nisl risus semper enim
                vitae nisl aliquam donec vestibulum. Nulla nisl dapibus nunc id
                sit amet aenean vitae praesent. Parturient interdum dignissim
                tortor tempor. Amet praesent nulla elementum urna arcu risus
                nisl malesuada. Eget amet velit eleifend rutrum. Est gravida
                sapien interdum enim eros vitae sapien nisl tristique. Gravida
                ipsum blandit enim massa adipiscing adipiscing lorem ipsum.
                Eleifend condimentum gravida venenatis sit dignissim morbi
                libero integer urna. Curabitur ac cum arcu massa metus. Amet
                eget quam sem accumsan consequat sem odio consequat. Mattis
                purus diam suspendisse sit elementum viverra turpis ut. Donec
                lorem lacus viverra urna id. Elementum urna elementum mauris
                vestibulum nibh volutpat pretium. Nulla eget interdum venenatis
                id. A eget neque eget curabitur magna. Rutrum tincidunt dolor
                nullam dignissim ultricies. Aliquam sem non sit arcu hendrerit
                amet turpis. Vitae enim egestas quis ornare. Faucibus eleifend
                consectetur vitae aenean egestas. Nulla pretium tortor risus
                viverra volutpat arcu facilisis varius. Sit fames turpis dolor
                morbi neque ut nullam. Vulputate eleifend felis facilisis felis
                id urna pellentesque sed donec. Sed convallis venenatis pulvinar
                tempus vehicula sem aenean vulputate sed. Tincidunt velit lectus
                eget egestas. Facilisi lorem enim faucibus lacinia suscipit in
                hendrerit. Natoque lacus facilisis proin arcu. Vitae arcu
                posuere habitant nisl ut nisl in tincidunt dui. Duis a egestas
                consectetur molestie faucibus. Elementum mi integer dolor in.
                Gravida diam scelerisque risus adipiscing. Pellentesque eget ac
                dictum eros elementum auctor pharetra a. Sit viverra sit
                dignissim tortor purus mauris integer id ligula. Ante facilisis
                aenean ac maecenas dolor feugiat vivamus etiam felis. Vitae sed
                etiam aliquam sit non eget aliquet suspendisse elit. Dis arcu a
                dapibus sed egestas. In a gravida commodo tortor vel aenean
                senectus ac. At ac sollicitudin amet augue. Sit lectus. t.
                Natoque lacus facilisis proin arcu. Vitae arcu posuere habitant
                nisl ut nisl in tincidunt dui. Duis a egestas consectetur
                molestie faucibus. Elementum mi integer dolor in. Gravida diam
                scelerisque risus adipiscing. Pellentesque eget ac dictum eros
                elementum auctor pharetra a. Sit viverra sit dignissim tortor
                purus mauris integer id ligula. Ante facilisis aenean ac
                maecenas dolor feugiat vivamus etiam felis. Vitae sed etiam
                aliquam sit non eget aliquet suspendisse elit. Dis arcu a
                dapibus sed egestas. In a gravida commodo tortor vel aene
              </p>
              <div className="grid grid-cols-2 h-[40px] gap-1 pb-5 sticky bottom-2">
                <Button className="text-[1rem] bg-[#ECF2F3] font-semibold text-shade-300 ">
                  Download
                  <HiOutlineDownload size="24" colour="#3F3F46" />
                </Button>
                <Link href="/join-us/open-positions/application" className="w-full">
                  <Button className="text-[1rem] bg-[#DDB771] font-semibold text-white w-full">
                    Apply
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[15px] right-[20px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none z-[4000]"
              aria-label="Close">
              <ModalCloseIcon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
