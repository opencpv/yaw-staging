"use client";
import React from "react";
import AgentButtons from "./Button";

const LearnMoreYoutubePlayer = () => {
  const [isShowing, setIsShowing] = React.useState(false);

  return (
    <>
      <AgentButtons
        content="Learn More"
        variant={"learn-more"}
        onClick={() => setIsShowing(!isShowing)}
      />
      <div className="relative h-full w-full">
        <div
          className="absolute inset-0 z-20 h-full w-full grid-cols-1"
          style={{ display: isShowing ? "grid" : "none" }}
          onClick={() => setIsShowing(false)}
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

export default LearnMoreYoutubePlayer;
