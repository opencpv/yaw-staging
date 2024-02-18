import { useToastDisclosureVariant1 } from "@/lib/custom-hooks/useCustomDisclosure";
import { useState } from "react";

function useReviews() {
  const [reply, setReply] = useState(false);
  const { onOpen: toastOpen } = useToastDisclosureVariant1();

  const [filter, setFilter] = useState<any>('none')

  const replyReview = () => {
    setReply(false);
    toastOpen('Your reply has been sent succesfully', 'success')
  };

  const updateReview = () => {
    setReply(false);
    toastOpen('Your review has been updated succesfully', 'success')
  };

  const deleteReview = () => {
    toastOpen('Your review has been deleted', 'success')
  };
  return { replyReview, setReply, reply, filter, setFilter, updateReview, deleteReview };
}

export default useReviews;
