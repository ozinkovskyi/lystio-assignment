import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SearchProvider from "@/context/SearchContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lystio - Property Search",
  description: "Search for properties to rent or buy",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <SearchProvider>{children}</SearchProvider>
      </body>
    </html>
  );
};

export default RootLayout;
