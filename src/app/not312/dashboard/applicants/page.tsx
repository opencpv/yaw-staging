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
  firstname: string;
  lastname: string;
  cover_letter_url: string;
  resume_url: string;
  additional_link: string;
  created_at: string;
  email: string;
  phone: string;
  job: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Id",
    key: "index",
    render: (text, record, index) => index + 1,
  },
  {
    title: "Firstname",
    dataIndex: "firstname",
    key: "firstname",
  },

  {
    title: "Lastname",
    dataIndex: "lastname",
    key: "lastname",
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
    title: "Job",
    dataIndex: "job",
    render: (text, record, index) => (record.job ? record.job : "Resume Bank"),
  },
  {
    title: "Cover Letter",
    dataIndex: "cover_letter_url",
    render: (text, record, index) => (
      <>
        {record.cover_letter_url ? (
          <a
            href={record.cover_letter_url}
            download={record.cover_letter_url}
            target="_blank"
          >
            <Button type="primary" className=" bg-slate-600 font-bold">
              Download
            </Button>
          </a>
        ) : (
          "N/A"
        )}
      </>
    ),
  },
  {
    title: "Resume",
    dataIndex: "resume_url",
    render: (text, record, index) => (
      <>
        {record.resume_url ? (
          <a
            href={record.resume_url}
            download={record.resume_url}
            target="_blank"
          >
            <Button type="primary" className=" bg-slate-600 font-bold">
              Download
            </Button>
          </a>
        ) : (
          "N/A"
        )}
      </>
    ),
  },
  {
    title: "Extra",
    dataIndex: "additional_link",
    render: (text, record, index) => (
      <>
        {record.additional_link ? (
          <a
            href={record.additional_link}
            download={record.additional_link}
            target="_blank"
          >
            <Button type="primary" className=" bg-slate-600 font-bold">
              Download
            </Button>
          </a>
        ) : (
          "N/A"
        )}
      </>
    ),
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
    queryKey: ["applicantsData", selectedValue],
    queryFn: () => fetch(`${route.applicantData}`).then((res) => res.json()),
  });

  return (
    <div className="h-[100vh] p-8">
      <h2 className="mb-8 text-3xl font-bold">Applicants</h2>
      <div className="items-cente mb-8 flex h-fit justify-between">
        <div className="flex w-full items-center justify-end gap-2">
          <CSVLink
            data={data || []}
            filename={`${new Date().toLocaleDateString()}-applicants.csv`}
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
