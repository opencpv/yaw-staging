import useCartStore from "@/store/cart/useCartStore";
import { CartProp } from "../../../../interfaces";
import { openSans } from "@/styles/font";
import CaCartItem from "@/app/components/icons/CaCartItem";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import CaDropdownArrow from "@/app/components/icons/CaDropdownArrow";
import DeleteIconButton from "@/app/components/buttons/DeleteIconButton";

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
      <div className="mb-6 w-full rounded-md border-[1px] px-3 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-md bg-[#027F7C]">
              <CaCartItem />
            </div>
            <div>
              <p className="mb-2 font-semibold">{item.name}</p>
              <p className="mb-2 text-[#8A8A8A]">GHS {item.cost}</p>
              {item.isQuantityChangable ? (
                <div className="flex items-center gap-4">
                  <p className="">Qty</p>
                  <DropDown item={item} item_index={item_index} />
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex items-center ">
            {item.date ? (
              <p className="mx-4 hidden rounded-xl  bg-[#FBE9C8] px-6 py-2  text-center font-semibold lg:block">
                {item.date}
              </p>
            ) : null}
            <DeleteIconButton
              onclick={() => {
                removeItem(item_index);
              }}
            />
          </div>
        </div>
        {item.date ? (
          <p className="mx-8 mt-6 rounded-xl bg-[#FBE9C8] py-2 text-center font-semibold lg:hidden">
            {item.date}
          </p>
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
          className="flex items-center gap-2 rounded-full  bg-[#F1F1F1] px-4 py-2"
          aria-label="modify item quantity"
        >
          <p className="text-[10px]">{item.quantity}</p>
          <CaDropdownArrow />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="rounded-xl bg-[#F1F1F1] px-8 py-2 text-[10px]"
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
      <h1 className={`mb-8 text-[20px]`}>My Cart</h1>
      <div className="flex justify-end">
        {/* clear cart button */}
        <button
          className="mb-8 text-right text-[#E32636]"
          onClick={() => {
            clearCart();
          }}
        >
          Remove all
        </button>
      </div>
      <div className=" mb-16">
        {items.map((item, index) => (
          <CartItem item={item} key={index} item_index={index} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        <div></div>
        <div></div>

        <div className="w-full">
          <p className="mb-4">Discount</p>
          <div className="mb-16 flex gap-2">
            <input
              type="text"
              className="flex-auto rounded-sm border-[1px] px-4 uppercase text-[#AD842A]  outline-none"
            />
            <button className="w-fit rounded-md border-2 border-[#AD842A] px-10 py-4 text-[#AD842A]">
              Apply
            </button>
          </div>
          <div className="mb-4 flex items-center justify-between bg-[#F5F5F5] px-8 py-3">
            <p className="font-semibold">Subtotal</p>
            <p className="text-[20px] font-semibold">
              GHS {getTotalPrice(items)}
            </p>
          </div>
          <div className="mb-4 flex items-center justify-between px-8 py-3 text-[13px] text-[#545454]">
            <p className="">Items</p>
            <p className="">{items.length}</p>
          </div>

          <button className="w-full rounded-md bg-[#DDB771] py-4 font-semibold text-white">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartView;
