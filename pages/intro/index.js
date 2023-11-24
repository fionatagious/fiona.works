import * as React from "react";
import Grid from "@mui/material/Grid";
import SocialMedia from "/components/SocialMedia";

export default function Intro() {
  return (
    <>
      <Grid item xs={12} className="grid content-center px-4 md:pl-32">
        <div className="text-left text-trueBlue font-bold font-mono text-xl mb-2 mt-4">
          Hello! My name is
        </div>
        <div className="font-bold text-left text-slate-950 text-4xl sm:text-7xl my-2">
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
        <div className="text-left text-zinc-950 text-lg sm:text-xl my-2 mb-6">
          I&apos;m a user-focused, results-driven software engineer specializing
          in building technology solutions that help individuals and
          organizations advance social and economic equity.
        </div>
        <SocialMedia />
      </Grid>
    </>
  );
}
