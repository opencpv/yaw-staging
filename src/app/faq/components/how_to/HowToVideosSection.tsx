import React, { useState } from "react";
import Button from "@/components/__shared/ui/button/Button";
import { HowTo } from "../../../../../interfaces";
import dynamic from "next/dynamic";
const LoadingIndicator = dynamic(
  () => import("@/components/__shared/ui/loading-indicator"),
);
const EmptyState = dynamic(
  () => import("@/components/__shared/ui/states/empty-state"),
);
const HowToVideo = dynamic(() => import("./HowToVideo"));

type Props = { content: HowTo[] };

const HowToVideosSection = (props: Props) => {
  const [displayCount, setDisplayCount] = useState(8); // Initial number of items to display

  const handleLoadMore = () => {
    // Increase the number of items to display by a certain amount (e.g., 3)
    if (displayCount >= props.content.length) {
      setDisplayCount(props.content.length);
      return;
    }
    setDisplayCount((prevCount) => prevCount + 4);
  };

  return (
    <>
      {props.content ? (
        <div>
          <div className="grid grid-cols-1 gap-x-5 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {props.content.map((item: HowTo, idx: number) => (
              <HowToVideo
                key={idx}
                src={item.video_url}
                heading={item.title}
                body={item.description}
              />
            ))}
          </div>
          <div className="flex justify-center pt-14">
            {displayCount < props.content.length && (
              <Button color="accent" onClick={handleLoadMore}>
                Load more
              </Button>
            )}
            {props.content.length === 0 && <EmptyState paddingBlock="none" />}
          </div>
        </div>
      ) : (
        <LoadingIndicator />
      )}
    </>
  );
};

export default HowToVideosSection;
