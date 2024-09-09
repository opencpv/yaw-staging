"use client";
import useCartStore from "@/store/cart/useCartStore";
import { CartProp } from "../../../../interfaces";
import CaCartItem from "@/components/__shared/ui/icons/CaCartItem";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import CaDropdownArrow from "@/components/__shared/ui/icons/CaDropdownArrow";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/__shared/ui/button";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { invoiceStore } from "@/store/payment/invoiceStore";
import { customerStore } from "@/store/payment/customerStore";
import DeleteButton from "@/components/__shared/ui/button/delete-button";
import CaCartEmptyItem from "@/components/__shared/ui/icons/CaCartEmptyIcon";

const CartView = () => {
  const {
    items,
    addItem,
    removeItem,
    getTotalPrice,
    clearCart,
    updateQuantity,
    discountCode,
    setCart,
    setDiscountCode,
  } = useCartStore();
  const { checkoutItems } = invoiceStore();
  const [discount, setDiscount] = useState<string>();
  const [loading, setloading] = useState(false);
  const [usedDiscount, setusedDiscount] = useState(false);
  const supabaseClient = createClientComponentClient();
  const { customer } = customerStore();
  const router = useRouter();
  const tax = items.reduce(
    (acc, item) => acc + (item.tax_rate / 100) * item.cost,
    0,
  );
  const CartItem = ({
    item,
    item_index,
  }: {
    item: CartProp;
    item_index: number;
  }) => {
    return (
      <div className="mb-6 w-full rounded-md border-[1px] border-neutral-100 px-3 py-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4 max-sm:w-full xsm:flex-row">
            <div className="flex aspect-square max-h-24 w-20 items-center justify-center rounded-md bg-[#027F7C] xs:w-28">
              <CaCartItem />
            </div>
            <div className="flex-1">
              <h4 className="mb-2">{item.name}</h4>
              <p className="mb-2 text-shade-200">{formatPrice(item.cost)}</p>
              <div className="flex flex-wrap items-center justify-between gap-5">
                <div
                  className={cn("flex items-center gap-4", {
                    invisible: !item.isQuantityChangable,
                  })}
                >
                  <p>Qty</p>
                  <DropDown item={item} item_index={item_index} />
                </div>
                <DeleteButton
                  loading={false}
                  onDestruction={() => {
                    removeItem(item_index);
                  }}
                  className="ssm:hidden"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {item.date ? (
              <Date className="max-md:hidden" date={item.date} />
            ) : null}
            <DeleteButton
              loading={false}
              onDestruction={() => {
                removeItem(item_index);
              }}
              className="rounded-md bg-secondary-50 p-4 max-ssm:hidden"
              classNames={{
                icon: "text-red-500",
              }}
            />
          </div>
        </div>
        {/* mobile */}
        {item.date ? (
          <Date className="mt-6 md:hidden" date={item.date} />
        ) : null}
      </div>
    );
  };

  const DropDown = ({
    item,
    item_index,
  }: {
    item: CartProp;
    item_index: number;
  }) => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          className="bg-secondary-50 focus:outline-accent"
          radius={"full"}
          aria-label="modify item quantity"
        >
          <p className="text-[10px]">{item.quantity}</p>
          <CaDropdownArrow />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="rounded-xl bg-secondary-50 px-8 py-2 text-[10px]"
          sideOffset={5}
        >
          {Array.from(Array(12).keys())
            .map((n) => n + 1)
            .map((number, index) => (
              <DropdownMenu.Item
                key={index}
                className="py-1"
                onClick={() => {
                  updateQuantity(item_index, number);
                }}
              >
                {number}
              </DropdownMenu.Item>
            ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );

  // run useEffect on mount
  useEffect(() => {
    const storedCartItems: any = localStorage.getItem("cart");
    if (JSON.parse(storedCartItems as string)?.length > 0) {
      setCart(JSON.parse(storedCartItems as string));
      console.log("hit", storedCartItems);
    }
  }, [setCart]);
  {
    /** EC: "setCart" dependency missing. Please address missing deps or leave a comment if is intentional.
     * Please address similar instances.
     */
  }
  const isItemsEmpty = items.length == 0;
  return (
    <section className={`mx-auto max-w-[1024px] px-4 py-6 lg:px-0`}>
      <h2 className="mb-8">My Cart</h2>
      <div className="flex justify-end">
        {!isItemsEmpty && (
          <Button
            variant="ghost"
            className="mb-8 text-right text-error underline"
            onClick={() => {
              clearCart();
            }}
          >
            Remove all
          </Button>
        )}
      </div>
      {isItemsEmpty && (
        <div className="flex items-center justify-center border-[1px] p-8 md:p-32">
          <div className="flex flex-col items-center justify-center gap-4">
            <CaCartEmptyItem />
            <h2>No Cart</h2>
            <p>There are no items in your cart</p>
          </div>
        </div>
      )}
      <div className="mb-16">
        {items.map((item, index) => (
          <CartItem item={item} key={index} item_index={index} />
        ))}
      </div>
      {!isItemsEmpty && (
        <div className="ml-auto max-w-sm">
          <div className="w-full">
            <h4 className="mb-4 font-normal text-shade-200">Discount Code</h4>
            <div className="mb-16 flex flex-wrap gap-2">
              <input
                type="text"
                className="min-h-[40px] flex-1 rounded-sm border-[1px] px-4 text-[#AD842A] outline-none"
                onChange={(e) => setDiscount(e.target.value)}
              />
              <Button
                variant={"outline"}
                isLoading={loading}
                className="border-accent-200 text-accent-200"
                onClick={async () => {
                  setloading(true);
                  try {
                    // Fetch discount details from discounts table
                    const { data: discountData, error: discountError } =
                      await supabaseClient
                        .from("discounts")
                        .select("*")
                        .eq("code", discount);

                    if (discountError) throw discountError;
                    if (discountData.length === 0)
                      throw new Error("Discount code not found");

                    // Fetch customer discounts from customer_discounts table
                    const {
                      data: customerDiscountData,
                      error: customerDiscountError,
                    } = await supabaseClient
                      .from("customer_discounts")
                      .select("*")
                      .eq("code", discount)
                      .eq("email", customer.email);
                    if (customerDiscountError) throw customerDiscountError;

                    // Check if customer has the discount code
                    const hasCustomerDiscount = customerDiscountData.length > 0;
                    if (!hasCustomerDiscount) {
                      setDiscountCode(discountData[0]);
                    } else {
                      setDiscountCode({ code: null, rate: 0 });
                    }
                    setusedDiscount(hasCustomerDiscount);
                    console.log(customer.email);
                    setloading(false);
                  } catch (error: any) {
                    console.error("Error fetching data:", error.message);
                    setloading(false);
                    return { error: error.message };
                  }
                }}
              >
                Apply
              </Button>
              {usedDiscount ? (
                <p className="text-shade-200">Code already used</p>
              ) : (
                <>
                  {discountCode.code && (
                    <p className="text-shade-200">
                      {discountCode.rate * 100}% off on transaction
                    </p>
                  )}
                </>
              )}
            </div>
            <div className="mb-4 flex items-center justify-between bg-[#F5F5F5] px-8 py-3">
              <h5>Subtotal</h5>
              <p className="font-semibold">
                {formatPrice(getTotalPrice(items, discountCode))}
              </p>
            </div>
            <div className="mb-4 flex items-center justify-between px-8 py-3 text-[13px] text-[#545454]">
              <p>Tax</p>
              <p>
                GHS {discountCode.rate ? (1 - discountCode.rate) * tax : tax}
              </p>
            </div>
            <div className="mb-4 flex items-center justify-between bg-[#F5F5F5] px-8 py-3">
              <h5>Total</h5>
              <p className="font-semibold">
                GHS{" "}
                {getTotalPrice(items, discountCode) +
                  (discountCode.rate ? (1 - discountCode.rate) * tax : tax)}
              </p>
            </div>
            <Button
              size={"full"}
              className="bg-accent-200 font-bold"
              onClick={() => {
                localStorage.setItem("cart", JSON.stringify(items));
                router.push("/checkout");
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartView;

const Date = ({ className, date }: { className?: string; date: string }) => {
  return (
    <p
      className={cn(
        "mx-4 rounded-3xl bg-[#FBE9C8] px-2 py-2 text-center max-lg:mx-8 max-lg:ml-4 xsm:px-12 xs:max-w-fit lg:rounded-xl lg:px-6",
        className,
      )}
    >
      {date}
    </p>
  );
};
