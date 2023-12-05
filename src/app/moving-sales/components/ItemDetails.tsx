import React from "react";

type Props = {};

const ItemDetails = (props: Props) => {
  return (
    <div className="lg:col-span-2">
      <div className="flex flex-wrap items-center gap-x-20 gap-y-5 mb-16">
        <h3 className="text-xl text-neutral-500 font-[500]">Product title</h3>
        <div className="bg-accent-50 text-white rounded-md p-3 text-sm">
          Category name
        </div>
      </div>
      <div className="space-y-3 mb-16">
        <h2 className="text-3xl font-[700] text-primary-500">GHS 16.98</h2>
        <div className="bg-primary-100 w-fit text-white p-2 rounded-xl">
          Negotiable
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-neutral-500">
          <p className="font-[500]">Condition</p>
          <div className="bg-[#FFE3B0] text-primary-500 text-xs py-1 px-8 rounded-xl">
            Used
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
        praesentium aspernatur asperiores libero ea velit dicta non esse. Dolore
        itaque odit nemo tenetur numquam at unde illum modi blanditiis aliquid?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ab
        perferendis voluptate ea laborum voluptates dolores, facilis ex, earum
        sed, deserunt eligendi quas? Esse beatae ex voluptate nostrum sequi
        magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Voluptate, nam neque aspernatur omnis molestiae necessitatibus
        architecto eaque vero et sit aliquam totam molestias voluptas error fuga
        laudantium accusamus distinctio facilis?
      </p>
    </div>
  );
};

export default ItemDetails;
