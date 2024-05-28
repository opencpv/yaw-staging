import Button from "@/components/__shared/ui/button/Button";
import { cn } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PaymentData } from "../types";
import useCartStore from "@/store/cart/useCartStore";
import { useRouter } from "next/navigation";
import { invoiceStore } from "@/store/payment/invoiceStore";

type Props = {
  affix?: number;
  items?: PaymentData[];
};

function CheckoutButton({ affix, items }: Props) {
  const { addItem } = useCartStore();
  const { invoiceItems } = invoiceStore();
  const router = useRouter();
  return (
    <Button
      color="accent"
      className="relative w-full"
      onClick={() => {
        if (invoiceItems) {
          invoiceItems?.forEach((item) => {
            addItem({
              name: item.service,
              cost: item.amount,
              quantity: 1,
              date: item.billing_date,
              isQuantityChangable: false,
              isInvoice: true,
              invoiceId: item.id as number,
              tax_rate: item.tax_rate,
            });
          });
          router.push("/cart");
        }
      }}
    >
      Checkout Now{" "}
      <span
        className={cn(
          "absolute right-[10%] top-3 flex size-5 items-center justify-center rounded-full bg-white text-sm text-accent max-xxs:hidden lg:right-[22%] lg:top-2.5",
          {
            hidden: !affix,
          },
        )}
      >
        <motion.span key={affix} initial={{ y: 5 }} whileInView={{ y: 0 }}>
          {affix}
        </motion.span>
      </span>
    </Button>
  );
}

export default CheckoutButton;
