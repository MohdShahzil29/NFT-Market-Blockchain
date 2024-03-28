import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar, Footer } from "@/components/componentsIndex";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NFT Market Place",
  description:
    "NFT Market Place is the market place for customers to connect to NFT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
