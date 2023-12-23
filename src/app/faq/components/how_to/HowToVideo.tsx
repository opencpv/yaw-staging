import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";

type Props = {};

const HowToVideo = (props: Props) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-center items-center aspect-square rounded-2xl bg-neutral-700">
          <IoPlayCircleOutline className="text-white shrink-0 text-2xl" />
      </div>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
      <p className="text-neutral-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eius qui
        quo exercitationem harum?
      </p>
    </div>
  );
};

export default HowToVideo;
