import { useDisclosure } from "@nextui-org/react";
import React, { useMemo } from "react";
import Modal from "../modals/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

type Props = {
  value: number;
};

const Rating = ({ value }: Props) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const ratingValue = useMemo(() => {
    return value > 5 ? 5 : value;
  }, [value]);

  const handleRating = () => {
    onOpen();
  };

  return (
    <>
      <Modal
        // header={<ModalHeader onClose={onClose} />}
        body={<ModalBody />}
        // footer={<ModalFooter />}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton={true}
        size="md"
      />
      <small className="cursor-pointer underline" onClick={handleRating}>
        {ratingValue}
      </small>
    </>
  );
};

export default Rating;

const ModalBody = () => {
  return (
    <section className="flex flex-col gap-4 px-6 py-3">
      <div className="flex flex-col gap-4">
        <p className="text-[1.5625rem] font-bold text-[#373737]">
          Write a review
        </p>
        <div className="flex items-center gap-4">
          <div className="relative aspect-square w-full max-w-[48px] overflow-hidden rounded-full">
            <Image
              src={
                "https://images.unsplash.com/photo-1682686578601-e7851641d52c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
              }
              fill
              alt="Image"
            />
          </div>
          <p className="text-[1.25rem[ font-semibold">Jane Cooper</p>
          <p className="cursor-pointer border-b-[1px] border-[#073B3A] bg-white text-[1.25rem] text-[#073B3A]">
            ( 150 reviews )
          </p>
        </div>
      </div>

      <Swiper className="mt-8 w-full px-1">
        <div className="mb-16 flex items-center gap-5 overflow-x-scroll">
          {/* <Progress
            number={1}
            label="Rate"
            classes="sc1"
            activeNumber={activeNumber}
            setActiveIndex={setActiveNumber}
          />
          <Progress
            number={2}
            label="review"
            classes="sc2"
            activeNumber={activeNumber}
            setActiveIndex={setActiveNumber}
          />
          <Progress
            third
            number={3}
            label="recommend"
            classes="sc3"
            activeNumber={activeNumber}
            setActiveIndex={setActiveNumber}
          /> */}
        </div>
        {/* <SwiperSlide>
          <Rate setActiveIndex={setActiveNumber} />
        </SwiperSlide>
        <SwiperSlide>
          <Review setActiveIndex={setActiveNumber} />
        </SwiperSlide>
        <SwiperSlide>
          <Recommend setActiveIndex={setActiveNumber} setOpen={setOpen} />
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
};
