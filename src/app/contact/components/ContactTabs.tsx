import { useContactStore } from "@/store/contact/useContactStore";
import { styled } from "@stitches/react";
import React, { useRef } from "react";
import { BiRightArrowCircle } from "react-icons/bi";

type Props = {};

const ContactTabs = (props: Props) => {
  const active = useContactStore((state) => state.activeKey);
  const setActive = useContactStore((state) => state.setActiveKey);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToRight = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const childElement = scrollContainer.querySelector(".sc");
      if (childElement) {
        childElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "end",
        });
      }
    }
  };

  return (
    <div className="flex items-center" ref={scrollContainerRef}>
      <div className="flex gap-[50px] overflow-x-scroll lg:overflow-x-auto relative ">
        <Tab
          onClick={(e: any) => setActive("general")}
          type={active === "general" ? "active" : undefined}
        >
          General
        </Tab>
        <Tab
          onClick={(e: any) => setActive("report")}
          type={active === "report" ? "active" : undefined}
        >
          Report an issue
        </Tab>
        <Tab
          onClick={(e: any) => setActive("advertise")}
          type={active === "advertise" ? "active" : undefined}
        >
          Advertise with us
        </Tab>
        <Tab
          onClick={(e: any) => setActive("writers")}
          className="sc"
          type={active === "writers" ? "active" : undefined}
        >
          Writers
        </Tab>
      </div>
      <div
        className="absolute pl-5 md:hidden right-5 sc-button"
        onClick={scrollToRight}
      >
        <BiRightArrowCircle color="#71C9C7" size="24" />
      </div>
    </div>
  );
};

const Tab = styled("button", {
  fontSize: "18px",
  color: "#45808B",
  paddingBlock: "1rem",
  fontWeight: "400",
  cursor: "pointer",
  paddingInline: "1rem",
  transition: "background 200ms ease-in-out, font-weight 200ms ease-in",
  whiteSpace: "nowrap",
  display: "block",
  // backgroundColor:"white",

  "&::after": {
    marginTop: "0px",
    display: "block",
    content: "",
    width: "0px",
    borderBottom: "4px solid white",
    height: "2px",
    // transition: "width 1000ms ease-in-out",
  },

  "&:hover": {
    backgroundColor: "#45808b1c",
  },

  variants: {
    type: {
      active: {
        fontWeight: "600",
        "&::after": {
          marginTop: "11px",
          display: "block",
          content: "",
          width: "100%",
          borderBottom: "4px solid #45808B",
          height: "2px",
          transition: "width 500ms ease-in-out",
        },
      },
    },
  },
});

export default ContactTabs;
