import * as React from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";

export default function Contact() {
  return (
    <div className="mx-0">
      <Grid container className="flex flex-col min-h-1/2 px-4">
        <Grid item xs={12} md={8} lg={6} className="grid content-start">
          <div className="text-left text-zinc-950 text-sm sm:text-lg my-2">
            I&apos;m open to freelance opportunities in writing and web
            development.
          </div>
          <div className="text-left text-zinc-950 text-sm sm:text-lg my-2">
            In addition, if you're interested in collaborating on projects
            related to climate change, civic tech, or data visualization / data
            journalism, I'd love to hear from you.
          </div>
          <div className="text-left text-zinc-950 text-sm sm:text-lg my-2">
            Write to me at&nbsp;
            <Link
              href="mailto: fionatang@alum.berkeley.edu"
              className="writings-link-animation"
            >
              fionatang@alum.berkeley.edu
            </Link>
            .
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
