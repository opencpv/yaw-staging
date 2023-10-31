import Image from "next/image";
import { Number } from "./GetStarted";
import SlideEnter from "./SlideEnter";

export default function SetItApart() {
  return (
    <SlideEnter>
        <div className="w-full flex flex-col items-center justify-center h-full ">
          <div className="hidden w-[75%] lg:flex items-center justify-center h-full">
            <div className="grid grid-cols-2 gap-x-16">
              <div className="flex justify-center flex-col gap-6">
                <div className="animate animate-bounce">
                  <Number number="02" />
                </div>
                <div className="flex flex-col gap-6">
                  <p className="text-[3.0625rem] font-bold">
                  Set it apart and make it exceptional
                  </p>
                  <p
                    className="text-[1.25rem] font-[400]
                  max-w-[684px] leading-[28px]
                  ">
                    Lorem ipsum dolor sit amet consectetur. Curabitur ut placerat
                    fermentum est sed integer. Tempor quam interdum bibendum in.
                    Dictum bibendum ultrices et at a volutpat. Egestas tempor
                    integer sit vitae tempor pulvinar in. Vel i
                  </p>
                </div>
              </div>
              <div className="relative w-full max-w-[683px] aspect-[683/617] rounded-2xl h-full ">
                <Image
                  src="/assets/images/leaseform/lease-form-2.jpeg"
                  alt="Lease Image Form"
                  fill
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
    
    
          
          <div className="mt-20 lg:hidden p-5 w -full flex items-center justify-center h-full">
            <div className="flex flex-col gap-x-16">
              <div className="flex justify-center flex-col gap-6">
                <div className="animate animate-bounce">
                  <Number number="02" />
                </div>
                <div className="relative w-full max-w-[683px] aspect-[683/617] rounded-2xl h-full ">
                  <Image
                    src="/assets/images/leaseform/lease-form-2.jpeg"
                    alt="Lease Image Form"
                    fill
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <p className="text-[2.5rem] lg:text-[3.0625rem] font-bold">
                    Set it apart and make it exceptional
                  </p>
                  <p
                    className="text-[1rem] lg:text-[1.25rem] font-[400]
                  max-w-[684px] leading-[28px]
                  ">
                    Lorem ipsum dolor sit amet consectetur. Curabitur ut placerat
                    fermentum est sed integer. Tempor quam interdum bibendum in.
                    Dictum bibendum ultrices et at a volutpat. Egestas tempor
                    integer sit vitae tempor pulvinar in. Vel i
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </SlideEnter>
  );
}
