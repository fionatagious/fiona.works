import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function About() {
  return (
    <Grid item className="flex flex-col sm:flex-row px-4 justify-center">
      <Grid item xs={12} sm={12} md={8} lg={8} xl={6}>
        <div className="animate-fadeSlow text-left text-slate-950 text-sm sm:text-lg md:text-lg mt-2 mb-6">
          I am a civic technologist and software engineer. I love making
          delightful user experiences that are accessible and intuitive. Aside
          from a few programming classes I took in undergrad, I am entirely
          self-taught.
        </div>
        <div className="animate-fadeSlow text-left text-slate-950 text-sm sm:text-lg md:text-lg mt-2 mb-6">
          Prior to my career in web development, I worked at the Speech,
          Privacy, and Technology Project at the ACLU. After that, I became
          interested in data-driven public policy, working as an analyst at a
          non-profit, a private startup, and a government consulting firm.
        </div>
        <div className="animate-fadeSlow text-left text-slate-950 text-sm sm:text-lg md:text-lg mt-2 mb-6">
          When I'm not coding, I enjoy reading, cooking, practicing drum beats,
          listening to podcasts, learning about urban planning and walkable
          cities, and spending time with friends and family. I occasionally
          perform at low-key gigs around Chicago. I'm also a stationery hobbyist
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
