import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
    link: string;
    name: string;
    image: string;
};

const Social = ({link, name, image}: Props) => {
  const [rotateSocial, setRotateSocial] = useState<boolean>(false);

  const handleSocialHover = () => {
    setRotateSocial(true);
  };

  const handleSocialStill = () => {
    setRotateSocial(false);
  };

  return (
    <Link href={link}>
      <Image
        src={image}
        alt=""
        width={80}
        height={80}
        className={`w-10 sm:w-20 sm:h-20 ${rotateSocial && "rotate-center"}`}
        onMouseEnter={handleSocialHover}
        onMouseLeave={handleSocialStill}
      />
    </Link>
  );
};

export default Social;
