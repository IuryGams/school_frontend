import GlobalStyled from "@/styles/global_styled";
import StyledComponentsRegistry from "@/shared/lib/registry_styled";
import ThemeProviderApp from "@/shared/providers/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Manuelito",
  description: "Site do manuelito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <ThemeProviderApp>
        <body className={inter.className}>
          <GlobalStyled />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </ThemeProviderApp>
    </html>
  );
}
