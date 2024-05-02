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
import Loader from "@/components/__shared/ui/loader/Loader";
import type { TableProps } from "antd";
import { Space, Table, Tag } from "antd";
import Spinner from "@/app/dashboard/components/shared/Spinner";
const { Column, ColumnGroup } = Table;
import { CSVDownload, CSVLink } from "react-csv";
interface DataType {
  id: number;
  created_at: string;
  feedback_title: string;
  value_a: number;
  value_b: number;
  value_c: boolean;
  value_d: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Id",
    key: "index",
    render: (text, record, index) => index + 1,
  },
  {
    title: "Campaign",
    dataIndex: "feedback_title",
    render: (text, record, index) => record.feedback_title.toUpperCase(),
  },
  {
    title: "Question 1",
    dataIndex: "value_a",
    key: "value_a  ",
  },
  {
    title: "Question 2",
    dataIndex: "value_b",
    key: "value_b  ",
  },
  {
    title: "Question 3",
    dataIndex: "value_c",
    key: "value_c",
    render: (text, record, index) => (record.value_c ? "TRUE" : "FALSE"),
  },
  {
    title: "Question 4",
    dataIndex: "value_d",
    key: "value_d  ",
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
    queryKey: ["feedbackCategories"],
    queryFn: async () => {
      const feedbackCats = await axios.get(route.feedbackCategories);
      return feedbackCats.data.data;
    },
  });
  const {
    isPending: isFeedbackLoading,
    error: feedbackError,
    data: feedbackData,
    refetch: refetchFeedbackData,
  } = useQuery({
    queryKey: ["repoData", selectedValue],
    queryFn: () =>
      fetch(`${route.feedbackData}?filter=${selectedValue || "all"}`).then(
        (res) => res.json(),
      ),
  });

  useEffect(() => {
    refetchFeedbackData(); // Refetch feedback data when selected value changes
  }, [selectedValue, refetchFeedbackData]);

  useEffect(() => {}, [feedbackData]);
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
      <h2 className="mb-8 text-3xl font-bold">Feedback</h2>
      <div className="items-cente mb-8 flex h-fit justify-between">
        <div className="flex items-center gap-8">
          <p>Filter</p>
          <FeedbackTypeFilterButton loading={isLoading} />
        </div>
        <div className="flex items-center gap-2">
          <CSVLink
            data={feedbackData || []}
            filename={`${new Date().toLocaleDateString()}-feedback.csv`}
          >
            <Button loading={feedbackData == null || feedbackData == undefined}>
              Download CSV
            </Button>
          </CSVLink>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={feedbackData}
        ref={tableRef}
        loading={
          feedbackData == null || (feedbackData == undefined && isLoading)
        }
      />
    </div>
  );
};

export default PageView;
