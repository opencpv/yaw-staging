import React, { useState } from "react";
import HowToVideo from "./HowToVideo";
import Button from "@/components/__shared/ui/button/Button";
import LoadingIndicator from "@/components/LoadingIndicator";
import { HowTo } from "../../../../../interfaces";

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
          <div
            className="gap-x-5 gap-y-20 space-y-10 xs:grid xs:space-y-0"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(350px,1fr))",
            }}
          >
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
            {props.content.length === 0 && <p>No results found</p>}
          </div>
        </div>
      ) : (
        <LoadingIndicator />
      )}
    </>
  );
};

export default HowToVideosSection;
