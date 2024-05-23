import SearchInput from "@/components/__shared/ui/form/SearchInput";
import DownloadButton from "../__shared/DownloadButton";
import ReceiptTable from "../receipt/ReceiptTable";

function Receipts() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h2>All Receipts</h2>
        <h4 className="font-normal">
          Effortlessly handle your receipts right here
        </h4>
        <SearchInput onSearch={() => {}} onChange={() => {}} className="mt-5" />
      </div>
      <ReceiptTable />
      <div className="hidden w-full items-center justify-end lg:flex">
        {/* <DownloadButton maxWidth="fit" /> */}
      </div>

      <div className="sticky bottom-0 w-full items-center justify-end gap-5 bg-[#F8F8F8] pb-3 lg:hidden">
        {/* <DownloadButton /> */}
      </div>
    </div>
  );
}

export default Receipts;
