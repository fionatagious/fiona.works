import * as React from "react";
import Link from "next/link";

import Grid from "@mui/material/Grid";
import Navbar from "/components/navigation/navbar";
import SocialMedia from "/components/SocialMedia";

export default function Contact() {
  return (
    <div className="h-screen mx-0 bg-stone-200">
      <Navbar />
      <Grid
        container
        className="flex flex-col min-h-1/2 px-4 xl:px-32 pt-6 sm:pt-32"
      >
        <Grid item xs={12} className="grid content-center px-4 md:pl-32">
          {/* <div className="font-bold text-left text-slate-950 text-4xl sm:text-7xl my-2">
            Contact
          </div> */}
          <span>
            <div className="text-left text-slate-700 text-3xl my-2">
              Contact me
            </div>
          </span>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          lg={6}
          className="grid content-start mb-4 px-4 md:pl-32"
        >
          <div className="text-left text-sky-950 text-lg sm:text-xl my-2 mb-6">
            I&apos;m open to freelance opportunities in writing and web
            development.
          </div>
          <div className="text-left text-sky-950 text-lg sm:text-xl my-2 mb-6">
            In addition, if you're interested in collaborating on projects
            related to climate change, civic tech, or data visualization / data
            journalism, I'd love to hear from you.
          </div>
          <div className="text-left text-sky-950 text-xl mt-6 mb-4">
            Write to me at&nbsp;
            <Link
              href="mailto: fionatang@alum.berkeley.edu"
              className="link-animation"
            >
              fionatang@alum.berkeley.edu
            </Link>
            .
          </div>
          <SocialMedia />
        </Grid>
      </Grid>
    </div>
  );
}
