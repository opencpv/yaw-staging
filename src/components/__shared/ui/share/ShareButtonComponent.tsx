import React from "react";

type Props = {
  Icon: React.ComponentType<any>;
  ShareButton: React.ComponentType<any>;
  iconColor?: string;
  socialName: string;
};

const ShareButtonComponent: React.FC<Props> = ({
  Icon,
  ShareButton,
  iconColor,
  socialName,
  ...props
}) => {
  return (
    <div className="border rounded-lg hover:bg-slate-50">
      <ShareButton {...props} className="inline-block w-full">
        <div className="flex items-center gap-3 p-4 w-full">
          <Icon
            size={30}
            round
            className={`rounded-full text-3xl text-[${iconColor}]`}
          />
          <span className="text-neutral-800">{socialName}</span>
        </div>
      </ShareButton>
    </div>
  );
};

export default ShareButtonComponent;
