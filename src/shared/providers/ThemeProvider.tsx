"use client";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../GlobalStyles/theme";


export default function ThemeProviderApp({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}