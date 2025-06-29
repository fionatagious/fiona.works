import React from "react";
import SocialMedia from "../components/SocialMedia";
import Grid from "@mui/material/Grid";
import { Button } from "@/app/components/buttons/Button";
import ExternalLinkIcon from "@/app/components/icons/ExternalLinkIcon";

const About = () => {
  const handleClick = () => {
    // open the resume in a new tab
    window.open("/resume", "_blank");
  };

  return (
    <Grid item className="flex flex-col sm:flex-row px-4 justify-around">
      <Grid item xs={12} sm={12} md={8} lg={8} xl={6}>
        <div className="text-left text-slate-950 text-sm sm:text-lg md:text-lg mt-2 mb-6">
          I&apos;m a user-focused, results-driven software engineer specializing
          in building technology solutions that enable individuals and
          organizations to create a more sustainable and equitable future.
        </div>
        <div className="text-left text-slate-950 text-sm sm:text-lg md:text-lg mt-2 mb-6">
          When I&apos;m not coding, I enjoy cooking, playing the drums, and
          spending time with friends and family.
        </div>
        <div className="flex justify-center">
          <SocialMedia />
        </div>
        <div className="flex justify-center">
          <Button
            className="text-eggplant bg-lightMauve/20 font-mono border-[1px] border-slate-950 rounded-lg p-4 group hover:bg-eggplant hover:text-white transition duration-200 ease-in-out mt-4"
            label="&nbsp;View my resume"
            onClick={handleClick}
            icon={<ExternalLinkIcon />}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default About;
