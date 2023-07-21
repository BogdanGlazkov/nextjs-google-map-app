import Image from "next/image";
import { Inter } from "next/font/google";
import SideNavBar from "@/components/SideNavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <SideNavBar />
    </main>
  );
}
