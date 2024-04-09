import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { useListingStore } from "@/store/listing/useListingStore";
import { useDisclosure } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import FavoriteModal from "../listing/FavoriteModal";
import SignInRequiredModal from "../modals/SignInRequiredModal";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/lib/utils/supabase/auth/client";
// import { updateLikedProperty } from "@/app/properties/_actions";

type Props = {
  userId: string | number;
  propertyId: string | number;
  liked?: boolean;
  className?: string;
};

const LikeHeart = ({ liked, className, userId, propertyId }: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(liked as boolean);
  const { contactUponFavorite } = useListingStore();
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();
  const { onOpen: toastOnOpen } = useToastDisclosure();
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const { user } = useAppStore();

  const supabase = createClient();

  const { mutateAsync, mutate } = useMutation({
    mutationFn: async ({
      userId,
      propertyId,
    }: {
      userId: string;
      propertyId: number;
    }) => {
      let query;

      const { data } = await supabase
        .from("user_favorite_properties")
        .select("id")
        .eq("property_id", propertyId)
        .single();

      if (data) {
        // if property is already liked
        query = await supabase
          .from("user_favorite_properties")
          .delete()
          .eq("user_id", userId)
          .eq("property_id", propertyId)
          .select();
      } else {
        query = await supabase
          .from("user_favorite_properties")
          .insert({
            user_id: userId as string,
            property_id: propertyId as number,
          })
          .select();
      }

      return query.data;
    },
    onError: (error) => {
      toastOnOpen(error.message, "error");
      setIsLiked(false);
    },
    onMutate: () => {
      setIsLiked((prev) => !prev);
    },
  });

  const toggleLiked = async () => {
    // const { data, error } = await updateLikedProperty(userId, propertyId);
    await mutateAsync({
      userId: userId as string,
      propertyId: propertyId as number,
    });
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
      mutate({
        userId: user.id,
        propertyId: parseInt(propertyId),
      });
      // remove the property id from session storage
      sessionStorage.removeItem("favoritePropertyId");
      sessionStorage.removeItem("windowScrollHeight");
    }
  }, [user, onOpen, mutate]);

  const handleLike = () => {
    if (user) {
      toggleLiked();
    }
    if (!user) {
      // store property id in session storage
      sessionStorage.setItem(
        "favoritePropertyId",
        propertyId?.toString() || "",
      );
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
