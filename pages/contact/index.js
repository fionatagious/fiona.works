import * as React from "react";
import utils from "/styles/utils.module.css";

// import Button from "/components/button";
// import Footer from "/components/navigation/footer";
import Grid from "@mui/material/Grid";
import Navbar from "/components/navigation/navbar";
import GithubIcon from "/components/icons/GithubIcon";
import LinkedInIcon from "/components/icons/LinkedInIcon";
import TwitterIcon from "/components/icons/TwitterIcon";

export default function Writings() {
  return (
    <div className="h-screen mx-0 px-4 sm:px-32 bg-indigo-950">
      <Navbar />
      <div className="px-4 sm:px-32 bg-indigo-950">
        <Grid container className="px-8 py-20">
          <Grid item xs={12} sm={12} md={6} className="grid content-end mb-4">
            <div className="text-left text-slate-300 text-3xl my-2">
              Contact
            </div>
            <div className="text-left text-slate-400 text-xl">
              I am open to freelance writing, prototyping and wireframing, web
              development, and any other business opportunities.
            </div>
            <div className="text-pink text-lg my-2">
              fionatang@alum.berkeley.edu
            </div>
          </Grid>
          <Grid item xs={12} className="py-6">
            <div className="flex flex-row">
              <a
                href="https://github.com/fionatagious"
                className={utils.socialMediaIcons}
              >
                <GithubIcon />
              </a>
              &nbsp;
              <a
                href="https://linkedin.com/in/fionaroni"
                className={utils.socialMediaIcons}
              >
                <LinkedInIcon />
              </a>
              &nbsp;
              <a
                href="https://twitter.com/fionatagious"
                className={utils.socialMediaIcons}
              >
                <TwitterIcon />
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
