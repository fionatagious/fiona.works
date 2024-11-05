import React from "react";

import About from "/pages/about/index.js";
import Contact from "/pages/contact/index.js";
import ExperiencePanel from "/components/ExperiencePanel";
import Footer from "/components/navigation/footer";
import Grid from "@mui/material/Grid";
import Intro from "/pages/intro/index.js";
import Navbar from "/components/navigation/navbar";
import Writings from "/pages/writings/index.js";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fiona Tang</title>
      </Head>
      <div className="w-full">
        <Navbar />
        <div className="w-full bg-orange-50">
          <Grid
            container
            className="flex flex-col min-h-1/2 px-4 3xl:px-64 4xl:px-96 pt-24 sm:pt-32"
          >
            <Grid item xs={12} className="px-2 md:px-12 xl:px-32">
              <Intro />
            </Grid>
            <Grid item xs={12} className="px-2 md:px-12 xl:pl-30 py-20 my-20">
              <div
                id="about"
                className="heading font-bold text-md text-center sm:text-left text-2xl sm:text-3xl my-4"
              >
                About me
              </div>
              <About />
            </Grid>
            <Grid item xs={12} className="px-2 md:px-12 xl:pl-30 py-20 my-20">
              <div
                id="experience"
                className="heading font-bold text-md text-center sm:text-left text-2xl sm:text-3xl my-4"
              >
                Experience
              </div>
              <ExperiencePanel />
            </Grid>
            <Grid
              item
              xs={12}
              className="px-2 md:px-12 xl:pl-30 4xl:pl-32 py-20 my-20"
            >
              <div
                id="media"
                className="heading font-bold text-md text-center sm:text-left text-2xl sm:text-3xl my-4"
              >
                Writings & Media
              </div>
              <Writings />
            </Grid>
            <Grid item xs={12} className="px-2 md:px-12 xl:px-32 py-20 my-20">
              <div
                id="contact"
                className="heading-contact font-bold text-md text-center text-2xl sm:text-3xl m-4"
              >
                Reach out
              </div>
              <Contact />
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    </>
  );
}
