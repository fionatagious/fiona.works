import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function About() {
  return (
    <Grid item className="flex flex-col sm:flex-row px-4 justify-center">
      <Grid item xs={12} sm={12} md={8} lg={8} xl={6}>
        <div className="text-left text-slate-950 text-sm sm:text-lg md:text-lg mt-2 mb-6">
          My most recent work experiences are at Code for America and at The Mom
          Project. While at CfA, I partnered with the government of Adams
          County, Colorado, to build a web app that helped people experiencing
          homelessness access temporary shelter. At The Mom Project, I helped to
          build a digital talent marketplace that connects moms, dads, and
          caretakers to companies looking to hire.
        </div>
        <div className="text-left text-slate-950 text-sm sm:text-lg md:text-lg mt-2 mb-6">
          When I'm not coding, I enjoy reading, cooking, practicing new drum
          beats, listening to podcasts, learning about urban planning and
          walkable cities, and spending time with friends and family. I'm also a
          stationery hobbyist and a coffee enthusiast.
        </div>
      </Grid>
      <div className="hidden xl:inline-block ml-4 sm:ml-6 my-auto">
        <Image
          priority
          src="/images/headshot.jpg"
          height={350}
          width={350}
          alt="profile-image-large"
          style={{
            borderRadius: "4%",
            border: "1px solid var(--slate-950)",
            boxShadow: "0 0 10px var(--slate-950)",
          }}
        />
      </div>
    </Grid>
  );
}
