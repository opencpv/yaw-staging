"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import capitalizeName from "@/lib/utils/stringManipulation";
import { route } from "@/lib/utils/routes";
import { client } from "@/lib/utils/sanity/client";
import { Button } from "antd";
import axios from "axios";
import Loader from "@/components/__shared/loader/Loader";
import type { TableProps } from "antd";
import { Space, Table, Tag } from "antd";
import Spinner from "@/app/dashboard/components/shared/Spinner";
const { Column, ColumnGroup } = Table;
import { CSVDownload, CSVLink } from "react-csv";
interface DataType {
  id: number;
  contact: string;
  created_at: string;
  contact_is_email: boolean;
  subscribed: boolean;
  campaign: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Id",
    key: "index",
    render: (text, record, index) => index + 1,
  },
  {
    title: "Campaign",
    dataIndex: "campaign",
    render: (text, record, index) => record.campaign.toUpperCase(),
  },
  {
    title: "Contact 1",
    dataIndex: "contact",
    key: "contact  ",
  },
  {
    title: "Contact Type",
    dataIndex: "contact_is_email",
    render: (text, record, index) =>
      record.contact_is_email ? "EMAIL" : "PHONE",
  },
  {
    title: "Subscribed",
    dataIndex: "subscribed",
    render: (text, record, index) => (record.subscribed ? "YES" : "NO"),
  },
  {
    title: "Date",
    dataIndex: "created_at",
    render: (text, record, index) => record.created_at.split("T")[0],
  },
];

const PageView = () => {
  const tableRef = useRef<any>();
  const [selectedKeys, setSelectedKeys] = useState<any>(new Set(["all"]));

  const [exportType, setexportType] = useState([
    { key: "csv", label: "CSV" },
    { key: "pdf", label: "PDF" },
  ]);

  const [selectedExportTypeKey, setSelectedExportTypeKey] = useState<any>(
    new Set(["csv"]),
  );
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );
  const selectedExportValue = useMemo(
    () => Array.from(selectedExportTypeKey).join(", ").replaceAll("_", " "),
    [selectedExportTypeKey],
  );

  useEffect(() => {}, [selectedValue]);
  const {
    isLoading,
    error,
    data: categories,
  } = useQuery({
    queryKey: ["subscriberCategories"],
    queryFn: async () => {
      const subCategories = await axios.get(route.subscribersCategories);
      return subCategories.data.data;
    },
  });
  const {
    isPending: isSubsLoading,
    error: subError,
    data,
    refetch: refetchSubs,
  } = useQuery({
    queryKey: ["subscribersData", selectedValue],
    queryFn: () =>
      fetch(`${route.subscribersData}?filter=${selectedValue || "all"}`).then(
        (res) => res.json(),
      ),
  });

  useEffect(() => {
    refetchSubs(); // Refetch feedback data when selected value changes
  }, [selectedValue, refetchSubs]);

  useEffect(() => {}, [data]);
  const FeedbackTypeFilterButton = ({ loading }: { loading: boolean }) => (
    <Dropdown>
      <DropdownTrigger>
        <Button
          className=" bg-blue-600 font-bold text-white"
          color="primary"
          loading={loading}
        >
          {capitalizeName(selectedValue)}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="feedback filter"
        variant="bordered"
        disallowEmptySelection
        selectionMode="single"
        items={categories}
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {(item: any) => (
          <DropdownItem key={item.key} color={"default"} className={""}>
            {capitalizeName(item.label)}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );

  return (
    <div className="h-[100vh]">
      <h2 className="mb-8 text-3xl font-bold">Subscribers</h2>
      <div className="items-cente mb-8 flex h-fit justify-between">
        <div className="flex items-center gap-8">
          <p>Filter</p>
          <FeedbackTypeFilterButton loading={isLoading} />
        </div>
        <div className="flex items-center gap-2">
          <CSVLink
            data={data || []}
            filename={`${new Date().toLocaleDateString()}-subscribers.csv`}
          >
            <Button loading={data == null || data == undefined}>
              Download CSV
            </Button>
          </CSVLink>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        ref={tableRef}
        loading={data == null || (data == undefined && isLoading)}
      />
    </div>
  );
};

export default PageView;
