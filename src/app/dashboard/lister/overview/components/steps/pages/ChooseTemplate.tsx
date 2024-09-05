import React from "react";
import styles from "../../../index.module.css";
import Image from "next/image";
import { Switch } from "@/components/__shared/ui/switch/switch";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ChooseTemplate = () => {
  return (
    <div>
      <h2 className={`${styles.title}`}>
        Choose your preferred template to list property
      </h2>
      {/*
        <Switch
        label="Show comparison"
        checked={false}
        onCheckedChange={() => {}}
      />
      RELEASE 2*/}
      <section className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="space-y-3">
          <h4>Continue with Standard Template</h4>
          <Template
            image="/assets/images/leaseform/standard-template.png"
            isActive={true}
            href="#"
          />
        </div>
        <div className="space-y-3">
          <h4>Continue with Professional Template</h4>
          <Template
            image="/assets/images/leaseform/pro-template-inactive.png"
            isActive={false}
            style={{ animationDelay: "0.5s" }}
          />
        </div>
      </section>
    </div>
  );
};

const Template = (props: {
  image: string;
  isActive: boolean;
  href?: string;
  style?: React.CSSProperties;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "fade-in-bottom relative flex h-full items-end justify-center rounded-lg border bg-white p-3 shadow max-md:min-h-96",
        props.className,
      )}
      style={props.style}
    >
      {props.isActive ? <Tag variant="free" /> : <Tag variant="coming soon" />}
      <div className="flex w-full flex-col items-center gap-5">
        <Image src={props.image} alt="template" width={320} height={320} />
        {props.isActive ? (
          <Link
            href={props.href as string}
            target="_blank"
            className={cn(
              "bottom-0 self-end font-semibold underline sm:sticky",
            )}
          >
            View Sample
          </Link>
        ) : (
          <div
            className={cn(
              "bottom-0 self-end font-semibold text-shade-200 underline sm:sticky",
            )}
          >
            View Sample
          </div>
        )}
      </div>
    </div>
  );
};

const Tag = (props: { variant: "free" | "coming soon" }) => {
  return (
    <div
      className={cn(
        "absolute left-3 top-3 z-10 w-full max-w-[200px] rounded-xl p-3 text-center font-bold uppercase",
        {
          "bg-success-bg text-success": props.variant === "free",
          "bg-info-bg text-info": props.variant === "coming soon",
        },
      )}
    >
      {props.variant}
    </div>
  );
};

export default ChooseTemplate;
