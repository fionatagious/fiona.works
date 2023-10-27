import * as React from "react";

// import Button from "/components/button";
// import Footer from "/components/navigation/footer";
import Grid from "@mui/material/Grid";
import Head from "next/head";
// import Navbar from "/components/navigation/navbar";
import GithubIcon from "/components/icons/GithubIcon";
import LinkedInIcon from "/components/icons/LinkedInIcon";
import TwitterIcon from "/components/icons/TwitterIcon";
import utils from "/styles/utils.module.css";

export default function Home() {
  return (
    <div className="h-screen mx-0 px-4 sm:px-32 bg-indigo-950">
      <Head>
        <title>Fiona Tang</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      {/* <Navbar /> */}
      <Grid container className="min-h-1/2 px-8 pt-16 sm:pt-32">
        <Grid item xs={12} className="grid content-center">
          <div className="text-left text-pink text-xl my-2">
            Hello! My name is
          </div>
          <div className="font-bold text-left text-slate-50 text-7xl my-2">
            Fiona Tang
          </div>
          <div className="text-left text-slate-300 text-3xl my-2">
            software engineer & civic technologist
          </div>
        </Grid>
        <Grid item xs={12} md={8} lg={6} className="grid content-start">
          <div className="text-left text-slate-400 text-xl my-2">
            I&apos;m a user-focused, results-driven software engineer
            specializing in building technology solutions that help individuals
            and organizations advance social and economic equity.
          </div>
          <div className="text-left text-slate-400 text-xl my-2">
            My full site is in development, but while you're here, you can check
            out my&nbsp;
            <a href="/resume" className={utils.linkToResume}>
              resume
            </a>
            .
          </div>
        </Grid>
        {/* <Button /> */}
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
      {/* <Footer /> */}

      {/* <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid black;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  );
}
