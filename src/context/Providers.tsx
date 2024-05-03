"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProviderProps } from "next-themes/dist/types";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SWRConfig } from "swr";

type Props = {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

const swrConfig = {
  revalidateOnFocus: false,
  refreshInterval: 1000 * 60 * 60,
};

const Providers = ({ children, themeProps }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SWRConfig value={swrConfig}>
        <NextUIProvider>{children}</NextUIProvider>
      </SWRConfig>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export default Providers;
