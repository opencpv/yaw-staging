import Cost from "./Cost";
import DataRow from "./DataRow";
import { invoiceData } from "./content";
import DownloadButton from "./DownloadButton";
import DataRowSm from "./DataRowSm";
import CheckoutButton from "./CheckoutButton";
import YellowCheckBox from "./YellowCheckbox";
import {
  Table,
  TableBodyRowGroup,
  TableBodySm,
  TableHeader,
  TableHeaderRow,
  TableRowSm,
  TableSm,
} from "@/app/dashboard/components/shared/table/Table";

function Invoices() {
  return (
    <div className="relative flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h2>All Invoices</h2>
        <h4 className="font-normal">
          Effortlessly handle your invoices right here
        </h4>
      </div>
      <div className="flex w-full justify-end lg:hidden">
        <Cost subTotal={200} tax={12} total={2000} variant={"invoice"} />
      </div>
      <div className="flex flex-col gap-1 lg:border-[1px] lg:border-shade-50">
        <div className="flex w-full items-center gap-5 ">
          <div className="hidden p-2.5 lg:invisible ">
            <YellowCheckBox />
          </div>{" "}
        </div>
        <Table>
          <TableHeaderRow className="grid-cols-7" gap="2rem">
            <TableHeader className="col-span-1">ck</TableHeader>
            <TableHeader className="col-span-1">Invoice Id</TableHeader>
            <TableHeader className="col-span-1">Service</TableHeader>
            <TableHeader className="col-span-1">Billing Date</TableHeader>
            <TableHeader className="col-span-1">Amount</TableHeader>
            <TableHeader className="col-span-1">Status</TableHeader>
            <TableHeader className="col-span-1">Actions</TableHeader>
          </TableHeaderRow>
          <TableBodyRowGroup>
            {invoiceData?.map((r: any) => (
              <DataRow
                key={new Date().toString()}
                data={r}
                variant="invoice"
                index={new Date().toString()}
              />
            ))}
          </TableBodyRowGroup>
        </Table>
        <TableSm>
          {invoiceData?.map((r: any) => (
            <DataRowSm
              key={new Date().toString()}
              data={r}
              variant="invoice"
              index={new Date().toString()}
            />
          ))}
        </TableSm>
      </div>

      <div className="hidden w-full items-center justify-start bg-[#F8F8F8] py-5 lg:flex">
        <DownloadButton maxWidth="fit" />
      </div>
      <div className="sticky bottom-0 grid w-full grid-cols-2 items-center justify-end gap-1 bg-[#F8F8F8] py-5 pb-2 lg:hidden">
        <DownloadButton maxWidth="fit" />
        <CheckoutButton />
      </div>

      <div className="x hidden w-full flex-col items-end justify-center gap-6 py-5 lg:flex">
        <Cost subTotal={200} tax={12} total={2000} variant={"invoice"} />
        <div className="hidden w-full justify-end lg:flex">
          <CheckoutButton />
        </div>{" "}
      </div>
    </div>
  );
}

export default Invoices;
