import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { useDisclosure } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import FavoriteModal from "../listing/FavoriteModal";
import SignInRequiredModal from "../modals/SignInRequiredModal";
import { useAppStore } from "@/store/dashboard/AppStore";
import { updateLikedProperty } from "@/app/properties/_actions";
import { getUserFavorite } from "@/components/services";
import { useLocalStorage } from "@uidotdev/usehooks";

type Props = {
  userId: string | number;
  propertyId: string | number;
  liked?: boolean;
  className?: string;
};

const LikeHeart = ({ liked, className, userId, propertyId }: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(liked as boolean);
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();
  const { onOpen: toastOnOpen } = useToastDisclosure();
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [shouldOpenModal, setShouldOpenModal] = useLocalStorage(
    "shouldOpenModal",
    false,
  );
  const { user } = useAppStore();

  const handleContactPreference = React.useCallback(async () => {
    if (shouldOpenModal) {
      onOpen();
    }
  }, [onOpen, shouldOpenModal]);

  const handleDislike = async () => {
    setIsLiked(!isLiked);
    const { error } = await updateLikedProperty(userId, propertyId);
    if (error) {
      toastOnOpen(error.message, "error");
      setIsLiked(!isLiked);
    }
  };

  const handleLike = async () => {
    if (user) {
      setIsLiked(!isLiked);
      const { error } = await updateLikedProperty(userId, propertyId);
      if (error) {
        toastOnOpen(error.message, "error");
        setIsLiked(!isLiked);
      }
      handleContactPreference();
    } else if (!user) {
      // set scroll position to scroll to after signing in.
      sessionStorage.setItem("windowScrollHeight", window.scrollY.toString());
      setSignInModalOpen(true);
    }
  };

  useEffect(() => {
    setIsLiked(liked as boolean);
  }, [liked]);

  useEffect(() => {
    const fetchFavorite = async () => {
      const { data: favorite } = await getUserFavorite(user?.id as string);
      setShouldOpenModal(!favorite);
    };

    fetchFavorite();
  }, [user?.id, setShouldOpenModal]);

  useEffect(() => {
    // This happens after the user signs in, following favoriting.
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
      <FavoriteModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
      {isLiked ? (
        <FaHeart
          className={`cursor-pointer ${isLiked && "ping"} ${className}`}
          onClick={handleDislike}
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
