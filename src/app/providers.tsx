"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { AuthProvider } from "@/contexts/AuthContext";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};

export default Providers;
