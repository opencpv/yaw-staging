
import Bullet from "@/components/__shared/ui/modals/steps/Bullet";
import React from "react";
import Image from "next/image";
import style from "../../../index.module.css";
import { cn } from "@/lib/utils";

type Props = {};

const FinishUp = (props: Props) => {
  return (
    <div className={style.highlightWrapper}>
      <div className={style.highlightBulletText}>
        <Bullet number={3} className={style.highlightBullet} />
        <div
          className={cn(
            style.highlightImageWrapper,
            "fade-in-bottom md:hidden",
          )}
        >
          <Image
            src="/assets/images/leaseform/lease-form-3.jpeg"
            alt="House with family outside"
            fill
            className={style.highlightImage}
          />
        </div>       
        <h1 className={cn(style.highlightTitle)}>Finish up and publish</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis odio
          ratione repudiandae veniam ex commodi quam harum quae velit totam
          aperiam eius, perferendis expedita ad autem saepe aut vero voluptas!
        </p>
      </div>
      <div
        className={cn(
          style.highlightImageWrapper,
          "fade-in-bottom max-md:hidden",
        )}
      >
        <Image
          src="/assets/images/leaseform/lease-form-3.jpeg"
          alt="House with family outside"
          fill
          className={style.highlightImage}
        />
      </div>
    </div>
  );
};

export default FinishUp;
