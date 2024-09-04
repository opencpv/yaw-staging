import dynamic from "next/dynamic";
import React from "react";
const ScrollTop = dynamic(
  () => import("@/components/__shared/ui/scroll-top/scroll-top"),
);

const BeTheFirstToKnowLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="min-h-screen">
      <div className="wrapper pb-28">
        <h2 className="mb-8 capitalize">Be the first to Know</h2>
        {children}
        <ScrollTop />
      </div>
    </main>
  );
};

export default BeTheFirstToKnowLayout;
