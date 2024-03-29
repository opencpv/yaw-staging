import React from "react";
import HowToVideo from "./HowToVideo";
import Button from "@/components/__shared/ui/button/Button";

type Props = {};

const HowToVideosSection = (props: Props) => {
  return (
    <div>
      <div
        className="gap-x-5 gap-y-20 space-y-10 xs:grid xs:space-y-0"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px,1fr))" }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => (
          <HowToVideo
            key={idx + 1}
            src="https://www.youtube.com/embed/BUE2LaSzijM?si=8eueNCIhs07gOvFO"
            heading="Lorem ipsum dolor sit amet, consectetur adipisicing."
            body="Lorem ipsum dolor sit amet, consectetur adipisicing.Lorem ipsum dolor sit amet, consectetur adipisicing."
          />
        ))}
      </div>
      <div className="flex justify-center pt-14">
        <Button color="accent">Load more</Button>
      </div>
    </div>
  );
};

export default HowToVideosSection;
