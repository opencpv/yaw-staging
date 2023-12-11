type Props = {
  subTotal: string | number;
  tax: string | number;
  total: string | number;
};

type CostRowProps = {
  label: string;
  cost: string | number;
};

const CostRow = ({ label, cost }: CostRowProps) => {
  return (
    <div className="text-[0.625rem] flex justify-between items-center">
      <p className=" font-bold text-[#1A1C21] capitalize ">{label}</p>
      <p>
        <span className="text-shade-300 font-bold">GHS</span>{" "}
        <span className="text-[#5E6470] font-semibold">{cost}</span>
      </p>
    </div>
  );
};
function Cost({ subTotal, tax, total }: Props) {
  return (
    <div className="flex flex-col gap-2.5 max-w-[203px] w-full">
      <div className="gap-5 flex flex-col">
        <CostRow label="subtotal" cost={subTotal} />
        <CostRow label="tax (0%)" cost={tax} />
        <CostRow label="total" cost={total} />
      </div>
      <div className="text-[0.625rem] text-[#DDB771] py-2.5 border-y-[1.5px] border-[#DDB771] flex justify-between items-center">
        <p className=" font-bold  capitalize ">Amount Payable</p>
        <p>
          <span className=" font-bold">GHS</span>{" "}
          <span className=" font-semibold">{total}</span>
        </p>
      </div>
    </div>
  );
}

export default Cost;
