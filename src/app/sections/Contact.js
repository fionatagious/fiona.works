import * as React from "react";
import { Button } from "@/app/components/buttons/Button";
import Grid from "@mui/material/Grid";

export default function Contact() {
  const handleClick = () => {
    window.location = "mailto:fionatagious@gmail.com";
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      window.location = "mailto:fionatagious@gmail.com";
    }
  };

  return (
    <Grid container className="flex justify-center px-4">
      <Grid item xs={12} md={6} lg={5} className="grid content-start">
        <div className="text-center text-slate-950 text-sm sm:text-lg my-2">
          I'm open to connecting with folks who are passionate about civic tech,
          social impact, and sustainability.
        </div>
        <div
          className="flex justify-center mt-4 mb-2"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <Button
            className="group text-eggplant bg-lightMauve/20 font-normal font-mono border-[1px] border-slate-950 rounded-lg p-4 hover:bg-eggplant hover:text-white transition duration-200 ease-in-out"
            label="Email me"
            onClick={handleClick}
          />
        </div>
      </Grid>
    </Grid>
  );
}
