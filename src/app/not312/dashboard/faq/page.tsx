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
    title: "Fullname",
    dataIndex: "fullname",
    key: "fullname",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Message",
    dataIndex: "message",
    key: "message",
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

  const selectedValue: any = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData", selectedValue],
    queryFn: () => fetch(`${route.faqData}`).then((res) => res.json()),
  });

  return (
    <div className="h-[100vh]">
      <h2 className="mb-8 text-3xl font-bold">Feedback</h2>
      <div className="items-cente mb-8 flex h-fit justify-between">
        <div className="flex w-full items-center justify-end gap-2">
          <CSVLink
            data={data || []}
            filename={`${new Date().toLocaleDateString()}-faqs.csv`}
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
        loading={data == null || isLoading}
      />
    </div>
  );
};

export default PageView;
