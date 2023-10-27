import * as React from "react";

// import Button from "/components/button";
// import Footer from "/components/navigation/footer";
import Grid from "@mui/material/Grid";
import Navbar from "/components/navigation/navbar";
import utils from "/styles/utils.module.css";

export default function Writings() {
  return (
    <div className="h-screen mx-0 px-4 sm:px-32 bg-indigo-950">
      <Navbar />
      <div className="px-4 sm:px-32 bg-indigo-950">
        <Grid container className="px-8 py-20">
          <Grid item xs={12} sm={12} md={6} className="grid content-end mb-4">
            <div className="text-left text-slate-300 text-3xl my-2">
              Written works
            </div>
            <div className="text-left text-slate-400 text-xl">
              This is a collection of my written works, including blog posts,
              FOIA requests, news articles, essays, and other miscellaneous
              writings.
            </div>
          </Grid>
          <Grid item xs={12} className="grid content-start">
            <div className="text-left text-md text-white my-2">
              <a
                className={utils.linkToResume}
                href="https://codeforamerica.org/news/limits-technology-homelessness/"
              >
                When A Cool Shiny App Won't Cut It: Recognizing the Limits of
                Technology in Addressing Homelessness&nbsp;
              </a>
              — Code for America, 2021
            </div>
            <div className="text-left text-md text-white my-2">
              <a
                className={utils.linkToResume}
                href="https://codeforamerica.org/news/meet-the-community-fellows-team-adams-county/"
              >
                Meet the Community Fellows: Team Adams County&nbsp;
              </a>
              — Code for America, 2021
            </div>
            <div className="text-left text-md text-white my-2">
              <a
                className={utils.linkToResume}
                href="https://digitalprivacy.news/2021/04/13/a-terrible-idea/"
              >
                &apos;A Terrible Idea&apos; Amazon Expands Contactless
                &apos;Palm&apos; Technology During Pandemic&nbsp;
              </a>
              — Digital Privacy News, 2021
            </div>
            <div className="text-left text-md text-white my-2">
              <a
                className={utils.linkToResume}
                href="https://digitalprivacy.news/2021/04/16/giving-it-out-like-candy/"
              >
                &apos;Giving It Out Like Candy&apos; Calif. Bill Seeks to Stop
                Police From Unbridled License-Plate Data Collection&nbsp;
              </a>
              — Digital Privacy News, 2021
            </div>
            <div className="text-left text-md text-white my-2">
              <a
                className={utils.linkToResume}
                href="https://www.aclu.org/cases/trump-conflicts-interest-foia?document=trump-conflicts-interest-foia-request#"
              >
                Trump Conflicts of Interest FOIA&nbsp;
              </a>
              — ACLU, 2017
            </div>
            <div className="text-left text-md text-white my-2">
              <a
                className={utils.linkToResume}
                href="https://www.aclu.org/news/privacy-technology/aclu-foia-seeks-information-about-how-government"
              >
                ACLU FOIA Seeks Information About How Government Launders
                Evidence&nbsp;
              </a>
              — ACLU, 2016
            </div>
            <div className="text-left text-md text-white my-2">
              <a
                className={utils.linkToResume}
                href="https://www.aclu.org/legal-document/foia-request-under-freedom-information-act"
              >
                Parallel Construction FOIA&nbsp;
              </a>
              — ACLU, 2016
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
