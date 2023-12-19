"use client"

import Header from "@/components/Header";
import React from "react";
import StyledComponentsRegistry from "@/app/regystry";
import GlobalStyles from "@/styles/global";
import Providers from "@/app/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <Providers>
        <GlobalStyles/>
        <Header/>
        {children}
      </Providers>
    </StyledComponentsRegistry>
  );
}
