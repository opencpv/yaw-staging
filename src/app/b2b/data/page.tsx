import { cookies } from "next/headers";
import InvoiceReceiptFilter from "../components/__shared/InvoiceReceiptFilter";
import { redirect } from "next/navigation";

function Page() {
  const customerId = cookies().get("ycust-id")?.value;
  if (!customerId) {
    redirect("/b2b");
  }
  return (
    <main className="wrapper">
      <InvoiceReceiptFilter customerId={customerId} />
    </main>
  );
}

export default Page;
