import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { useListingStore } from "@/store/listing/useListingStore";
import { useDisclosure } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import FavoriteModal from "../listing/FavoriteModal";
import SignInRequiredModal from "../modals/SignInRequiredModal";
import { useAppStore } from "@/store/dashboard/AppStore";

type Props = {
  liked?: boolean;
  id?: string | number;
  className?: string;
};

const LikeHeart = ({ liked, className, id }: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { contactUponFavorite } = useListingStore();
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();
  const { onOpen: toastOnOpen } = useToastDisclosure();
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const { user } = useAppStore();

  const toggleLiked = () => {
    setIsLiked((prevState) => !prevState);
  };

  useEffect(() => {
    // get the property id from session storage
    // to be able to handle liked property logic
    const propertyId = sessionStorage.getItem("favoritePropertyId");
    const windowScrollHeight = sessionStorage.getItem("windowScrollHeight");

    if (propertyId && user) {
      window.scrollTo({
        top: parseInt(windowScrollHeight || "400"),
        behavior: "smooth",
      });
      onOpen(); // depends on whether the user has opted for the contacting
      // handle liked property logic
      // remove the property id from session storage
      sessionStorage.removeItem("favoritePropertyId");
      sessionStorage.removeItem("windowScrollHeight");
    }
  }, [user, onOpen]);

  const handleLike = () => {
    if (!user) {
      // store property id in session storage
      sessionStorage.setItem("favoritePropertyId", id?.toString() || "");
      sessionStorage.setItem("windowScrollHeight", window.scrollY.toString());
      setSignInModalOpen(true);
    } else {
      toggleLiked();
      setTimeout(() => {
        // TODO: implement appropriately
        onOpen();
      }, 500);
    }
  };

  const handleSaveFavoriteOption = () => {
    onClose();
    toastOnOpen(
      contactUponFavorite
        ? "👍 Great choice! We've noted that you're open to being contacted by your property owners. Expect to hear from them soon!"
        : "Noted! Your preference for privacy is important to us. Your property owners will not contact you unless necessary.",
      undefined,
      10000,
    );
  };

  return (
    <>
      <SignInRequiredModal
        open={signInModalOpen}
        onOpenChange={setSignInModalOpen}
        onClose={() => setSignInModalOpen(false)}
      />
      <FavoriteModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={handleSaveFavoriteOption}
      />
      {liked || isLiked ? (
        <FaHeart
          className={`cursor-pointer ${isLiked && "ping"} ${className}`}
          onClick={toggleLiked}
        />
      ) : (
        <FaRegHeart
          className={`cursor-pointer ${className}`}
          onClick={handleLike}
        />
      )}
    </>
  );
};

export default LikeHeart;
