"use client";
import Spinner from "@/app/dashboard/components/shared/Spinner";
import LoaderDots from "@/components/__shared/ui/loader/LoaderDots";
import { Card, CardBody } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import Button from "antd/es/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface Props {
  title: string;
  link: string;
  api: string;
}
const SummaryCard = ({ title, link, api }: Props) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [title],
    queryFn: () => fetch(api).then((res) => res.json()),
  });

  const router = useRouter();
  return (
    <Card className="overflw-none mr-4 aspect-square w-full min-w-[240px]">
      <CardBody className="flex flex-col items-center justify-center">
        {isLoading ? (
          <Spinner />
        ) : (
          <p className="mb-2 text-center text-3xl font-black">{data.count}</p>
        )}
        <h3 className=" text-right">{title}</h3>
        <Button
          className="mt-8 w-full"
          color="secondary"
          onClick={() => router.push(link)}
        >
          View
        </Button>
      </CardBody>
    </Card>
  );
};

export default SummaryCard;
