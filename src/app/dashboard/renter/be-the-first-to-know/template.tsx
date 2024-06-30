import ScrollTop from "@/components/__shared/ui/ScrollTop";
import { headers } from "next/headers";
import { cn } from "@/lib/utils";

const BeTheFirstToKnowLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const headerList = headers();
  const pathname = headerList.get("x-pathname") || "";

  return (
    <main
      className={cn("min-h-screen", {
        "bg-shade":
          pathname === "/dashboard/renter/be-the-first-to-know/manage-criteria",
      })}
    >
      <div className="wrapper">
        <h2 className="mb-8 capitalize">Be the first to Know</h2>
        {children}
        <ScrollTop />
      </div>
    </main>
  );
};

export default BeTheFirstToKnowLayout;
