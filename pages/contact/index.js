import * as React from "react";
import EmailButton from "/components/buttons/EmailButton";
import Grid from "@mui/material/Grid";

export default function Contact() {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      window.location = "mailto:fionatagious@gmail.com";
    }
  };
  return (
    <Grid container className="flex justify-center px-4">
      <Grid item xs={12} md={6} lg={5} className="grid content-start">
        <div className="text-center text-slate-950 text-sm sm:text-lg my-2">
          I'm open to connecting with folks who are passionate about civic tech,
          social impact, and sustainability.
        </div>
        <div
          className="flex justify-center mt-4 mb-2"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <EmailButton />
        </div>
      </Grid>
    </Grid>
  );
}
