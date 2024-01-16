import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

const ItemsFilterModalOption = (props: Props) => {
  return (
    <section className="space-y-3">
      <h2 className="font-[600] text-xl">{props.title}</h2>
      <div className="flex flex-wrap gap-5">{props.children}</div>
    </section>
  );
};

export default ItemsFilterModalOption;
