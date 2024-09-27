import "./globals.css";

import { Box, Container } from "@chakra-ui/react";
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Main Page | Service for searching teammates",
  description: "Service for searching teammates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <Box py={16}>
            <Container maxWidth="1170px">{children}</Container>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
