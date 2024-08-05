import Bullet from "@/components/__shared/ui/modals/steps/Bullet";
import React from "react";
import Image from "next/image";

type Props = {};

const SetItApart = (props: Props) => {
  return (
    <div className="grid grid-cols-2 items-center gap-10">
      <div className="flex flex-col gap-4">
        <Bullet number={2} className="animate-bounce" />
        <h1 className="text-4xl">Set it apart and make it exceptional</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis odio
          ratione repudiandae veniam ex commodi quam harum quae velit totam
          aperiam eius, perferendis expedita ad autem saepe aut vero voluptas!
        </p>
      </div>
      <div className="fade-in-bottom relative aspect-square max-h-[500px] w-full">
        <Image
          src="/assets/images/leaseform/lease-form-2.jpeg"
          alt="House with pool"
          fill
          className="rounded-3xl object-cover"
        />
      </div>
    </div>
  );
};

export default SetItApart;
