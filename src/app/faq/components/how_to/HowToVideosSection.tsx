import React from "react";
import HowToVideo from "./HowToVideo";

type Props = {};

const HowToVideosSection = (props: Props) => {
  return (
    <div className="space-y-8">
      <h2>Lorem ipsum dolor sit amet</h2>
      <div
        className="space-y-10 gap-x-5 gap-y-10 xs:grid xs:space-y-0"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px,1fr))" }}
      >
        {[1, 2, 3, 4, 5, 6].map((_, idx) => (
          <HowToVideo
            key={idx + 1}
            src="https://www.youtube.com/embed/utW0-mMYUL4?si=jnPB8xC93P-3uiEY"
            heading="Lorem ipsum dolor sit amet, consectetur adipisicing."
            body="Lorem ipsum dolor sit amet, consectetur adipisicing.Lorem ipsum dolor sit amet, consectetur adipisicing."
          />
        ))}
      </div>
    </div>
  );
};

export default HowToVideosSection;
