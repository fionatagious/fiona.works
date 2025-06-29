import React from "react";
import GithubIcon from "@/app/components/icons/GithubIcon";
import LinkedInIcon from "@/app/components/icons/LinkedInIcon";
import EmailIcon from "@/app/components/icons/EmailIcon";

const SocialMedia = () => {
  return (
    <div className="flex flex-row gap-x-2 mx-2">
      <a
        href="https://linkedin.com/in/fionaroni"
        target="_blank"
        className="darken"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://github.com/fionatagious"
        target="_blank"
        className="darken"
      >
        <GithubIcon />
      </a>
      <a
        href="mailto:fionatagious@gmail.com"
        target="_blank"
        className="darken"
      >
        <EmailIcon />
      </a>
    </div>
  );
};

export default SocialMedia;
