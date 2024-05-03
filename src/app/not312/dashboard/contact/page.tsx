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
  fullname: string;
  feedback_title: string;
  company_name: string;
  phone: string;
  email: string;
  message: string;
  contact_type: string;
  report_link: string;
  created_at: string;
  file_url: string;
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
    title: "Company",
    dataIndex: "company_name",
    render: (text, record, index) => record.company_name || "N/A",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    render: (text, record, index) => record.phone || "N/A",
  },
  {
    title: "Email",
    dataIndex: "email",
    render: (text, record, index) => record.email || "N/A",
  },
  {
    title: "Message",
    dataIndex: "message",
    render: (text, record, index) => (
      <p className="w-[300px]">{record.message}</p>
    ),
  },
  {
    title: "Contact Type",
    dataIndex: "contact_type",
    render: (text, record, index) => record.contact_type || "N/A",
  },
  {
    title: "Report Link",
    dataIndex: "report_link",
    render: (text, record, index) => record.report_link || "N/A",
  },
  {
    title: "Date",
    dataIndex: "created_at",
    render: (text, record, index) => record.created_at.split("T")[0],
  },
  {
    title: "File",
    dataIndex: "file_url",
    render: (text, record, index) => (
      <>
        {record.file_url ? (
          <a href={record.file_url}>
            <Button>Download</Button>
          </a>
        ) : (
          "N/A"
        )}
      </>
    ),
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

  const contactCategories = [
    {
      label: "General",
      key: "general",
    },
    {
      label: "Report",
      key: "report",
    },
    {
      label: "Writers",
      key: "writers",
    },
    {
      label: "Advertise",
      key: "advertise",
    },
    {
      label: "All",
      key: "all",
    },
  ];

  const {
    isPending: isContactLoading,
    error: contactError,
    data: contactData,
    refetch: refetchContactData,
  } = useQuery({
    queryKey: ["contactData", selectedValue],
    queryFn: () =>
      fetch(`${route.contactData}?filter=${selectedValue || "all"}`).then(
        (res) => res.json(),
      ),
  });

  useEffect(() => {
    refetchContactData(); // Refetch contact data when selected value changes
  }, [selectedValue, refetchContactData]);

  const ContactFilterButton = ({ loading }: { loading: boolean }) => (
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
        aria-label="contact filter"
        variant="bordered"
        disallowEmptySelection
        selectionMode="single"
        items={contactCategories}
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
      <h2 className="mb-8 text-3xl font-bold">Contact</h2>
      <div className="items-cente mb-8 flex h-fit justify-between">
        <div className="flex items-center gap-8">
          <p>Filter</p>
          <ContactFilterButton loading={false} />
        </div>
        <div className="flex items-center gap-2">
          <CSVLink
            data={contactData || []}
            filename={`${new Date().toLocaleDateString()}-contact.csv`}
          >
            <Button loading={contactData == null || contactData == undefined}>
              Download CSV
            </Button>
          </CSVLink>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={contactData}
        ref={tableRef}
        loading={contactData == null || contactData == undefined}
      />
    </div>
  );
};

export default PageView;
