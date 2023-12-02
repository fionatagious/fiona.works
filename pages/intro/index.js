import * as React from "react";
import Grid from "@mui/material/Grid";
import SocialMedia from "/components/SocialMedia";

export default function Intro() {
  return (
    <>
      <Grid item xs={12} className="grid content-center px-4 md:pl-32">
        <div className="text-left text-gray-400 font-bold font-mono text-2xl mb-2 mt-4">
          Hello! My name is
        </div>
        <div className="font-extrabold text-left text-slate-200 text-4xl sm:text-7xl my-3">
          Fiona Tang
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        lg={6}
        className="grid content-start mb-4 px-4 md:pl-32"
      >
        <div className="text-left text-gray-300 text-lg sm:text-xl my-2 mb-6">
          I&apos;m a user-focused, results-driven software engineer specializing
          in building technology solutions that help individuals and
          organizations advance social and economic equity.
        </div>
        <SocialMedia />
      </Grid>
    </>
  );
}
