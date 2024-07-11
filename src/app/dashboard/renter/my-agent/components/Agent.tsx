import Image from "next/image";
import EditModal from "./EditModal";
import CaAgentTickGreenBg from "./icons/CaAgentTickGreenBg";
import AgentButtons from "./Button";
import Link from "next/link";
import Button from "@/components/__shared/ui/button/Button";
import BeMyAgentModal from "./steps/BeMyAgentModal";
import { ClientOnly } from "@/components/__shared/hoc/ClientOnly";
import { cn } from "@/lib/utils";
import {
  formatDateOnly,
  getDaysRemaining,
} from "@/lib/utils/stringManipulation";
import { FaHourglassHalf } from "react-icons/fa6";
import { useRouter } from "next/navigation";

type Props = {
  id: number;
  hasMatch: boolean;
  isActive: boolean;
  title: string;
  createdAt: string;
  isSelected?: boolean;
};

export default function Agent({
  isActive,
  title,
  createdAt,
  isSelected,
  hasMatch,
  id,
}: Props) {
  const router = useRouter();
  //const daysRemaining = getDaysRemaining()

  const handleClick = () => {
    if (isActive) {
      router.push(`?a=${id}`, { scroll: false });
    }
  };

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-start justify-center gap-4 rounded-2xl px-8 py-6",
        {
          "border-primary bg-shade": isSelected,
          "cursor-default border": isActive === false,
          "form-field-border cursor-pointer": isActive,
        },
      )}
      onClick={handleClick}
      aria-label="Agent"
      role="button"
    >
      <div className="flex w-full flex-wrap justify-between gap-y-5">
        <Image
          src={"/assets/svgs/agent-icon-handshake.svg"}
          width={100}
          height={100}
          alt=""
          className="mr-auto h-[70px] w-[70px] sm:h-[100px] sm:w-[100px]"
        />
        {isActive ? (
          <Button className="bg-shade-50 px-4 text-shade-200">Summary</Button>
        ) : (
          <ClientOnly>
            <BeMyAgentModal button="Edit" />
          </ClientOnly>
        )}
      </div>
      <div className="space-y-1">
        <h3>{title}</h3>
        <p className="flex items-center gap-1 text-shade-200">
          <span className="font-medium">Date Created</span> :
          <span>
            {isActive === false ? (
              <ClientOnly>
                <BeMyAgentModal
                  button="Ghost"
                  content="Continue"
                  buttonClassName="mt-1 flex-1 text-base text-primary underline underline-offset-2 font-normal"
                />
              </ClientOnly>
            ) : (
              <>Wed Jul 10 2024 15:45:39</>
              //formatDateOnly(createdAt)
            )}
          </span>
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 xs:pt-2">
          <div className="flex items-center gap-2 rounded-full bg-secondary-50 px-2 py-1">
            {hasMatch && isActive && (
              <>
                <CaAgentTickGreenBg />
                <p>Match</p>
              </>
            )}
            {hasMatch === false && isActive && (
              <>
                <FaHourglassHalf />
                <p>Pending</p>
              </>
            )}
          </div>

          {isActive && <p className="text-shade-200">{"9 days remaining"}</p>}
        </div>
      </div>
    </div>
  );
}
