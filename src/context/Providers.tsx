"use client";

import * as React from "react";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SWRConfig } from "swr";
// import { Theme } from "@radix-ui/themes";

type Props = {
  children: React.ReactNode;
  // themeProps?: ThemeProviderProps;
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

const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SWRConfig value={swrConfig}>
        {children}
      </SWRConfig>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export default Providers;
