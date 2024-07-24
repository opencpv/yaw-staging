"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Select,
  SelectItem,
  Input,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  Button,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import { useQuery } from "@tanstack/react-query";
import capitalizeName from "@/lib/utils/stringManipulation";
import { route } from "@/lib/utils/routes";
import { client } from "@/lib/utils/sanity/client";
import type { TableProps } from "antd";
import { Space, Table, Tag } from "antd";
import Spinner from "@/app/dashboard/components/shared/Spinner";
const { Column, ColumnGroup } = Table;
import { CSVDownload, CSVLink } from "react-csv";
import PropertiesListing from "@/app/properties/components/PropertiesListing";
import { useFetchProperties } from "@/app/properties/services";
import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import SomethingWentWrong from "@/components/__shared/ui/states/SomethingWentWrong";
import PropertiesEmptyState from "@/app/properties/components/PropertiesEmptyState";
import ListingCard from "@/components/__shared/ui/listing/ListingCard";
import { getListingProps } from "@/lib/enum";
import ButtonInfiniteLoading from "@/components/__shared/ui/data_fetching/ButtonInfiniteLoading";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useList } from "@uidotdev/usehooks";
import { toast } from "react-toastify";
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

const PageView = () => {
  const tableRef = useRef<any>();
  const [selectedKeys, setSelectedKeys] = useState<any>(new Set(["all"]));
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedSearch, setselectedSearch] = useState<any>(null);
  const { user } = useAppStore();
  const [search, setSearch] = useState("");
  const [list, { set, push, removeAt, insertAt, updateAt, clear }] = useList(
    [],
  );
  const [searchLoading, setSearchLoading] = useState(false);
  const columns: TableProps<any>["columns"] = [
    {
      title: "Id",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Firstname",
      key: "firstname",
      render: (text, record, index) => record.renter_id.firstname,
    },

    {
      title: "Lastname",
      dataIndex: "lastname",
      render: (text, record, index) => record.renter_id.lastname,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Paid",
      dataIndex: "is_paid",
      render: (text, record, index) => (
        <p
          className={`${
            record.is_paid
              ? "bg-green-500 text-white "
              : "bg-red-500 text-white"
          } rounded-lg p-2 text-center text-sm font-bold`}
        >
          {record.is_paid ? "YES" : "NO"}
        </p>
      ),
    },
    {
      title: "Created at",
      dataIndex: "created_at",
      render: (text, record, index) => (
        <p className="rounded-lg bg-gray-600 p-2 text-center text-sm font-bold text-white">
          {new Date(record.created_at).toLocaleDateString()}
        </p>
      ),
    },
    {
      title: "View",
      dataIndex: "view",
      render: (text, record, index) => <Button>View</Button>,
    },
    {
      title: "View",
      dataIndex: "view",
      render: (text, record, index) => (
        <Button
          onPress={() => {
            setselectedSearch(record);
            onOpen();
          }}
        >
          Add Match
        </Button>
      ),
    },
  ];
  const selectedValue: any = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  const {
    isLoading: agentLoading,
    error: agentError,
    data,
  } = useQuery({
    queryKey: ["agentsData", selectedValue],
    queryFn: () => fetch(`${route.agentRequest}`).then((res) => res.json()),
  });

  const {
    data: listings,
    error,
    isLoading,
    isValidating,
    loadMore,
    mutate,
  } = useFetchProperties({ searchString: search as string, filter: "all" });

  return (
    <div className="h-[100vh] p-8">
      <h2 className="mb-8 text-3xl font-bold">Be my agent</h2>
      <div className="mb-8 flex h-fit items-center justify-between">
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {`Add Matches to Request #${selectedSearch?.id}`}{" "}
                </ModalHeader>
                <ModalBody>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Search for property"
                      color="primary"
                      onChange={(e) => setSearch(e.target.value)}
                      className="text-slate-800"
                    />
                    <Button
                      onClick={() => {
                        if (search.length > 4) {
                        } else {
                          toast.warning("Search query too short");
                        }
                      }}
                    >
                      Search
                    </Button>
                  </div>
                  <div className="h-[50vh] overflow-y-scroll">
                    <FramerWrapper>
                      <section className="listing-grid">
                        <FetchingStates
                          data={listings}
                          error={error}
                          isLoading={isLoading}
                          isLoadingComponent={<SkeletonListing count={3} />}
                          errorComponent={
                            <SomethingWentWrong
                              className="h-fit"
                              onTryAgain={() => {
                                mutate();
                              }}
                            />
                          }
                          emptyStateComponent={
                            <PropertiesEmptyState onClick={() => null} />
                          }
                        />
                        {listings?.map((listing, index) => (
                          <div className="flex flex-col" key={index}>
                            <ListingCard
                              key={listing.id}
                              {...getListingProps(listing, user as UserType)}
                            />
                            <Button
                              color={
                                list.includes(listing.id as never)
                                  ? "danger"
                                  : "primary"
                              }
                              onClick={() => {
                                const id = listing.id;
                                if (list.includes(id as never)) {
                                  const index = list.findIndex(
                                    (iterId) => id == iterId,
                                  );
                                  removeAt(index);
                                } else {
                                  push(id as never);
                                }
                              }}
                            >
                              {list.includes(listing.id as never)
                                ? "Remove Match"
                                : "Add Match"}
                            </Button>
                          </div>
                        ))}
                      </section>
                      <ButtonInfiniteLoading
                        data={listings}
                        isLoading={isLoading}
                        isValidating={isValidating}
                        loadMore={loadMore}
                      />
                    </FramerWrapper>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Exit
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Update
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        <div className="flex w-full items-center justify-end gap-2">
          <CSVLink
            data={data || []}
            filename={`${new Date().toLocaleDateString()}-applicants.csv`}
          >
            <Button isLoading={data == null || data == undefined}>
              Download CSV
            </Button>
          </CSVLink>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        ref={tableRef}
        loading={data == null || agentLoading}
      />
    </div>
  );
};

export default PageView;
