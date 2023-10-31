import * as React from "react";
import Image from "next/image";

// import Button from "/components/button";
// import About from "/pages/about/index.js";
import Footer from "/components/navigation/footer";
import Grid from "@mui/material/Grid";
import Intro from "/pages/intro/index.js";
import Navbar from "/components/navigation/navbar";
import ExperiencePanel from "/components/ExperiencePanel";
import Writings from "/pages/writings/index.js";

export default function Home() {
  return (
    <div className="mx-0 bg-indigo-950">
      <Navbar />
      <Grid
        container
        className="flex flex-col min-h-1/2 px-4 sm:px-32 pt-6 sm:pt-32"
      >
        <Intro />
        <Grid container xs={12} className="px-0 sm:pl-32 py-20 my-20">
          <div className="heading text-slate-400 font-bold text-md text-center sm:text-left text-2xl sm:text-3xl m-4">
            About me
          </div>
          <Grid item className="flex flex-row sm:flex-col">
            <Grid item xs={12} sm={6} className="px-2">
              <div className="text-left text-slate-400 text-sm sm:text-md md:text-lg my-2 mb-6">
                My most recent work experiences are at Code for America, where I
                partnered with the government of Adams County, Colorado and
                caseworkers, to build a web app that helped people experiencing
                homelessness access temporary shelter. After my fellowship, I
                worked as a Software Engineer at The Mom Project, a platform
                that connects moms, dads, and other caretakers with employers
                who offer flexible work.
              </div>
              <div className="text-left text-slate-400 text-sm sm:text-md md:text-lg my-2 mb-6">
                When I'm not coding, I enjoy cooking, learning new drum beats,
                and spending time with friends and family. I also am a
                stationery hobbyist and a coffee enthusiast.
              </div>
            </Grid>
            {/* <div className="about-photo-border"></div> */}
            <div className="hidden">
              <Image
                priority
                src="/images/headshot.jpg"
                height={350}
                width={350}
                alt="profile-photo"
              />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={10} className="px-0 sm:pl-32 py-20 my-20">
          <div className="heading text-slate-400 font-bold text-md text-center sm:text-left text-2xl sm:text-3xl m-4">
            Experience
          </div>
          <ExperiencePanel />
        </Grid>
        <Grid item xs={12} className="px-0 sm:pl-32 py-20 my-20">
          <div className="heading text-slate-400 font-bold text-md text-center sm:text-left text-2xl sm:text-3xl m-4">
            Written Works
          </div>
          <Writings />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
