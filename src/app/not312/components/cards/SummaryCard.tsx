"use client";
import Spinner from "@/app/dashboard/components/shared/Spinner";
import LoaderDots from "@/components/__shared/loader/LoaderDots";
import { route } from "@/lib/utils/routes";
import { Card, CardBody } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import Button from "antd/es/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface Props {
  count: number;
  title: string;
  link: string;
}
const SummaryCard = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["feedbackCategories"],
    queryFn: () => fetch(`${route.feedbackCount}`).then((res) => res.json()),
  });

  const router = useRouter();
  return (
    <Card className="overflw-none aspect-square w-full min-w-[240px]">
      <CardBody className="flex flex-col items-center justify-center">
        {isLoading ? (
          <Spinner />
        ) : (
          <p className="mb-2 text-center text-8xl font-black">{data.count}</p>
        )}
        <h3 className=" text-right font-bold">Feedbacks</h3>
        <Button
          className="mt-8 w-full"
          color="secondary"
          onClick={() => router.push("/not312/dashboard/feedback")}
        >
          View
        </Button>
      </CardBody>
    </Card>
  );
};

export default SummaryCard;
