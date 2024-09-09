import { Button } from "@/components/__shared/ui/button";
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
          className="border-[#99B3B2] bg-white text-[#99B3B2]"
          // onPress={onClick}
        >
          Respond to this
        </Button>
      )}
      {variant == "edit" && (
        <Button
          className="border-[#99B3B2] bg-white text-[#99B3B2]"
          // onPress={onClick}
        >
          Edit Review
          <MdOutlineModeEdit size={20} color="#99B3B2" />
        </Button>
      )}

      {variant == "update" && (
        <Button
          className="border-[#99B3B2] bg-white text-[#99B3B2]"
          // onPress={onClick}
        >
          Update
          <MdOutlineModeEdit size={20} color="#99B3B2" />
        </Button>
      )}

      {variant == "reply" && (
        <Button
          className="border-[#99B3B2] bg-white text-[#99B3B2]"
          // onPress={onClick}
        >
          Reply
          <CaReviewReply />
        </Button>
      )}
    </div>
  );
}
