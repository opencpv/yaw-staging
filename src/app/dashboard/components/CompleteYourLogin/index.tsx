"use client";
import CustomSelect from "@/app/components/CustomSelect";
import styles from "./index.module.css";
import { Button } from "@nextui-org/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { Role, useDashboardStore } from "@/store/dashboard/dashboardStore";
import HowToSwitch from "../HowToSwitch";

type Props = {
  open?: boolean;
};

const initialValues = {
  role: "Renter",
};

function CompleteYourLogin({ open }: Props) {
  const [_open, setOpen] = useState(false);
  const [howToSwitchOpen, setHowToSwitchOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setFirstTimeRole } = useDashboardStore();

  useEffect(() => {
    setOpen(open as boolean); // open when is_first_time is true
  }, [open]);

  return (
    <>
      <Dialog.Root open={_open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay
            className={`data-[state=open]:animate-overlayShow fixed inset-0 bg-blackA6 ${styles.login_sub_root}`}
          />
          <Dialog.Content
            className={`data-[state=open]:animate-contentShow hidden-scrollbar fixed left-[50%]  top-[50%] z-[1000] max-h-[779px] w-[90vw] max-w-[799px] translate-x-[-50%] ${"overflow-y-scroll"} translate-y-[-50%] rounded-xl bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none `}
            onEscapeKeyDown={(e) => e.preventDefault()}
            onInteractOutside={(e) => e.preventDefault()}
            onPointerDownOutside={(e) => e.preventDefault()}
          >
            <div className={`relative z-[1001]`}>
              <div className={` w-full `}>
                <div
                  className={`flex h-full w-full items-center justify-center`}
                >
                  <div className="shadow-[0px_3px_48px_-12px_rgba(0, 0, 0, 0.10)] max-h-[360px] w-full max-w-[901px] rounded-xl border-[0.5px] border-[#B0B0B0] px-6 py-8">
                    <div className="flex w-full flex-col gap-6">
                      <h1 className="text-3xl text-primary-400 sm:text-3xl">
                        Complete your registration
                      </h1>
                      <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => {
                          setLoading(true);
                          setOpen(false);
                          setHowToSwitchOpen(true);
                          setFirstTimeRole(values.role.toLowerCase() as Role); // resorting to firstTimeRole instead of CurrentRole
                          // on first time login
                        }}
                      >
                        <Form
                          className="flex flex-col gap-5"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                            }
                          }}
                        >
                          <CustomSelect
                            name="role"
                            label="I am a"
                            options={[
                              { name: "renter", value: "Renter" },
                              { name: "lister", value: "Lister" },
                              // { name: "service pro", value: "service Pro" }, // maybe future
                            ]}
                          />
                          <div className="flex w-full justify-end">
                            <Button
                              isLoading={loading}
                              type="submit"
                              className="flex h-[52px] w-full max-w-[151px] items-center justify-center rounded-lg bg-accent-50 px-8 py-4 font-semibold text-white"
                            >
                              Continue
                            </Button>
                          </div>
                        </Form>
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      {/* HowToSwitch modal */}
      <HowToSwitch open={howToSwitchOpen} />
    </>
  );
}

export default CompleteYourLogin;
