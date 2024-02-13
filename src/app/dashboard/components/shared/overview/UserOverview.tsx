"use client";
import Callout from "@/app/dashboard/components/Callout";
import Button from "@/components/__shared/ui/button/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi";
import UserOverviewMV from "./UserOverviewMV";
import LargeButton from "@/app/dashboard/lister/properties/components/LargeButton";
import { TbBuildingCommunity } from "react-icons/tb";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import { BiInfoCircle } from "react-icons/bi";

const UserOverview = ({
  name,
  email,
  picture,
  telephone,
  className,
  type,
}: UserOverviewProps) => {
  const [hidden, setHidden] = useState(false);
  const [hiddenCompletely, setHiddenCompletely] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 245) {
        setHidden(true);

        setTimeout(() => {
          setHiddenCompletely(true);
        }, 4000);
      }
    });
  }, []);

  return (
    <div className={className}>
      <h2 className="mb-6">Overview</h2>
      <h3 className="mb-6 text-neutral-700 md:hidden">Welcome, John</h3>
      <Callout
        className={`w-full transition-all sm:w-10/12 ${
          hidden ? "mb-0 h-0 p-0" : "mb-6 h-fit"
        } ${hiddenCompletely && "hidden"}`}
      >
        <div className={`flex items-center gap-5 ${hidden && "invisible"}`}>
          <BiInfoCircle size={40} className="text-accent-50 xsm:shrink-0" />
          <div className="space-y-1">
            {type === "Renter" ? (
              <p className="text-base">
                Get started by effortlessly{" "}
                <span className="font-[600]">renting</span> and publishing{" "}
                <span className="font-[600]">products</span> with ease.
              </p>
            ) : type === "Property Manager" ? (
              <p className="text-base">
                Get started by effortlessly{" "}
                <span className="font-[600]">listing</span> and{" "}
                <span className="font-[600]">managing</span> your properties and{" "}
                <span className="font-[600]">products</span> with ease.
              </p>
            ) : null}

            <p className="text-base">
              Navigate through the menu on the top to discover more features and
              tools.
            </p>
          </div>
        </div>
      </Callout>
      <AOSWrapper animation="fade-up">
        {type === "Property Manager" && (
          <LargeButton
            label="Add your property"
            icon={<TbBuildingCommunity className="text-accent-200" />}
            className="mb-10"
          />
        )}
        <div className="hidden max-h-60 w-full max-w-[850px] rounded-xl bg-primary-400 p-10 pb-0 pt-20 md:block">
          <div className="mx-auto w-11/12">
            <h3 className="mb-4 text-xl font-[600] text-white">
              Welcome, John
            </h3>
            <div className="flex max-h-60 items-center gap-x-6 gap-y-3 rounded-xl bg-white p-8 py-16 shadow-2xl">
              <div className="relative h-32 w-32 rounded-xl shadow-lg">
                <Image
                  src={picture}
                  alt={name}
                  className="rounded-xl"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="space-y-2">
                <h4 className="">{name}</h4>
                <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-base">
                  <div className="flex items-center gap-2 text-neutral-700">
                    <FaRegEnvelope className="text-primary-400" />
                    {email}
                  </div>
                  <div className="flex items-center gap-2 text-neutral-700">
                    <BsTelephone className="text-primary-400" />
                    {telephone}
                  </div>
                </div>
                <Button
                  href="settings"
                  className="flex w-fit items-center gap-1.5 rounded-md bg-[#597C7B] p-1 px-4 text-sm font-[400] text-white"
                >
                  Complete your profile <HiOutlinePencil />{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Tablet view */}
        <UserOverviewMV
          name={name}
          picture={picture}
          email={email}
          telephone={telephone}
          className="flex w-full flex-col items-center gap-x-6 gap-y-3 rounded-xl bg-white p-8 shadow-2xl sm:max-h-60 sm:flex-row sm:justify-start sm:py-16 md:hidden"
          type={type}
        />
      </AOSWrapper>
    </div>
  );
};

export default UserOverview;
