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
              Built, tested, and debugged features to enhance user flows to
              improve user acquisition and retention: log in, sign up, and job
              post creation (Rails, React.js).
            </li>
            <li>
              Led technical planning and documentation for several high-impact
              epics. Developed acceptance criteria and user stories. Synthesized
              feature requests and product requirements.
            </li>
            <li>
              Built reusable components for a migration from Rails codebase to a
              brand new front-end architecture (Next.js, React.js, TypeScript),
              leveraging integrations between our data structures,
              microservices, and APIs.
            </li>
            <li>
              Contributed to the creation and maintenance of a new design system
              and component UI library (Material UI, Storybook).
            </li>
            <li>
              Participated in feature prioritization, architecture discussions,
              and code reviews across four distinct repositories.
            </li>
            <li>
              Updated transactional emails with new content and designs
              following two major company re-brands. Wrote application logic to
              implement email-related workers and triggers (Rails, SendGrid,
              Sidekiq).
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
