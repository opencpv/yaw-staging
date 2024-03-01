"use client";
import CustomSelect from "@/app/components/CustomSelect";
import styles from "./index.module.css";
import { Button } from "@nextui-org/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Form, Formik } from "formik";

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
          className={`data-[state=open]:animate-overlayShow fixed inset-0 bg-blackA6 ${styles.login_sub_root}`}
        />
        <Dialog.Content
          className={`data-[state=open]:animate-contentShow hidden-scrollbar fixed left-[50%]  top-[50%] z-[1000] max-h-[779px] w-[90vw] max-w-[799px] translate-x-[-50%] ${"overflow-y-scroll"} translate-y-[-50%] rounded-xl bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none `}
        >
          <div className={`relative z-[1001]`}>
            <div className={` w-full `}>
              <div className={`flex h-full w-full items-center justify-center`}>
                <div className="shadow-[0px_3px_48px_-12px_rgba(0, 0, 0, 0.10)] max-h-[360px] w-full max-w-[901px] rounded-xl border-[0.5px] border-[#B0B0B0] px-6 py-8">
                  <div className="flex w-full flex-col gap-6">
                    <p className="text-[1.9375rem] font-bold text-primary-400">
                      Complete your registration
                    </p>
                    <Formik initialValues={{}} onSubmit={() => {}}>
                      <Form>
                        <CustomSelect
                          name="role"
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
                        <div className="flex  w-full justify-end">
                          <Button
                            className="flex h-[52px] w-full max-w-[151px] items-center justify-center rounded-lg bg-accent-50 px-8 py-4 font-semibold text-white"
                            onClick={handleClick}
                          >
                            Continue
                          </Button>
                        </div>
                      </Form>
                    </Formik>
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
