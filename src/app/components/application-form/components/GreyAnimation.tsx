import { ExpandCircleFromBottom } from "@/lib/animations";
import { styled } from "@stitches/react";
import { motion } from "framer-motion";

export const Root = styled(motion.aside, {
  background: "url(/svgs/bgMenuSmall.svg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  paddingInline: "2rem",
  bottom: "0px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media screen and (min-width: 1024px) ": {
    background: "url(/svgs/bgMenuLarge.svg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    maxHeight: "100%",
    // bottom:"unset"
  },
});

export const GreyAnimation = ({ animation }: { animation: any }) => {
  return (
    <Root
      className="absolute bg-black z-[100] w-full left-0 top-0  h-full right-0 text-white "
      variants={ExpandCircleFromBottom}
      exit={{
        ...ExpandCircleFromBottom.closed,
        transitionEnd: {
          // display: 'none',
        },
      }}
      animate={
        animation
          ? {
              ...ExpandCircleFromBottom.open(),
            }
          : {
              ...ExpandCircleFromBottom.closed,
              transitionEnd: {
                // display: 'none',
              },
            }
      }
      initial={{
        ...ExpandCircleFromBottom.closed,
        // transitionEnd: {
        //   // display: 'none',
        // },
      }}
    >
      <p className="text-md lg:text-2xl">
        {" "}
        Congratulations. You have completed the form successfully!!!
      </p>
    </Root>
  );
};
