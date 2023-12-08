import React from "react";

const ShareButtonComponent = (props: ShareDataProps) => {
  return (
    <props.ShareButton {...props} className="inline-block w-full">
      <div className="flex items-center gap-3 p-4 w-full">
        <props.Icon className={`text-[${props.iconColor}] rounded-full text-3xl`} />
        <span className="text-neutral-800">{props.socialName}</span>
      </div>
    </props.ShareButton>
  );
};

export default ShareButtonComponent;
