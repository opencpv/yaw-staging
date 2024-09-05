"use client";
import { Button } from "@/components/__shared/ui/button/Button";
import style from "../Contact.module.css";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/__shared/ui/tabs/tabs";
import { cn } from "@/lib/utils";
import { ContactTabActiveKey, tag } from "@/store/contact/useContactStore";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { BiRightArrowCircle } from "react-icons/bi";

const ContactTabs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState<ContactTabActiveKey>(tag || "general");
  const [isEndOfContainer, setIsEndOfContainer] = useState<boolean>(false);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToRight = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollContainerRef?.current?.addEventListener("scroll", () => {
      const scrollContainer = scrollContainerRef.current;

      const endOfContainer =
        scrollContainer?.scrollLeft &&
        scrollContainer?.scrollLeft + scrollContainer?.offsetWidth >=
          scrollContainer?.scrollWidth - scrollContainer?.scrollWidth / 10;

      endOfContainer ? setIsEndOfContainer(true) : setIsEndOfContainer(false);
    });
  }, [active]);

  const handleClick = (tag: ContactTabActiveKey) => {
    setActive(tag);
    router.push(`/contact/${tag}`, { scroll: false });
  };

  return (
    <div
      className="hidden-scrollbar flex items-center overflow-x-auto"
      ref={scrollContainerRef}
    >
      <Tabs
        value={active}
        onValueChange={(value) => handleClick(value as ContactTabActiveKey)}
        className="md:py-2"
      >
        <TabsList>
          <TabsTrigger value="general" className={style.tabstrigger}>
            General
          </TabsTrigger>
          <TabsTrigger value="report" className={style.tabstrigger}>
            Report an issue
          </TabsTrigger>
          <TabsTrigger value="advertise" className={style.tabstrigger}>
            Advertise with us
          </TabsTrigger>
          <TabsTrigger value="writers" className={style.tabstrigger}>
            Writers
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Button
        variant={"ghost"}
        size="sm"
        className={cn(
          `sc-button absolute right-0 bg-white pl-5 opacity-50 transition-all md:hidden`,
          {
            "pointer-events-none opacity-0": isEndOfContainer,
          },
        )}
        onClick={scrollToRight}
      >
        <BiRightArrowCircle color="#71C9C7" size="24" />
      </Button>
    </div>
  );
};

export default ContactTabs;
