"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { openSans } from "@/styles/font";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { dateDefault } from "@/enum/defaultPhone";
import { useClickAway } from "@uidotdev/usehooks";

interface Props {
  phoneChange: (phoneNumber: string) => void;
  defaultValue?: string;
}

const PhoneNumberInput = ({ phoneChange, defaultValue = "" }: Props) => {
  const [selectedCountry, setSelectedCountry] = useState<any>({});
  const [data, setData] = useState<any[]>([]);
  const { icons } = useAssets();
  const [toggle, setToggle] = useState(false);
  const [phone, setphone] = useState(defaultValue);
  const ref: any = useClickAway(() => {
    setToggle(false);
  });

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,flags,idd")
      .then((res) => {
        const resData = res.data;
        setData(resData);
        setSelectedCountry(dateDefault);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="relative">
      {data.length > 0 && (
        <div className="relative  flex gap-2" ref={ref}>
          <button
            type="button"
            onClick={() => {
              setToggle(!toggle);
            }}
            className="flex h-[56px] items-center justify-between gap-1 rounded-[4px] border-[1px] border-[#EBEBEB] px-[15px]"
          >
            <div className="relative h-[18px] w-5 rounded-[4px]">
              <Image
                src={selectedCountry.flags.png}
                alt={selectedCountry.flags.alt}
                fill
                sizes="1.25rem"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="rounded-[4px] "
              />
            </div>
            <p className={`text-[13px] text-[#000]`}>
              {selectedCountry.idd.root}
              {selectedCountry.idd.suffixes}
            </p>
            <Image src={icons.ArrowDown} alt={"down arrow"} />
          </button>
          {toggle && (
            <ul className="absolute left-0 top-[-220px] h-[200px] w-[150px] overflow-x-hidden overflow-y-scroll rounded-[4px]  border-[1px] border-[#EBEBEB] bg-[#fff]">
              {data.map((country, index) => (
                <li
                  key={index}
                  className="w- z-50 border-b-[1px] border-[#EBEBEB] bg-[#fff] "
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCountry(country);
                      setToggle(false);
                    }}
                    className="flex w-full items-center  justify-start gap-2 rounded-[4px] px-[15px] py-2 "
                  >
                    <div className="relative h-[18px] w-5 rounded-[4px]">
                      <Image
                        src={country.flags.png}
                        alt={country.flags.alt}
                        fill
                        sizes="1.25rem"
                        style={{ objectFit: "cover" }}
                        objectPosition="center"
                        className="rounded-[4px] "
                      />
                    </div>
                    <p className={`text-[13px] text-[#000]`}>
                      {country.idd.root}
                      {country.idd.suffixes}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          )}
          <input
            type="tel"
            placeholder={defaultValue}
            value={phone}
            className="flex flex-auto rounded-[4px] border-[1px] border-[#EBEBEB] p-[15px]"
            onChange={(e: any) => {
              const prefix = `${selectedCountry.idd.root}${selectedCountry.idd.suffixes}`;
              phoneChange(`${e.target.value}`);
              setphone(e.target.value);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PhoneNumberInput;
