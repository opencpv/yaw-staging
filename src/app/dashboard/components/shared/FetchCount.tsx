import { useApplicationsStore } from "@/store/dashboard/applicationsStore";
import { useManagePropertiesStore } from "@/store/dashboard/propertiesStore";
import React from "react";

type Props = {
  data: "manage-properties" | "applications";
};

const FetchCount = ({ data }: Props) => {
  const fetchCountManageProperties = useManagePropertiesStore(
    (state) => state.fetchCount
  );
  const fetchCountApplications = useApplicationsStore(
    (state) => state.fetchCount
  );

  if (data === "manage-properties")
    return (
      <small className="inline-block text-sm capitalize">
        {fetchCountManageProperties &&
          `Showing ${
            (fetchCountManageProperties as number) > 9
              ? fetchCountManageProperties
              : `0${fetchCountManageProperties}`
          } ${fetchCountManageProperties > 1 ? "Results" : "Result"}`}
      </small>
    );

  if (data === "applications")
    return (
      <small className="inline-block text-sm capitalize">
        {fetchCountApplications &&
          `Showing ${
            (fetchCountApplications as number) > 9
              ? fetchCountApplications
              : `0${fetchCountApplications}`
          } ${fetchCountApplications > 1 ? "Results" : "Result"}`}
      </small>
    );
};

export default FetchCount;
