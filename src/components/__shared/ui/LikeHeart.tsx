import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { useListingStore } from "@/store/listing/useListingStore";
import { useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import FavoriteModal from "../listing/FavoriteModal";

type Props = {
  liked?: boolean;
  className?: string;
};

const LikeHeart = ({ liked, className }: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { contactUponFavorite } = useListingStore();
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();
  const { onOpen: toastOnOpen } = useToastDisclosure();

  const toggleLiked = () => {
    setIsLiked((prevState) => !prevState);
  };

  const handleSaveFavoriteOption = () => {
    onClose();
    toastOnOpen(
      contactUponFavorite
        ? "👍 Great choice! We've noted that you're open to being contacted by your property owners. Expect to hear from them soon!"
        : "Noted! Your preference for privacy is important to us. Your property owners will not contact you unless necessary."
    );
  };

  return (
    <>
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
          onClick={() => {
            toggleLiked();
            setTimeout(() => {
              onOpen();
            }, 500);
          }}
        />
      )}
    </>
  );
};

export default LikeHeart;
