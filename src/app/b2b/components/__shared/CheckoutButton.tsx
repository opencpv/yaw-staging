import Button from "@/components/__shared/ui/button/Button";
import { cn } from "@nextui-org/react";
import { motion } from "framer-motion";

type Props = {
  affix?: number;
};

function CheckoutButton({ affix }: Props) {
  return (
    <Button color="accent" className="w-full">
      Checkout Now{" "}
      <span
        className={cn(
          "flex size-5 items-center justify-center rounded-full bg-white text-sm text-accent",
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
