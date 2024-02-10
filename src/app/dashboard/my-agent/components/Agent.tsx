import Image from "next/image";
import EditModal from "./EditModal";
import CaAgentTickGreenBg from "./icons/CaAgentTickGreenBg";
import AgentButtons from "./Button";
import Link from "next/link";
import Button from "@/components/__shared/ui/button/Button";

type Props = {
  state: "started" | "not started" | "completed";
  name: string;
  dateCreated?: string;
  dateCompleted?: string;
};

export default function Agent({
  state,
  name,
  dateCreated,
  dateCompleted,
}: Props) {
  return (
    <div className="flex h-full w-full max-w-[543px] flex-col items-start justify-center gap-4 rounded-2xl border border-[#E6E6E6] px-8 py-6">
      <div className="flex w-full flex-wrap justify-between gap-5">
        <Image
          src={"/assets/svgs/agent-icon-handshake.svg"}
          width={100}
          height={100}
          alt="A house inside a hand"
          className="h-[70px] w-[70px] sm:h-[100px] sm:w-[100px]"
        />
        {state === "not started" ? (
          <AgentButtons content="Get Started" variant={"green-dark"} />
        ) : state === "completed" ? (
          <AgentButtons
            content="View"
            variant={"explore"}
            className="min-w-fit xsm:min-w-[8rem]"
          />
        ) : (
          <EditModal />
        )}
      </div>
      <div className="space-y-1">
        <h3 className="font-semibold">{name}</h3>
        <p className="flex items-center gap-1 text-shade-200">
          Date Created :
          <span>
            {state === "not started" ? (
              <div className="group flex w-fit flex-col gap-1">
                <Button variant="ghost" href="" className="mt-1 flex-1">
                  Not started
                </Button>
                <div className="h-0 w-0 flex-1 border-b border-neutral-800 transition-all group-hover:h-[1px] group-hover:w-full"></div>
              </div>
            ) : state === "started" ? (
              <div className="group flex w-fit flex-col gap-1">
                <Button variant="ghost" href="" className="mt-1 flex-1">
                  Continue
                </Button>
                <div className="h-0 w-0 flex-1 border-b border-neutral-800 transition-all group-hover:h-[1px] group-hover:w-full"></div>
              </div>
            ) : (
              dateCreated
            )}
          </span>
        </p>
        {state !== "not started" && (
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 xs:pt-2">
            <div className="flex items-center gap-2 rounded-full bg-[#F1F1F1] px-2 py-1.5">
              <CaAgentTickGreenBg />
              <p>Completed</p>
            </div>
            <p className="text-shade-200">{dateCompleted}</p>
          </div>
        )}
      </div>
    </div>
  );
}
