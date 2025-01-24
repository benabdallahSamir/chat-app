import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ToastContainer } from "react-toastify";
import AsideBar from "@/components/AsideBar";
import Navbar from "@/components/Navbar";
import ReduxContainer from "@/redux/ReduxContainer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black w-screen min-h-screen flex overflow-hidden">
        <ReduxContainer>
          <AsideBar />
          <main className="w-4/5 border border-l h-screen border-gray-200">
            <Navbar />
            {children}
          </main>
          <ToastContainer />
        </ReduxContainer>
      </body>
    </html>
  );
}
