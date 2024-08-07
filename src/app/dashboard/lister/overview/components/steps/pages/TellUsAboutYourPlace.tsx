import Bullet from "@/components/__shared/ui/modals/steps/Bullet";
import React from "react";
import Image from "next/image";
import style from "../../../index.module.css";
import { cn } from "@/lib/utils";

type Props = {};

const TellUsAboutYourPlace = (props: Props) => {
  return (
    <div className={style.highlightWrapper}>
      <div className={style.highlightBulletText}>
        <Bullet number={1} className={style.highlightBullet} />
        <div
          className={cn(
            style.highlightImageWrapper,
            "fade-in-bottom md:hidden",
          )}
        >
          <Image
            src="/assets/images/leaseform/lease-form-1.png"
            alt="Interior Design"
            fill
            className={style.highlightImage}
          />
        </div>
        <h1 className={cn(style.highlightTitle)}>Tell us about your place</h1>
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
          src="/assets/images/leaseform/lease-form-1.png"
          alt="Interior Design"
          fill
          className={style.highlightImage}
        />
      </div>
    </div>
  );
};

export default TellUsAboutYourPlace;
