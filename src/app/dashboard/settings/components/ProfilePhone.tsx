"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { openSans } from "@/app/styles/font";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { dateDefault } from "@/content/defaultPhone";
import { useClickAway } from "@uidotdev/usehooks";
import isEmptyObj from "@/lib/utils/isEmptyObj";

interface Props {
  phoneChange: (code: string) => void;
  defaultValue: any;
  codeChange: (phoneNumber: string) => void;
  phone: string;
}

const ProfilePhone = ({ phoneChange, defaultValue, codeChange }: Props) => {
  const [selectedCountry, setSelectedCountry] = useState<any>();
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
        const defaultCountry = resData.filter((obj: any) => {
          return obj.name.common == defaultValue;
        });

        setSelectedCountry(defaultCountry);
        console.log(defaultCountry);
      })
      .catch((error) => console.log(error.message));
  }, [defaultValue]);

  return (
    <div className="relative">
      {defaultValue && (
        <div className="relative  flex gap-2" ref={ref}>
          <button
            type="button"
            onClick={() => {
              setToggle(!toggle);
            }}
            className="flex h-[56px] gap-1 justify-between items-center px-[15px] border-[1px] border-[#EBEBEB] rounded-[4px]"
          >
            <div className="relative w-5 h-[18px] rounded-[4px]">
              <Image
                src={selectedCountry.flags.png}
                alt={selectedCountry.flags.alt}
                fill
                sizes="1.25rem"
                objectFit="cover"
                objectPosition="center"
                className="rounded-[4px] "
              />
            </div>
            <p className={`text-[13px] text-[#000] ${openSans.className}`}>
              {selectedCountry.idd.root}
              {selectedCountry.idd.suffixes}
            </p>
            <Image src={icons.ArrowDown} alt={"down arrow"} />
          </button>
          {toggle && (
            <ul className="absolute bg-[#fff] top-[-220px] left-0 h-[200px] overflow-y-scroll overflow-x-hidden border-[1px]  border-[#EBEBEB] rounded-[4px] w-[150px]">
              {data.map((country, index) => (
                <li
                  key={index}
                  className="bg-[#fff] z-50 w- border-b-[1px] border-[#EBEBEB] "
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCountry(country);
                      codeChange(`${country.idd.root}${country.idd.suffixes}`);
                      setToggle(false);
                    }}
                    className="flex w-full py-2  justify-start gap-2 items-center px-[15px] rounded-[4px] "
                  >
                    <div className="relative w-5 h-[18px] rounded-[4px]">
                      <Image
                        src={country.flags.png}
                        alt={country.flags.alt}
                        fill
                        sizes="1.25rem"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-[4px] "
                      />
                    </div>
                    <p
                      className={`text-[13px] text-[#000] ${openSans.className}`}
                    >
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
            className="flex flex-auto border-[1px] rounded-[4px] border-[#EBEBEB] p-[15px]"
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

export default ProfilePhone;
