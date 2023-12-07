import * as React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function About() {
  return (
    <Grid item className="flex flex-col sm:flex-row px-4 justify-center">
      <Grid item xs={12} sm={12} md={8} lg={8} xl={6}>
        <div className="text-left text-gray-300 text-sm sm:text-lg md:text-lg mt-2 mb-6">
          My most recent work experiences are at Code for America and at The Mom
          Project. While at CfA, I partnered with the government of Adams
          County, Colorado, to build a web app that helped people experiencing
          homelessness access temporary shelter. At The Mom Project, I helped to
          build a platform that connects moms, dads, and caretakers with
          employers that offer flexible work.
        </div>
        <div className="text-left text-gray-300 text-sm sm:text-lg md:text-lg mt-2 mb-6">
          When I'm not coding, I enjoy cooking, learning new drum beats, and
          spending time with friends and family. I'm also a stationery hobbyist
          and a coffee enthusiast.
        </div>
      </Grid>
      <div className="hidden xl:inline-block ml-4 sm:ml-6 my-auto">
        <Image
          priority
          src="/images/headshot.jpg"
          height={350}
          width={350}
          alt="profile-image-large"
          style={{ borderRadius: "4%" }}
        />
      </div>
    </Grid>
  );
}
