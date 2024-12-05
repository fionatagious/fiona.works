import React from "react";
import Grid from "@mui/material/Grid";
import SocialMedia from "/components/SocialMedia";

export default function Intro() {
  return (
    <Grid container className="justify-center content-center">
      <Grid item xs={12} md={6} lg={5}>
        <div id="page-name">
          <div className="text-left font-mono text-slate-950 text-sm sm:text-lg md:text-lg mb-2">
            Hello! My name is
          </div>
          <div className="fade-in-entry text-left text-page-title text-4xl text-nowrap font-mono text-eggplant mb-2">
            Fiona Tang
          </div>
          <SocialMedia />
        </div>
      </Grid>
    </Grid>
  );
}
