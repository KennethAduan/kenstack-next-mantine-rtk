import React from "react";
import { MantineProvider } from "@mantine/core";
import { theme } from "../lib/mantine/theme";
import dynamic from "next/dynamic";

const ReduxProvider = dynamic(() => import("./ReduxProvider"), {
  ssr: false,
});

type ApproviderProps = {
  children: React.ReactNode;
};
const Approviders = ({ children }: ApproviderProps) => {
  return (
    <ReduxProvider>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </ReduxProvider>
  );
};

export default Approviders;
