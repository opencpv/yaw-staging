import React, { Suspense } from "react";
import MatchDetail from "../../components/schedule/MatchDetail";
import Loader from "@/components/__shared/ui/loader/Loader";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = (props: Props) => {
  const matchId = Number(props.searchParams.m?.slice(3));
  return (
    <main>
      <header className="bg-primary p-10 text-white max-sm:px-5">
        <div className="mx-auto max-w-screen-hd space-y-3">
          <h3>Confirm Your Rental Request</h3>
          <p className="text-base text-shade-50">
            Excellent! We are glag you found a match. Please confirm your
            details below to proceed.
          </p>
        </div>
      </header>
      <Suspense fallback={<Loader position="center" />}>
        <MatchDetail matchId={matchId} />
      </Suspense>
    </main>
  );
};

export default page;
