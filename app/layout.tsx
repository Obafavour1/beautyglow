import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beauty Glow",
  description:"Beauty Glow Hair",
};

 export default function RootLayout(
   {
  children,
}: Readonly<{
  children: React.ReactNode;
}>
) 
{
  return (
    <html lang="en">
      <ShoppingCartProvider>
        <body>
          <Navbar />
          {/* <ShoppingCartModule/> */}
          {children}
          <Footer />
          </body>  
      </ShoppingCartProvider>
      {/* <body className={inter.className}>
       
      </body> */}
    </html>
  );
}
