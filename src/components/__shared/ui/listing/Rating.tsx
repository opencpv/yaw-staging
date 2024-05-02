import { useDisclosure } from "@nextui-org/react";
import React, { useEffect, useMemo, useState } from "react";
import RatingModal from "../modals/Modal";
import { IoIosCloseCircle } from "react-icons/io";
import { useAppStore } from "@/store/dashboard/AppStore";
import SignInRequiredModal from "../modals/SignInRequiredModal";
import { cn } from "@/lib/utils";
import CloseModalIcon from "../icons/CloseModalIcon";

type Props = {
  value: number;
  className?: string;
};

const Rating = ({ value, className }: Props) => {
  const { user } = useAppStore();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const ratingValue = useMemo(() => {
    return value > 5 ? 5 : value;
  }, [value]);

  const handleRating = () => {
    if (user) {
      onOpen();
    } else if (!user) {
      // set scroll position to scroll to after signing in.
      sessionStorage.setItem("windowScrollHeight", window.scrollY.toString());
      setSignInModalOpen(true);
    }
  };

  useEffect(() => {
    // This happens after the user signs in,
    // after clicking on rating button.
    const windowScrollHeight = sessionStorage.getItem("windowScrollHeight");

    if (user && windowScrollHeight) {
      window.scrollTo({
        top: parseInt(windowScrollHeight || "400"),
        behavior: "smooth",
      });

      sessionStorage.removeItem("windowScrollHeight");
    }
  }, [user]);

  return (
    <>
      <SignInRequiredModal
        open={signInModalOpen}
        onOpenChange={setSignInModalOpen}
        onClose={() => setSignInModalOpen(false)}
      />
      <RatingModal
        closeButton={<CloseModalIcon />}
        // header={}
        body={<div className="h-72">Rating form here</div>} // TODO: add rating form
        // footer={<ModalFooter />}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
      />
      <small
        className={cn("cursor-pointer underline", className)}
        onClick={handleRating}
      >
        {ratingValue}
      </small>
    </>
  );
};

export default Rating;
