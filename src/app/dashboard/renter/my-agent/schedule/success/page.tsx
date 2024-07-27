import { cookies } from "next/headers";
import React from "react";
import Button from "@/components/__shared/ui/button/Button";
import { redirect } from "next/navigation";
import Image from "next/image";

const page = async () => {
  const cookieStore = cookies();
  const scheduleInfo = cookieStore.get("bma-schedule-info")?.value;
  const matchId = scheduleInfo?.split(",")[0];
  const actionType = scheduleInfo?.split(",")[1];
  const previousPath = scheduleInfo?.split(",")[2];

  if (!matchId || !actionType || !previousPath) {
    redirect("/dashboard/renter/my-agent/agent");
  }

  return (
    <main className="fade-in-bottom grid min-h-[calc(100vh-10rem)] place-items-center px-5">
      <section className="flex max-w-xl flex-col items-center gap-8 text-center">
        <Image
          src="/assets/images/confetti.png"
          alt="confetti"
          width={50}
          height={50}
        />
        <div className="flex flex-col items-center gap-4">
          <h2>Success</h2>
          <p className="text-shade-300">
            Your meeting and rental request has been successfully processed. You
            will be contacted when the schedule is due. Thank you.
          </p>
        </div>
        <Button
          color="primary"
          href={previousPath || "/dashboard/renter/my-agent/agent"}
        >
          Go home
        </Button>
      </section>
    </main>
  );
};

export default page;
