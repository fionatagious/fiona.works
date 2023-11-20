import * as React from "react";
import Link from "next/link";

import Grid from "@mui/material/Grid";

export default function Writings() {
  return (
    <div className="h-full sm:h-screen mx-0 bg-indigo-950">
      <div className="h-full sm:h-screen px-4 bg-indigo-950">
        <Grid container className="px-4">
          {/* <Grid item xs={12} sm={12} md={12}>
            <div className="text-left text-slate-400 text-xl mb-6">
              blog posts, FOIA requests, news articles, essays, and other
              miscellaneous writings
            </div>
          </Grid> */}
          <Grid item xs={12}>
            <div className="text-left text-sm sm:text-md text-white my-2">
              <Link
                className="writings-link-animation"
                href="https://codeforamerica.org/news/limits-technology-homelessness/"
              >
                When A Cool Shiny App Won't Cut It: Recognizing the Limits of
                Technology in Addressing Homelessness&nbsp;
              </Link>
              — Code for America, 2021
            </div>
            <div className="text-left text-sm sm:text-md text-white my-2">
              <Link
                className="writings-link-animation"
                href="https://codeforamerica.org/news/meet-the-community-fellows-team-adams-county/"
              >
                Meet the Community Fellows: Team Adams County&nbsp;
              </Link>
              — Code for America, 2021
            </div>
            <div className="text-left text-sm sm:text-md text-white my-2">
              <Link
                className="writings-link-animation"
                href="https://digitalprivacy.news/2021/04/13/a-terrible-idea/"
              >
                &apos;A Terrible Idea&apos; Amazon Expands Contactless
                &apos;Palm&apos; Technology During Pandemic&nbsp;
              </Link>
              — Digital Privacy News, 2021
            </div>
            <div className="text-left text-sm sm:text-md text-white my-2">
              <Link
                className="writings-link-animation"
                href="https://digitalprivacy.news/2021/04/16/giving-it-out-like-candy/"
              >
                &apos;Giving It Out Like Candy&apos; Calif. Bill Seeks to Stop
                Police From Unbridled License-Plate Data Collection&nbsp;
              </Link>
              — Digital Privacy News, 2021
            </div>
            <div className="text-left text-sm sm:text-md text-white my-2">
              <Link
                className="writings-link-animation"
                href="https://change-machine.org/change-matters-the-financial-clinics-customer-insights/"
              >
                Change Matters: The Financial Clinic’s Customer Insights&nbsp;
              </Link>
              — The Financial Clinic, 2018
            </div>
            <div className="text-left text-sm sm:text-md text-white my-2">
              <Link
                className="writings-link-animation"
                href="https://change-machine.org/when-is-more-not-extra-effective-strategies-for-financial-security/"
              >
                When is More Not Extra? Effective Strategies for Financial
                Security&nbsp;
              </Link>
              — The Financial Clinic, 2017
            </div>
            <div className="text-left text-sm sm:text-md text-white my-2">
              <Link
                className="writings-link-animation"
                href="https://www.aclu.org/cases/trump-conflicts-interest-foia?document=trump-conflicts-interest-foia-request#"
              >
                Trump Conflicts of Interest FOIA&nbsp;
              </Link>
              — ACLU, 2017
            </div>
            <div className="text-left text-sm sm:text-md text-white my-2">
              <Link
                className="writings-link-animation"
                href="https://www.aclu.org/news/privacy-technology/aclu-foia-seeks-information-about-how-government"
              >
                ACLU FOIA Seeks Information About How Government Launders
                Evidence&nbsp;
              </Link>
              — ACLU, 2016
            </div>
            <div className="text-left text-sm sm:text-md text-white my-2">
              <Link
                className="writings-link-animation"
                href="https://www.aclu.org/legal-document/foia-request-under-freedom-information-act"
              >
                Parallel Construction FOIA&nbsp;
              </Link>
              — ACLU, 2016
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
