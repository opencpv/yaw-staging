import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import { HiMenuAlt3 } from "react-icons/hi";
import Caption from "./Caption";

type Props = {
  remove: () => void;
  makeBannerImage: () => void;

  addCaption: () => void;
  bannerImage? : boolean
};
const ImageOptionsPopover = ({
  remove,
  makeBannerImage,
  addCaption,
  bannerImage=true
}: Props) => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button
        className="rounded-2xl w-[58px] h-[58px] inline-flex items-center justify-center text-white bg-white  hover:bg-violet3  focus:shadow-accent cursor-pointer outline-none"
        aria-label="Update dimensions">
        <HiMenuAlt3 color="black" size="24" />
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className="rounded-xl p-5 z-[2000] max-w-[154px] max-h-[142px] w-full h-full aspect-[154/142] bg-white focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity]
        data-[align=end]
        data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade "
        sideOffset={0}
        alignOffset={150}
        align="start"
        side="bottom">
        <div className="flex flex-col gap-4 text-[13px] font-[400] whitespace-nowrap items-start">
        {bannerImage ?  <button className="" type="button" onClick={makeBannerImage}>
            Make Banner Image
          </button> : null}
          <Caption />
          <button className="" type="button" onClick={remove}>
            Remove
          </button>
        </div>

        <Popover.Arrow className="fill-white" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default ImageOptionsPopover;
