"use client";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import BlobButton from "./components/blobButton/blobButton";
import bg11 from "../public/assets/fabio-oyXis2kALVg-unsplash.jpg";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
// import bg11 from "/assets/fabio-oyXis2kALVg-unsplash.jpg";
import scienceLottie from "../public/assets/Animation1715490774279.json";
import Navbar from "./components/navbar/navbar";
import UpcomingEvents from "./components/upcomingEvents/UpcomingEvents";



export default function Home() {

  const [background, setBackground] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change background in a cyclic manner
      setBackground(prevBackground => prevBackground % 3 + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="page-background roboto">

      <div className={`banner-bg ${background === 1 ? 'background-1' : background === 2 ? 'background-2' : 'background-3'}`} >
        {/* <Image src={bg11} width="100%" height="100%" alt="bg"/> */}
        <Navbar/>
        <Separator className="bg-slate-400" />

        {/* banner section  */}
        <div className="relative z-10">
          <div className="max-w-[1300px] mx-auto py-16 flex items-center">
            <div className="w-2/3">
              <p className="uppercase roboto-condensed font-[500] tracking-wider text-lg">Welcome to Manipuri Science society</p>
              <p className="roboto-condensed text-6xl mt-6 font-light"><span className="font-[500] text-[var(--primary2)]">Understand</span> the fun of science, <br /> <span className="font-[500] text-[var(--primary2)]">learn</span> science with pleasure.</p>

              <BlobButton />
            </div>
            <div>
              <Image src="/assets/pngwing.com.png" className="w-[90%] ms-auto h-auto" layout="responsive" width={100} height={100} alt="robot"/>
            </div>

          </div>

        </div>
      </div>

      {/* upcoming events  */}
      <UpcomingEvents/>

    </main>
  );
}
