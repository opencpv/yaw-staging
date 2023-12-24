import React, { useRef, useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";

type Props = {};

const HowToVideo = (props: Props) => {
  const [playVideo, setPlayVideo] = useState<boolean>(false);
  const videoRef = useRef<HTMLIFrameElement>(null)

  const handlePlayVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.click()
    setPlayVideo(true);
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl aspect-video cursor-pointer">
        <div
          className={`${
            playVideo ? "hidden" : "block"
          } flex justify-center items-center w-full h-full rounded-2xl bg-neutral-700`}
          onClick={handlePlayVideo}
        >
          <IoPlayCircleOutline className="text-white shrink-0 text-7xl" title="play" />
        </div>
        <div className={`${playVideo ? "block" : "hidden"} rounded-2xl`}>
          <iframe
            width="100%"
            height="234"
            src="https://www.youtube.com/embed/utW0-mMYUL4?si=jnPB8xC93P-3uiEY?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-3xl"
            ref={videoRef}
          ></iframe>
        </div>
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
