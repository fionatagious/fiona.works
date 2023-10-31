import * as React from "react";
import Link from "next/link";

import Grid from "@mui/material/Grid";
import Navbar from "/components/navigation/navbar";
import SocialMedia from "/components/SocialMedia";

export default function Contact() {
  return (
    <div className="h-screen mx-0 bg-indigo-950">
      <Navbar />
      <div className="px-4 sm:px-32 bg-indigo-950">
        <Grid container className="flex flex-col px-4 py-20">
          <Grid item xs={12} sm={12} md={6} className="grid content-end mb-4">
            <div className="text-left text-slate-300 text-3xl my-2">
              Contact
            </div>
            <div className="text-left text-slate-400 text-xl mb-6">
              I'm open to freelance opportunities in writing and web
              development.
            </div>
            <div className="text-left text-slate-400 text-xl mb-6">
              If you're interested in collaborating on projects related to
              climate change, civic tech, or data visualization / data
              journalism, I'd love to hear from you.
            </div>
            <div className="text-left text-slate-400 text-xl mt-6 mb-4">
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
    </div>
  );
}
