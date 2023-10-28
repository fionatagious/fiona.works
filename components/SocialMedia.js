import React from "react";
import GithubIcon from "/components/icons/GithubIcon";
import LinkedInIcon from "/components/icons/LinkedInIcon";
import TwitterIcon from "/components/icons/TwitterIcon";
import utils from "/styles/utils.module.css";

export default function SocialMedia() {
  return (
    <div className="flex flex-row gap-x-2">
      <a
        href="https://github.com/fionatagious"
        className={utils.socialMediaIcons}
      >
        <GithubIcon />
      </a>
      <a
        href="https://twitter.com/fionatagious"
        className={utils.socialMediaIcons}
      >
        <TwitterIcon />
      </a>
      <a
        href="https://linkedin.com/in/fionaroni"
        className={utils.socialMediaIcons}
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}
