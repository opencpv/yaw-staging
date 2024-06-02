import React from "react";
import ManagePropertiesInfo from "../ui/ManagePropertiesInfo";
import Image from "next/image";
import { urlForImage } from "@/lib/utils/sanity/utils";

type Props = { data: any };

const ManagePropertiesSection = () => {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="section wrapper space-y-14 py-24">
        <div className="w-full space-y-3.5">
          <div className="flex items-start gap-5">
            <h2 className="w-fit uppercase text-neutral-900">
              Manage your properties with us
            </h2>
            <Image
              src="/assets/icons/manage.svg"
              alt="shield"
              width={25}
              height={25}
            />
          </div>
          <p className="max-w-2xl font-medium text-shade-200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
            eveniet sunt sequi repellat commodi culpa voluptatibus voluptates
            vero ex tenetur inventore facere enim sint, magnam numquam iste quia
            veniam laboriosam.
          </p>
        </div>
        <div className="">
          <ul className="space-y-10 sm:space-y-20">
            {[1, 2].map((card: any, idx: number) => (
              <ManagePropertiesInfo
                key={idx + 1}
                href={"/about"}
                activity={"activity"}
                image={
                  "/assets/images/dashboard/couple-stirring-into-space.jpg"
                }
                title={"Want to rent your property?"}
                body={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto debitis optio ad accusantium aperiam? Expedita, labore optio magnam et consequatur eum numquam temporibus facere. Distinctio numquam modi non saepe quidem!"
                }
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ManagePropertiesSection;
