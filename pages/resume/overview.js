import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import utils from "/styles/utils.module.css";

export default function Overview() {
  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          maxWidth: 1200,
          backgroundColor: "hsla(0, 100%, 0%, 0.7)",
        }}
        className="text-white mt-3 mb-2"
      >
        <CardContent className="d-flex pb-6">
          <Typography className="text-sm">
            👋🏽&nbsp;&nbsp;I&apos;m a collaborative and committed full-stack
            software engineer passionate about using my skills to equip
            organizations with the technology they need to better serve their
            communities. My work experiences span non-profits, government
            consulting firms, and mid- to late-stage startups.
            <br />
            <br />
            💬&nbsp;&nbsp;I’m looking to collaborate on: climate action, civic
            tech, public interest and social impact projects.
            <br />
            📫&nbsp;&nbsp;Write to me at{" "}
            <a
              href="mailto: fionatang@alum.berkeley.edu"
              className={utils.email}
            >
              fionatang@alum.berkeley.edu
            </a>
            .
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
