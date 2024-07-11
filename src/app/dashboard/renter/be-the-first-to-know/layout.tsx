import React from "react";
import ScrollTop from "@/components/__shared/ui/ScrollTop";

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
