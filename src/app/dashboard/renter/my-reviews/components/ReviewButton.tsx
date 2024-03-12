import { Button } from "@nextui-org/react";
import CaReviewReply from "./icons/CaReviewReply";
import { MdOutlineModeEdit } from "react-icons/md";

type Props = {
  variant: "respond" | "reply" | "edit" | "update";
  onClick: any;
};

export default function ReviewButton({ variant, onClick }: Props) {
  return (
    <div>
      {variant == "respond" && (
        <Button
          className="px-10 py-[0.94rem] border-[1px] border-[#99B3B2] rounded-xl flex items-center justify-center bg-white h-[52px]  font-semibold text-[#99B3B2]"
          onPress={onClick}>
          Respond to this
        </Button>
      )}
      {variant == "edit" && (
        <Button
          className="px-10 py-[0.94rem] border-[1px] border-[#99B3B2] rounded-xl flex items-center justify-center bg-white h-[52px]  font-semibold text-[#99B3B2]"
          onPress={onClick}>
          Edit Review
          <MdOutlineModeEdit size={20} color="#99B3B2" />
        </Button>
      )}

      {variant == "update" && (
        <Button
          className="px-10 py-[0.94rem] border-[1px] border-[#99B3B2] rounded-xl flex items-center justify-center bg-white h-[52px]  font-semibold text-[#99B3B2]"
          onPress={onClick}>
          Update
          <MdOutlineModeEdit size={20} color="#99B3B2" />
        </Button>
      )}

      {variant == "reply" && (
        <Button
          className="px-10 py-[0.94rem] border-[1px] border-[#99B3B2] rounded-xl flex items-center justify-center bg-white h-[52px]  font-semibold text-[#99B3B2]"
          onPress={onClick}>
          Reply
          <CaReviewReply />
        </Button>
      )}
    </div>
  );
}
