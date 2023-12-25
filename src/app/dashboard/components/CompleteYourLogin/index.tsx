"use client";
import CustomSelect from "@/app/components/CustomSelect";
import styles from "./index.module.css";
import { Button } from "@nextui-org/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

type Props = {
  open?: any;
  dashboard: boolean;
  setOpen?: any;
};
function CompleteYourLogin({ open, dashboard, setOpen }: Props) {
  const [dashboardType, setDashboardType] = useLocalStorage("dashboard-type");

  const handleClick = () => {
    setOpen(false);
  };
  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger asChild>
        <Button className="bg-white">
          {!dashboard && <p>Complete Your Login</p>}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 ${styles.login_sub_root}`}
        />
        <Dialog.Content
          className={`data-[state=open]:animate-contentShow fixed top-[50%] left-[50%]  w-[90vw] translate-x-[-50%] z-[1000] max-w-[799px] max-h-[779px] hidden-scrollbar ${"overflow-y-scroll"} translate-y-[-50%] rounded-xl bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none `}>
          <div className={`relative z-[1001]`}>
            <div className={` w-full `}>
              <div className={`flex items-center justify-center w-full h-full`}>
                <div className="w-full max-w-[901px] max-h-[360px] rounded-xl border-[0.5px] border-[#B0B0B0] shadow-[0px_3px_48px_-12px_rgba(0, 0, 0, 0.10)] px-6 py-8">
                  <div className="w-full flex flex-col gap-6">
                    <p className="text-primary-400 text-[1.9375rem] font-bold">
                      Complete your registration
                    </p>
                    <CustomSelect
                      onChange={(value) => {
                        setDashboardType(value);
                      }}
                      placeholder="Renter"
                      label="What is your role?"
                      options={[
                        { name: "Renter", value: "Renter" },
                        { name: "Renter", value: "Renter" },
                        { name: "Renter", value: "Renter" },
                      ]}
                    />
                    <div className="w-full  flex justify-end">
                      <Button
                        className="w-full max-w-[151px] h-[52px] px-8 py-4 text-white font-semibold flex items-center justify-center rounded-lg bg-accent-50"
                        onClick={handleClick}>
                        Continue
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>

          <Dialog.Close asChild>
            {/* <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[20px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none z-[4000]"
              aria-label="Close">
              <ModalCloseIcon />
            </button> */}
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default CompleteYourLogin;
