"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { useRouter } from "next/navigation";
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

const Providers = ({ children, themeProps }: Props) => {
  const router = useRouter();

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
