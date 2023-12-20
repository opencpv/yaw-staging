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
      <div className="w-full border-[1px] rounded-md py-5 px-3 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="flex items-center justify-center h-20 w-20 bg-[#027F7C] rounded-md">
              <CaCartItem />
            </div>
            <div>
              <p className="font-semibold mb-2">{item.name}</p>
              <p className="text-[#8A8A8A] mb-2">GHS {item.cost}</p>
              {item.isQuantityChangable ? (
                <div className="flex gap-4 items-center">
                  <p className="">Qty</p>
                  <DropDown item={item} item_index={item_index} />
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex items-center ">
            {item.date ? (
              <p className="hidden lg:block px-6  text-center mx-4 font-semibold  bg-[#FBE9C8] py-2 rounded-xl">
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
          <p className="lg:hidden text-center mx-8 mt-6 font-semibold bg-[#FBE9C8] py-2 rounded-xl">
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
          className="flex items-center gap-2 bg-[#F1F1F1]  rounded-full py-2 px-4"
          aria-label="modify item quantity"
        >
          <p className="text-[10px]">{item.quantity}</p>
          <CaDropdownArrow />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-[#F1F1F1] py-2 px-8 rounded-xl text-[10px]"
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
    <section
      className={`max-w-[1024px] mx-auto px-4 lg:px-0 py-6 ${openSans.className}`}
    >
      <h1 className={`text-[20px] mb-8`}>My Cart</h1>
      <div className="flex justify-end">
        {/* clear cart button */}
        <button
          className="text-right text-[#E32636] mb-8"
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
          <div className="flex gap-2 mb-16">
            <input
              type="text"
              className="border-[1px] flex-auto text-[#AD842A] uppercase px-4 rounded-sm  outline-none"
            />
            <button className="px-10 py-4 w-fit text-[#AD842A] border-2 border-[#AD842A] rounded-md">
              Apply
            </button>
          </div>
          <div className="flex justify-between items-center px-8 py-3 bg-[#F5F5F5] mb-4">
            <p className="font-semibold">Subtotal</p>
            <p className="font-semibold text-[20px]">
              GHS {getTotalPrice(items)}
            </p>
          </div>
          <div className="flex justify-between items-center text-[13px] px-8 py-3 text-[#545454] mb-4">
            <p className="">Items</p>
            <p className="">{items.length}</p>
          </div>

          <button className="text-white font-semibold py-4 bg-[#DDB771] rounded-md w-full">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartView;
