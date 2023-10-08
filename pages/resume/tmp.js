import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import utils from "/styles/utils.module.css";

export default function TMPCard() {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 1200,
        backgroundColor: "hsla(0, 100%, 0%, 0.7)",
        color: "white",
      }}
      className="my-2"
    >
      <CardContent>
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
          <Grid item>
            <Image
              priority
              src="/images/tmp-logo.jpg"
              className={utils.borderLogo}
              height={65}
              width={65}
              alt="the-mom-project-logo"
            />
          </Grid>
          <Grid item sx={{ marginLeft: "0.75rem" }}>
            <div className="text-lg sm:text-xl text-pink leading-7">
              Software Engineer
            </div>
            <Typography variant="subtitle2">
              The Mom Project (Growth)
            </Typography>
            <Typography variant="subtitle2">11/2021 – 9/2023</Typography>
          </Grid>
        </Grid>
        <div className="text-sm sm:text-md text-white pl-3 mt-2">
          <ul>
            <li>
              Built features to enhance user flows impacting acquisition and
              retention: log in, sign up, and job post creation (Rails).
            </li>
            <li>
              Served as a technical bridge between Product and Engineering for
              new features, synthesizing feature requests and clarifying
              engineering effort and scope. Led technical planning and
              documented technical specifications.
            </li>
            <li>
              Contributed to the creation and maintenance of a new design system
              and component UI library (Material UI, Storybook).
            </li>
            <li>
              Participated in feature prioritization, architecture discussions,
              and code reviews across four distinct repositories.
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
