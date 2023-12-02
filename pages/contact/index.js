import * as React from "react";
import EmailButton from "/components/buttons/EmailButton";
import Grid from "@mui/material/Grid";

export default function Contact() {
  return (
    <Grid container className="flex justify-center px-4">
      <Grid item xs={12} md={6} lg={5} className="grid content-start">
        <div className="text-center text-gray-300 text-sm sm:text-lg my-2">
          I&apos;m open to freelance opportunities in writing and web
          development.
        </div>
        <div className="text-center text-gray-300 text-sm sm:text-lg my-2">
          If you want to collaborate on projects related to climate change,
          civic tech, or data visualization / data journalism, I'd love to hear
          from you.
        </div>
        <div className="text-center mt-4 mb-2">
          <EmailButton />
        </div>
      </Grid>
    </Grid>
  );
}
