"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SWRConfig } from "swr";

type Props = {
  children: React.ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SWRConfig value={{ revalidateOnFocus: false }}>
        <NextUIProvider>{children}</NextUIProvider>
      </SWRConfig>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export default Providers;
