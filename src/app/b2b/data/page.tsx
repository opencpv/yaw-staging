import { cookies } from "next/headers";
import InvoiceReceiptFilter from "../components/__shared/InvoiceReceiptFilter";
import { redirect } from "next/navigation";
import { Suspense } from "react";

function Page() {
  const customerId = cookies().get("ycust-id")?.value;
  if (!customerId) {
    redirect("/b2b");
  }
  return (
    <main className="wrapper">
      <Suspense>
        <InvoiceReceiptFilter customerId={customerId} />
      </Suspense>
    </main>
  );
}

export default Page;
