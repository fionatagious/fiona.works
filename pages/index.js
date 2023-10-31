import * as React from "react";

// import Button from "/components/button";
// import Footer from "/components/navigation/footer";
import Grid from "@mui/material/Grid";
import Navbar from "/components/navigation/navbar";
import SocialMedia from "/components/SocialMedia";

import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen mx-0 bg-indigo-950">
      <Navbar />
      <Grid
        container
        className="flex flex-col min-h-1/2 px-4 sm:px-32 pt-6 sm:pt-32"
      >
        <Grid item xs={12} className="grid content-center px-4 sm:pl-32">
          <h1 className="text-left text-pink text-xl my-2">
            Hello! My name is
          </h1>
          <div className="font-bold text-left text-slate-50 text-4xl sm:text-7xl my-2">
            Fiona Tang
          </div>
          <div className="text-left text-slate-300 text-2xl my-2">
            software engineer & civic technologist
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          lg={6}
          className="grid content-start mb-4 px-4 sm:pl-32"
        >
          <div className="text-left text-slate-400 text-xl my-2">
            I&apos;m a user-focused, results-driven software engineer
            specializing in building technology solutions that help individuals
            and organizations advance social and economic equity.
          </div>
          <div className="text-left text-slate-400 text-xl mt-2 mb-6">
            My full site is in development, but while you're here, you can check
            out my&nbsp;
            <Link href="/resume" className="link-animation">
              resume
            </Link>
            .
          </div>
          <SocialMedia />
        </Grid>
      </Grid>
      {/* <Footer /> */}
    </div>
  );
}
