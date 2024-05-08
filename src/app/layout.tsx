import type { Metadata } from "next";
import StoreProvider from "./StoreProvider";
import DarkModeLayout from "./components/DarkModeLayout";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsappComponent from "./components/WhatsappComponent";

import "./globals.css";

export const metadata: Metadata = {
  title: "Donalvaro Wine",
  description: "Donalvaro Wine Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <DarkModeLayout>
        <body className='min-h-screen w-screen flex-col overflow-y-auto overflow-x-hidden'>
          <Navbar />
          {children}
          <Footer />
        </body>
      </DarkModeLayout>
    </StoreProvider>
  );
}
