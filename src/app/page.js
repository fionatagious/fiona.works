"use client";

import React from "react";
import GlobalStyle from "../../styles/globalStyles";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import Header from "@/app/components/navigation/Header";
import Footer from "@/app/components/navigation/Footer";
import Tag from "@/app/components/Tag";

import ExperiencePanel from "@/app/components/ExperiencePanel";
import SectionHeading from "@/app/components/SectionHeading";

import About from "./sections/About";
import Intro from "./sections/Intro";
import Projects from "./sections/Projects";
import Writings from "./sections/Writings";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fiona Tang</title>
      </Head>
      <Header />
      <div className="w-full">
        <div className="w-full bg-gray-50">
          <GlobalStyle />
          <Grid
            container
            className="flex flex-col min-h-1/2 px-4 3xl:px-64 4xl:px-96 pt-24 sm:pt-32"
          >
            <Grid item xs={12} className="px-2 md:px-12 xl:px-32 my-20">
              <Intro />
            </Grid>
            <Grid item xs={12} className="px-2 md:px-12 xl:pl-30 py-20 my-20">
              <SectionHeading id="about" headingText="About Me" />
              <About />
            </Grid>
            {/* <Grid item xs={12} className="px-2 md:px-12 xl:pl-30 py-20 my-20">
              <SectionHeading id="experience" headingText="Experience" />
              <ExperiencePanel />
            </Grid> */}
            <Grid
              item
              xs={12}
              className="px-2 md:px-12 xl:pl-30 4xl:pl-32 py-20 my-20"
            >
              <SectionHeading id="projects" headingText="Projects" />
              <Projects />
            </Grid>
            <Grid
              item
              xs={12}
              className="px-2 md:px-12 xl:pl-30 4xl:pl-32 py-20 my-20"
            >
              <SectionHeading id="media" headingText="Writings & Media" />
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
      </div>
      <Footer />
    </>
  );
}
