import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Shared/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mzaman",
  description: "A online store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >

        <Header></Header>
        <div className="w-[85%] mx-auto ">
          {children}
        </div>

      </body>
    </html>
  );
}
