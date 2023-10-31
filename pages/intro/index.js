import * as React from "react";
import Grid from "@mui/material/Grid";
import SocialMedia from "/components/SocialMedia";

export default function Intro() {
  return (
    <>
      <Grid item xs={12} className="grid content-center px-4 sm:pl-32">
        <div className="text-left text-red-200 text-xl my-2">
          Hello! My name is
        </div>
        <div className="font-bold text-left text-slate-50 text-4xl sm:text-7xl my-2">
          Fiona Tang
        </div>
        <span>
          {/* <div className="text-left text-red-200 text-xl my-2">I am a</div> */}
          <div className="text-left text-slate-300 text-3xl my-2">
            software engineer & civic technologist
          </div>
        </span>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        lg={6}
        className="grid content-start mb-4 px-4 sm:pl-32"
      >
        <div className="text-left text-slate-400 text-xl my-2 mb-6">
          I&apos;m a user-focused, results-driven software engineer specializing
          in building technology solutions that help individuals and
          organizations advance social and economic equity.
        </div>
        <SocialMedia />
      </Grid>
    </>
  );
}
