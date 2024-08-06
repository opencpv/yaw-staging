"use client";
import { useApplicationsStore } from "@/store/dashboard/applicationsStore";
import RtManageApplicationsTable from "./RtManageApplicationsTable";
import { SanityDocument } from "next-sanity";
import CallOut from "@/components/__shared/ui/CallOut";
import { useCurrentUserId } from "@/lib/custom-hooks/useCurrentUserId";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/utils/supabase/auth/client";
import { useQuery } from "@tanstack/react-query";
import { usePagination } from "@nextui-org/react";
import Archived from "@/app/dashboard/components/shared/table/Archived";

type Props = {
  bubblesData: SanityDocument;
};
const ApplicationsPageView = ({ bubblesData }: Props) => {
  const supabase = createClient();
  const id = useCurrentUserId();
  const {
    data: applicationsData,
    error,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["user_applications"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("property_application")
        .select("*,property(*,owner_uid(*))");
      // .eq("user", id); // TODO: fetch only needed columns
      if (error) {
        throw new Error("Error fetching data");
      }
      console.log(data);
      return data;
    },
  });

  return (
    <main className="text-neutral-800">
      <section className="mb-6 space-y-5">
        <h2>Applications</h2>
        <CallOut className="mb-6 h-fit w-full transition-all sm:w-10/12">
          <div className="flex items-center gap-5">
            <div className="space-y-1">
              <small style={{ whiteSpace: "pre-line" }}>
                {/* {bubblesData?.renter_overview || ""} */}
                Applicant will be notified of status change. Message potential
                renters directly to discuss next steps
              </small>
            </div>
          </div>
        </CallOut>
      </section>
      <RtManageApplicationsTable
        data={applicationsData as any[]}
        loading={isLoading}
        refetch={refetch}
      />
      {/* Small screen view */}
      {/* <RtManageApplicationsTable /> */}
    </main>
  );
};

export default ApplicationsPageView;
