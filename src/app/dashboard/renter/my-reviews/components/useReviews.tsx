import { useState } from "react";
import toast from "react-hot-toast";

function useReviews() {
  const [reply, setReply] = useState(false);

  const [filter, setFilter] = useState("All");

  const replyReview = () => {
    setReply(false);
    toast.success("Your reply has been sent succesfully.");
  };

  const updateReview = () => {
    setReply(false);
    toast.success("Your review has been updated succesfully.");
  };

  const deleteReview = () => {
    toast.success("Your review has been deleted.");
  };
  return {
    replyReview,
    setReply,
    reply,
    filter,
    setFilter,
    updateReview,
    deleteReview,
  };
}

export default useReviews;
