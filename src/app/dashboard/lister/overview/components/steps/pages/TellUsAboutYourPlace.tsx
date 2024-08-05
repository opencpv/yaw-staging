import Bullet from "@/components/__shared/ui/modals/steps/Bullet";
import React from "react";
import Image from "next/image";

type Props = {};

const TellUsAboutYourPlace = (props: Props) => {
  return (
    <div className="grid grid-cols-2 items-center gap-10">
      <div className="flex flex-col gap-4">
        <Bullet number={1} className="animate-bounce" />
        <h1 className="text-4xl">Tell us about your place</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis odio
          ratione repudiandae veniam ex commodi quam harum quae velit totam
          aperiam eius, perferendis expedita ad autem saepe aut vero voluptas!
        </p>
      </div>
      <div className="relative aspect-square w-full fade-in-bottom max-h-[500px]">
        <Image
          src="/assets/images/leaseform/lease-form-1.png"
          alt="Interior Design"
          fill
          className="rounded-3xl object-cover"
        />
      </div>
    </div>
  );
};

export default TellUsAboutYourPlace;
