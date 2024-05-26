"use client";
import useCartStore from "@/store/cart/useCartStore";
import { CartProp } from "../../../../interfaces";
import CaCartItem from "@/components/__shared/ui/icons/CaCartItem";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import CaDropdownArrow from "@/components/__shared/ui/icons/CaDropdownArrow";
import DeleteIconButton from "@/components/__shared/ui/button/DeleteIconButton";
import Button from "@/components/__shared/ui/button/Button";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { cn } from "@nextui-org/react";
import DeleteButton from "@/components/__shared/ui/button/DeleteButton";
import { formatDateOnly } from "@/lib/utils/stringManipulation";

const CartView = () => {
  const {
    items,
    addItem,
    removeItem,
    getTotalPrice,
    clearCart,
    updateQuantity,
  } = useCartStore();

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
                  handleDestruction={() => {
                    removeItem(item_index);
                  }}
                  className="rounded-md bg-secondary-50 p-4 ssm:hidden"
                  classNames={{
                    icon: "text-red-500",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {item.date ? (
              <Date className="max-md:hidden" date={item.date} />
            ) : null}
            <DeleteButton
              handleDestruction={() => {
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
        <button
          className="flex items-center gap-2 rounded-full bg-secondary-50  px-4 py-2 focus:outline-accent"
          aria-label="modify item quantity"
        >
          <p className="text-[10px]">{item.quantity}</p>
          <CaDropdownArrow />
        </button>
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

  return (
    <section className={`mx-auto max-w-[1024px] px-4 py-6 lg:px-0`}>
      <h2 className="mb-8">My Cart</h2>
      <div className="flex justify-end">
        {/* clear cart button */}
        <Button
          variant="ghost"
          className="mb-8 text-right font-normal text-[#E32636] underline"
          onClick={() => {
            clearCart();
          }}
        >
          Remove all
        </Button>
      </div>
      <div className="mb-16">
        {items.map((item, index) => (
          <CartItem item={item} key={index} item_index={index} />
        ))}
      </div>
      <div className="ml-auto max-w-sm">
        <div className="w-full">
          <h4 className="mb-4 font-normal text-shade-200">Discount Code</h4>
          <div className="mb-16 flex flex-wrap gap-2">
            <input
              type="text"
              className="min-h-[40px] flex-1 rounded-sm border-[1px] px-4 uppercase text-[#AD842A] outline-none"
            />
            <Button
              variant="outline"
              className="border border-[#AD842A] text-[#AD842A]"
            >
              Apply
            </Button>
          </div>
          <div className="mb-4 flex items-center justify-between bg-[#F5F5F5] px-8 py-3">
            <h5>Subtotal</h5>
            <p className="font-semibold">{formatPrice(getTotalPrice(items))}</p>
          </div>
          <div className="mb-4 flex items-center justify-between px-8 py-3 text-[13px] text-[#545454]">
            <p>Items</p>
            <p>{items.length}</p>
          </div>

          <Button href="/checkout" color="accent" className="w-full">
            Checkout
          </Button>
        </div>
      </div>
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
      {formatDateOnly(date)}
    </p>
  );
};
