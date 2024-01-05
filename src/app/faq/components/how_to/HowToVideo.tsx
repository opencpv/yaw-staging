import React, { useEffect, useRef, useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";

type Props = {
  src: string;
  heading: string;
  body: string;
};

const HowToVideo = (props: Props) => {
  const [playVideo, setPlayVideo] = useState<boolean>(false);
  const [videoSrc, setVideoSrc] = useState<string>(props.src);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const handlePlayVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.click();
    setPlayVideo(true);
  };

  useEffect(() => {
    if (playVideo && props.src.includes("?")) {
      setVideoSrc(props.src + "&rel=0&autoplay=1"); // rel=0 will play only related videos from Rentright channel
    } else if (playVideo && !props.src.includes("?")) {
      setVideoSrc(props.src + "?rel=0&autoplay=1");
    }
  }, [playVideo, props.src]);

  return (
    <div className="space-y-4">
      <div className="relative rounded-2xl aspect-video cursor-pointer">
        <div
          className={`${
            playVideo ? "hidden" : "block"
          } flex justify-center items-center w-full h-full rounded-2xl bg-neutral-700`}
          onClick={handlePlayVideo}
        >
          <IoPlayCircleOutline
            className="text-white shrink-0 text-7xl"
            title="play"
          />
        </div>
        <div className={`${playVideo ? "block" : "hidden"} rounded-2xl`}>
          <iframe
            src={videoSrc}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 rounded-3xl h-full w-full"
            ref={videoRef}
          ></iframe>
        </div>
      </div>
      <h3>{props.heading}</h3>
      <p className="text-neutral-600">{props.body}</p>
    </div>
  );
};

export default HowToVideo;
