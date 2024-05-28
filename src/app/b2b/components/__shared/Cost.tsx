import { formatPrice } from "@/lib/utils/numberManipulation";

type Props = {
  subTotal: number;
  tax: number;
  total: number;
  variant: "invoice" | "receipt";
  taxRate?: number;
};

type CostRowProps = {
  label: string;
  cost: number;
};

const CostRow = ({ label, cost }: CostRowProps) => {
  return (
    <div className="grid grid-cols-2 justify-between gap-10 xs:gap-20">
      <h4 className="font-bold capitalize text-shade-300">{label}</h4>
      <p className="text-right text-shade-300">
        <span className="font-bold ">GHS</span>{" "}
        <span className="font-semibold">{formatPrice(cost, false)}</span>
      </p>
    </div>
  );
};
function Cost({ subTotal, tax, total, variant, taxRate }: Props) {
  return (
    <div className="flex w-fit flex-col gap-2.5">
      <div className="flex flex-col gap-5">
        <CostRow label="subtotal" cost={subTotal} />
        <hr />
        <CostRow label={`Tax`} cost={tax} />
        <hr />
        <CostRow label="total" cost={total} />
      </div>
      <div className="mt-1 grid grid-cols-2 justify-between gap-10 border-y-[1.5px] border-accent py-2.5 text-accent xs:gap-20">
        <p className="font-bold capitalize">
          {variant == "invoice" ? "Amount Due" : "Amount Paid"}
        </p>
        <p className="text-right">
          <span className="font-bold">GHS</span>{" "}
          <span className="font-semibold">
            {formatPrice(subTotal ? total : 0, false)}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Cost;
