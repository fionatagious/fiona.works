import React from "react";
import { ScrollButton } from "@/app/components/buttons/ScrollButton";

export default function Intro() {
  return (
    <div className="text-center min-h-[60vh]">
      <p className="font-mono text-slate-950 text-sm sm:text-lg md:text-lg mb-2">
        Hello! I'm
      </p>
      <h1 className="invisible">Fiona Tang</h1>
      <div className="text-nowrap text-eggplant text-8xl sm:text-9xl font-extrabold tracking-widest">
        Fiona
      </div>
      <div id="animated-scroll" className="mt-8">
        <ScrollButton />
      </div>
    </div>
  );
}
