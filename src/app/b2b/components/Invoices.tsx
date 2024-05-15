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
import { Formik } from "formik";
import Checkbox from "@/app/dashboard/components/shared/ui/Checkbox";

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
        <Formik initialValues={{}} onSubmit={() => {}}>
          <Table>
            <TableHeaderRow className="grid-cols-6" gap="2rem">
              <TableHeader className="col-span-1">
                <Checkbox
                  name="check-all"
                  color="white"
                  className="relative left-1"
                  classNames={{ checkIcon: "text-primary" }}
                />{" "}
              </TableHeader>
              <TableHeader className="col-span-1">Invoice Id</TableHeader>
              <TableHeader className="col-span-1">Service</TableHeader>
              <TableHeader className="col-span-1">Billing Date</TableHeader>
              <TableHeader className="col-span-1">Amount</TableHeader>
              <TableHeader className="col-span-1">Actions</TableHeader>
            </TableHeaderRow>
            <TableBodyRowGroup>
              {invoiceData?.map((r: any) => (
                <DataRow
                  key={crypto.randomUUID()}
                  data={r}
                  variant="invoice"
                  index={crypto.randomUUID()}
                />
              ))}
            </TableBodyRowGroup>
          </Table>
        </Formik>
        {/* Mobile */}
        <TableSm>
          {invoiceData?.map((r: any) => (
            <DataRowSm
              key={crypto.randomUUID()}
              data={r}
              variant="invoice"
              index={crypto.randomUUID()}
            />
          ))}
        </TableSm>
      </div>

      <div className="hidden w-full justify-between gap-5 bg-[#F8F8F8] py-5 lg:flex">
        <DownloadButton maxWidth="fit" />
        <div>
          <Cost subTotal={200} tax={12} total={2000} variant={"invoice"} />
          <div className="mt-8 max-lg:hidden">
            <CheckoutButton />
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 grid w-full grid-cols-2 items-center justify-end gap-5 bg-[#F8F8F8] py-5 pb-2 max-lg:max-w-2xl xs:gap-10 lg:hidden">
        <DownloadButton maxWidth="fit" />
        <CheckoutButton />
      </div>
    </div>
  );
}

export default Invoices;
