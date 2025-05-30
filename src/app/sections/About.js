import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import { Button } from "@/app/components/buttons/Button";
import ExternalLinkIcon from "@/app/components/icons/ExternalLinkIcon";

export default function About() {
  const handleClick = () => {
    // open the resume in a new tab
    window.open("/resume", "_blank");
  };

  return (
    <Grid item className="flex flex-col sm:flex-row px-4 justify-around">
      <Grid item xs={12} sm={12} md={8} lg={8} xl={6}>
        <div className="animate-fade text-left text-slate-950 text-sm sm:text-lg md:text-lg mt-2 mb-6">
          I&apos;m a user-focused, results-driven software engineer specializing
          in building technology solutions that enable individuals and
          organizations to create a more sustainable and equitable future.
        </div>
        <div className="animate-fade text-left text-slate-950 text-sm sm:text-lg md:text-lg mt-2 mb-6">
          Prior to my career in web development, I worked at the intersection of
          law and tech at the ACLU. After that, I delved into data-driven public
          policy, working as an analyst at a non-profit, a private startup, and
          a government consulting firm.
        </div>
        <div className="animate-fade text-left text-slate-950 text-sm sm:text-lg md:text-lg mt-2 mb-6">
          When I&apos;m not coding, I enjoy reading, cooking, playing the drums,
          listening to podcasts, and spending time with friends and family.
        </div>
        <Button
          className="text-eggplant bg-lightMauve/20 font-mono border-[1px] border-slate-950 rounded-lg p-4 group hover:bg-eggplant hover:text-white transition duration-200 ease-in-out"
          label="&nbsp;View my resume"
          onClick={handleClick}
          icon={<ExternalLinkIcon />}
        />
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
