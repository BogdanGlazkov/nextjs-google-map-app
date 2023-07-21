import Image from "next/image";
import { Inter } from "next/font/google";
import SideNavBar from "@/components/SideNavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex">
      <SideNavBar />
      <section className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 w-full mt-10">
        <div> Business List</div>
        <div>Google Map</div>
      </section>
    </main>
  );
}
