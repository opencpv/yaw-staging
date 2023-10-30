
import { styled } from "@stitches/react";

export default function Page() {
  return (
    <Root>
      <div className="p-hero" style={{
        backgroundImage:"/svgs/property1.svg"
      }}>

      </div>
    </Root>
  );
}

const Root = styled("section", {
  ".p-hero": {
    height:"4ovh"
},
});
