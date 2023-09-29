import OptimizedImage from "@/components/ui/OptimizedImage";
import Typography from "@/components/ui/Typography";
import { styled } from "@stitches/react";

type Props = {
  direction: "left" | "right";
  image: string;
  content: string;
  title: string;
  about?: string;
  maxW?: string;
  maxH?: string;
  imagesize?: string;
};
const AboutCard = ({
  direction,
  image,
  content,
  title,
  about,
  maxH,
  maxW,
  imagesize,
}: Props) => {
  return (
    <Root data-direction={direction}>
      <div data-size={imagesize} className={`image w-full h-full`}>
        <OptimizedImage src={image} alt="" fill variant="cover" />
      </div>
      <div className="text">
        <div className="title" data-title={about}>
          <Typography size="h2" color="primary">
            {title}
          </Typography>
        </div>
        <Typography Component="p" color="grey" size="p1">
          {content}
        </Typography>
      </div>
    </Root>
  );
};

const Root = styled("div", {
  paddingInline: "2rem",
  marginBlock: "5%",
  "@media screen and (max-width: 760px)": {
    paddingInline: "1rem",
  },
  "&[data-direction='left']": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginInline: "2%",
    flexShrink: "1",
    gap: "5%",
    "@media screen and (max-width: 1060px)": {
      flexDirection: "column-reverse",
      alignItems: "start",
      gap: "50px",
    },
  },

  "&[data-direction='right']": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row-reverse",
    flexShrink: "1",
    marginInline: "2%",
    gap: "5%",

    "@media screen and (max-width: 1060px)": {
      alignItems: "start",

      flexDirection: "column-reverse",
      gap: "50px",
    },
  },
  "&[data-size='2']": {
    maxWidth: "814px",
    maxHeight: "716px",
  },
  "&[data-title='about']": {
    backgroundColor: "red",
  },

  "& .image": {
    maxWidth: "824px",
    maxHeight: "716px",
    aspectRatio: "824/716",
    "@media screen and (max-width: 1024px)": {
      width: "100%",
      aspectRatio: "777/408",
      //check height
    },
    "@media screen and (max-width: 760px)": {
      width: "100%",
      aspectRatio: "394/464",
      //check height
    },
  },
  "& .text": {
    maxWidth: "699px",
    width: "699px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    flexBasis: "80%",
    "@media screen and (max-width: 760px)": {
      width: "100%",
    },
  },
  "& .title": {
    borderLeft: "10px solid #DDB771",
    paddingLeft: "10px",
  },
});
export default AboutCard;
