"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalContent,
  useDisclosure,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import capitalizeName from "@/lib/utils/stringManipulation";
import { route } from "@/lib/utils/routes";
import axios from "axios";
import Loader from "@/components/__shared/ui/loader/Loader";
import type { TableProps } from "antd";
import { Pagination, Space, Table, Tag } from "antd";
import Spinner from "@/app/dashboard/components/shared/Spinner";
const { Column, ColumnGroup } = Table;
import { CSVDownload, CSVLink } from "react-csv";
import { useFetchFeaturedListings } from "@/app/properties/services";
import { Button, ButtonGroup } from "@nextui-org/react";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SomethingWentWrong from "@/components/__shared/ui/states/SomethingWentWrong";
import SliderGrid from "@/components/__shared/ui/sliders/SliderGrid";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import ListingCard from "@/components/__shared/ui/listing/ListingCard";
import { getListingProps } from "@/lib/enum";
import { useAppStore } from "@/store/dashboard/AppStore";
import { number } from "prop-types";
import { client } from "@/lib/utils/sanity/client";
import supabase from "@/lib/utils/supabase/supabaseClient";
import Link from "next/link";

const PageView = () => {
  const [view, setView] = useState<"grid" | "table">("grid");
  const {
    data: listings,
    error,
    isLoading,
    mutate,
  } = useFetchFeaturedListings();
  const { user } = useAppStore();
  const [totalPages, setTotalPages] = useState<null | number>(null);
  const [page, setPage] = useState(1);
  const [filteredListing, setFilteredListing] = useState<any[]>([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [selectedListing, setSelectedListing] = useState<any>();
  useEffect(() => {
    if (listings) {
      const listingsNumber = listings.length;
      let pages = Math.ceil(listingsNumber / 6);
      setTotalPages(pages);
      setFilteredListing(listings);
    }
  }, [isLoading, listings]);
  const ListingCards = () => (
    <div className="w-full">
      <div className="grid  w-full grid-cols-2 lg:items-start">
        <div className="relative col-span-6 pb-5">
          {/* Shows when number of listings is more than 4 */}
          <div className="relative h-fit w-full">
            <FetchingStates
              data={filteredListing}
              error={error}
              errorComponent={
                <SomethingWentWrong
                  className="col-span-full h-fit"
                  onTryAgain={() => mutate()}
                />
              }
            />
            <SliderGrid
              items={
                isLoading
                  ? Array.from({ length: 5 }, (_, idx) => (
                      <SkeletonListing key={idx} cardType={1} />
                    ))
                  : filteredListing?.map((listing) => (
                      <div key={listing.id}>
                        <ListingCard
                          {...getListingProps(listing, user as UserType)}
                          cardType="1"
                        />
                        <Button
                          className="mt-2 w-full"
                          color="danger"
                          onClick={async () => {
                            setSelectedListing(listing);
                            onOpen();
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    ))
              }
            />
          </div>
        </div>
      </div>
      {totalPages && (
        <div className="flex justify-center">
          <Pagination
            defaultCurrent={1}
            total={totalPages}
            onChange={(value: number) => console.log(value)}
          />
        </div>
      )}
    </div>
  );

  const removeFeatured = async (id: number) => {
    const { data, error } = await supabase
      .from("featured_properties")
      .delete()
      .eq("property_id", id);
    if (error) {
      console.log("error removing listing");
      setLoading(false);
      return;
    }
    setLoading(false);
  };

  const DeleteConfirmationModal = () => (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onclose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Confim Deletion
            </ModalHeader>
            <ModalBody>
              <p>
                Do you want to removed property{" "}
                <span className="font-bold">
                  {`${selectedListing.bedrooms} Bedroom ${selectedListing.property_type} with id ${selectedListing.id} at ${selectedListing.neighbourhood}`}
                </span>{" "}
                from featured listings
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={onclose}>
                Close
              </Button>
              <Button
                color="primary"
                isLoading={loading}
                onClick={async () => {
                  setLoading(true);
                  await removeFeatured(selectedListing.id);
                  onclose();
                  document.location.reload();
                }}
              >
                Delete
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );

  return (
    <div className="h-[100vh] overflow-y-scroll p-8">
      <DeleteConfirmationModal />
      <h2 className="text-3xl font-bold text-slate-800">Featured Properties</h2>
      <Link
        href={"/not312/dashboard/featured-properties/add"}
        className="mt-2 flex w-full justify-center"
      >
        <Button className="">Add Featured Property</Button>
      </Link>
      <div className="my-4 flex w-full items-center  justify-center gap-4">
        {/* <ButtonGroup>
          <Button
            variant={view == "grid" ? "solid" : "flat"}
            onClick={() => setView("grid")}
          >
            Grid
          </Button>
          <Button
            variant={view == "table" ? "solid" : "flat"}
            onClick={() => setView("table")}
          >
            Table
          </Button>
        </ButtonGroup> */}
      </div>
      {view == "grid" && <ListingCards />}
    </div>
  );
};

export default PageView;
