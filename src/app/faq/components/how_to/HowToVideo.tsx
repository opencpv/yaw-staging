import React, { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  heading: string;
  body: string;
};

const HowToVideo = (props: Props) => {
  const [videoSrc, setVideoSrc] = useState<string>(props.src);
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (props.src.includes("?")) {
      setVideoSrc(props.src + "&rel=0"); // rel=0 will play only related videos from Rentright channel
    } else if (!props.src.includes("?")) {
      setVideoSrc(props.src + "?rel=0");
    }
  }, [props.src]);

  return (
    <div className="space-y-4">
      <div className="relative cursor-pointer rounded-2xl aspect-video">
        <div className={`rounded-2xl`}>
          <iframe
            src={videoSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-3xl"
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
