"use client";
import CustomSelect from "@/app/components/CustomSelect";
import { Button } from "@nextui-org/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Image from "next/image";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useRouter } from "next/navigation";
import { Role, useDashboardStore } from "@/store/dashboard/dashboardStore";
import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { createClient } from "@/lib/utils/supabase/auth/client";

type Props = {
  open: boolean;
};
function HowToSwitch({ open }: Props) {
  const [_open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useAppStore();
  const router = useRouter();
  const { firstTimeRole, setFirstTimeRole } = useDashboardStore();
  const { onOpen } = useToastDisclosure();
  const supabase = createClient();

  useEffect(() => {
    setOpen(open);
  }, [open]);

  const handleFirstTimeUpdate = async () => {
    const { error, data } = await supabase
      .from("profiles")
      .update({ is_first_time: false })
      .eq("id", user?.id as string)
      .select("is_first_time")
      .single();

    if (data) {
      setUser({ ...user, is_first_time: data.is_first_time });
    }

    if (error) {
      console.log(error);
    }
  };

  const handleRoleIfFirstTime = () => {
    if (firstTimeRole) {
      router.push(`/dashboard/${firstTimeRole}/settings`);
      onOpen("Please complete your profile");
      setTimeout(() => {
        setFirstTimeRole(undefined);
      }, 300);
    }
  };

  return (
    <Dialog.Root open={_open}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`data-[state=open]:animate-overlayShow fixed inset-0 bg-[#02020275] `}
        />
        <Dialog.Content
          className={`data-[state=open]:animate-contentShow hidden-scrollbar fixed left-[50%]  top-[50%] z-[1000] max-h-[584px] w-[90vw] max-w-[666px]  translate-x-[-50%] ${"overflow-y-scroll"} translate-y-[-50%] rounded-xl bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none `}
        >
          <div className={`relative z-[1001]`}>
            <div className="shadow-[0px_4px_6px_-2px_rgba(0,  0, 0, 0.03] flex h-full w-full flex-col items-center justify-center gap-8 rounded-lg bg-white px-5 py-4 lg:px-12">
              <div className="flex w-full items-center justify-start gap-3 lg:gap-5">
                <IoMdInformationCircleOutline size={24} color="#DDB771" />
                <p>Notice</p>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-1">
                <p className="text-[1.25rem] font-bold">
                  You can switch between portals using the “Switch Dropdown” in
                  the navigation menu
                </p>
                <div className="relative  h-[278px] w-full">
                  <Image
                    src={"/assets/images/dasboard-switch.png"}
                    fill
                    alt="how to"
                    objectFit="cover"
                    objectPosition="right"
                  />
                </div>
              </div>
              <div className="mt-8 flex w-full justify-center">
                <Button
                  isLoading={loading}
                  className="flex h-[52px] w-full max-w-[151px] items-center justify-center rounded-lg bg-[#073B3A] font-semibold text-white"
                  role="button"
                  onClick={() => {
                    setOpen(false);
                    handleFirstTimeUpdate();
                    handleRoleIfFirstTime();
                    setLoading(true);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setOpen(false);
                      handleFirstTimeUpdate();
                      handleRoleIfFirstTime();
                      setLoading(true);
                    }
                  }}
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default HowToSwitch;
