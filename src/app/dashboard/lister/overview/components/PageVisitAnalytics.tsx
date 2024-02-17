"use client";
import React from "react";
import { Bar, Chart } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import Button from "@/components/__shared/ui/button/Button";
import { HiEllipsisVertical } from "react-icons/hi2";
ChartJS.register(CategoryScale);

type Props = {};

let tempData = [
  {
    id: 1,
    month: "Jan",
    pageVisit: 199,
  },
  {
    id: 2,
    month: "Feb",
    pageVisit: 33,
  },
  {
    id: 4,
    month: "Mar",
    pageVisit: 161,
  },
  {
    id: 12,
    month: "Apr",
    pageVisit: 43,
  },
  {
    id: 6,
    month: "May",
    pageVisit: 52,
  },
  {
    id: 11,
    month: "Jun",
    pageVisit: 51,
  },
  {
    id: 7,
    month: "Jul",
    pageVisit: 267,
  },
  {
    id: 3,
    month: "Aug",
    pageVisit: 244,
  },
  {
    id: 8,
    month: "Sept",
    pageVisit: 133,
  },
  {
    id: 5,
    month: "Oct",
    pageVisit: 262,
  },
  {
    id: 9,
    month: "Nov",
    pageVisit: 49,
  },
  {
    id: 10,
    month: "Dec",
    pageVisit: 236,
  },
];

const PageVisitAnalytics = (props: Props) => {
  return (
    <div className="flex h-full flex-col justify-between gap-5 rounded-xl bg-[#F6F6F6] p-5">
      <div className="flex justify-between gap-5">
        <h3>Page Visit Summary</h3>
        <Button
          variant="ghost"
          isIconOnly
          className="max-w-fit text-neutral-500"
        >
          <HiEllipsisVertical className="shrink-0 text-lg" />
        </Button>
      </div>
      <div className="w-full">
        <Bar
          data={{
            labels: tempData.map((label) => label.month),
            datasets: [
              {
                label: "Visits",
                data: tempData.map((data) => data.pageVisit),
                backgroundColor: "#21A19F",
                barPercentage: 0.5,
                borderRadius: 10,
              },
            ],
          }}
          options={{}}
        />
      </div>
    </div>
  );
};

export default PageVisitAnalytics;
