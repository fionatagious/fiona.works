import * as React from "react";

import About from "/pages/about/index.js";
import ExperiencePanel from "/components/ExperiencePanel";
import Footer from "/components/navigation/footer";
import Grid from "@mui/material/Grid";
import Intro from "/pages/intro/index.js";
import Navbar from "/components/navigation/navbar";
import Writings from "/pages/writings/index.js";

export default function Home() {
  return (
    <>
      <div className="mx-0 bg-stone-200">
        <Navbar />
        <Grid
          container
          className="flex flex-col min-h-1/2 px-4 xl:px-32 pt-6 sm:pt-32"
        >
          <Intro />
          <Grid item xs={12} className="px-2 md:px-16 xl:px-32 py-20 my-20">
            <div className="heading font-bold text-md text-center sm:text-left text-2xl sm:text-3xl m-4">
              About me
            </div>
            <About />
          </Grid>
          <Grid item xs={12} className="px-2 md:px-16 xl:px-32 py-20 my-20">
            <div className="heading font-bold text-md text-center sm:text-left text-2xl sm:text-3xl m-4">
              Experience
            </div>
            <ExperiencePanel />
          </Grid>
          <Grid item xs={12} className="px-2 md:px-16 xl:px-32 pt-20 mt-20">
            <div className="heading font-bold text-md text-center sm:text-left text-2xl sm:text-3xl m-4">
              Featured Media
            </div>
            <Writings />
          </Grid>
        </Grid>
      </div>
      <div className="mx-0 bg-slate-950 opacity-90">
        <Footer />
      </div>
    </>
  );
}
