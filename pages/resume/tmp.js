import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import utils from "/styles/utils.module.css";

export default function TMPCard() {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 1200,
        marginTop: "10px",
        backgroundColor: "hsla(0, 100%, 0%, 0.7)",
        color: "white",
      }}
    >
      <CardContent>
        <Grid container sx={{ display: "flex" }}>
          <Grid item>
            <Image
              priority
              src="/images/tmp-logo.jpg"
              className={utils.borderLogo}
              height={80}
              width={80}
              alt="the-mom-project-logo"
            />
          </Grid>
          <Grid item sx={{ marginLeft: "0.75rem", alignSelf: "center" }}>
            <Typography
              variant="h6"
              component="div"
              className={utils.positionTitleText}
            >
              Software Engineer
            </Typography>
            <Typography variant="subtitle2">The Mom Project</Typography>
            <Typography variant="subtitle2">11/2021 – 9/2023</Typography>
          </Grid>
        </Grid>
        <Typography className="text-sm">
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
              Worked in a monolithic codebase (Rails) to migrate to a brand new
              front-end architecture (Next.js, TypeScript), leveraging
              integrations between our data structures, microservices, and APIs.
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
        </Typography>
      </CardContent>
    </Card>
  );
}
