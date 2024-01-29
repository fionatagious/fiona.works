import React from "react";
import GithubIcon from "/components/icons/GithubIcon";
import LinkedInIcon from "/components/icons/LinkedInIcon";
import TwitterIcon from "/components/icons/TwitterIcon";

export default function SocialMedia() {
  return (
    <div className="flex flex-row gap-x-2">
      <a
        href="https://github.com/fionatagious"
        target="_blank"
        className="darken"
      >
        <GithubIcon />
      </a>
      <a
        href="https://twitter.com/fionatagious"
        target="_blank"
        className="darken"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://linkedin.com/in/fionaroni"
        target="_blank"
        className="darken"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}
