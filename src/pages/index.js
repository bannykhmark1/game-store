import Image from "next/image";
import { Inter } from "next/font/google";
import Offers from "@/components/offers";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="w-full">
        <Header />
        <Offers />
      </div>
    </>
  );
}
