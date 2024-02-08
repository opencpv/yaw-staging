"use client";
import React, { useEffect } from "react";
import AgentButtons from "./Button";

const LearnMoreYoutubeBtn = () => {
  const [isShowing, setIsShowing] = React.useState(false);

  const buttonRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!buttonRef.current?.contains(event.target as Node)) {
        setIsShowing(false);
      }
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, [buttonRef, setIsShowing]);

  return (
    <>
      <div className="" ref={buttonRef}>
        <AgentButtons
          content="Learn More"
          variant={"learn-more"}
          onClick={() => setIsShowing(!isShowing)}
        />
      </div>
      <div className="relative h-full w-full">
        <div
          className="absolute inset-0 z-20 h-full w-full grid-cols-1"
          style={{ display: isShowing ? "grid" : "none" }}
        >
          <div className="relative aspect-video w-full cursor-pointer rounded-2xl">
            <iframe
              src="https://www.youtube.com/embed/OHgK_G11lDM?si=tguupkc01EJ5BJGa"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full rounded-3xl"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnMoreYoutubeBtn;
