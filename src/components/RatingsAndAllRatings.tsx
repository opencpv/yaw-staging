"use client";
import { useRatingsModalStore } from "@/store/modal/useRatingsModalStore";
import CloseModalIcon from "./__shared/ui/icons/CloseModalIcon";
import RatingsFormForm from "./__shared/ui/ratings-form/components/RatingsFormForm";
import AllReviewsData from "./__shared/ui/modals/all-reviews-modal/components/AllReviewsData";
import { useSignInModalStore } from "@/store/modal/useSignInModalStore";
import SignInRequiredModal from "./__shared/ui/modals/sign-in-required-modal";
import { Modal } from "./__shared/ui/modals/dialog";

/**
 * RatingsAndAllRatings Component
 *
 * This component handles the display and state management of three modals:
 * 1. SignInRequiredModal: Prompts the user to sign in if required.
 * 2. RatingsForm Modal: Displays a form for users to submit their ratings.
 * 3. AllReviews Modal: Shows all reviews and ratings for a given property.
 */

function RatingsAndAllRatings() {
  const { openSignInModal, setOpenSignInModal } = useSignInModalStore();
  const {
    openRatingsForm,
    setOpenRatingsForm,
    openAllRatings,
    setOpenAllRatings,
    currentProperty,
    setCurrentProperty,
    variant,
  } = useRatingsModalStore();
  return (
    <>
      <SignInRequiredModal
        open={openSignInModal}
        onOpenChange={setOpenSignInModal}
        onClose={() => setOpenSignInModal(false)}
      />

      <Modal
        closeButton={<CloseModalIcon />}
        // header={}

        body={<RatingsFormForm />}
        // footer={<ModalFooter />}
        isOpen={openRatingsForm}
        onOpenChange={setOpenRatingsForm}
        size="4xl"
        className="max-w-[799px] "
      />

      <Modal
        closeButton={<CloseModalIcon />}
        body={<AllReviewsData />} // TODO: add rating form
        isOpen={openAllRatings}
        onOpenChange={setOpenAllRatings}
        size="5xl"
      />
    </>
  );
}

export default RatingsAndAllRatings;
