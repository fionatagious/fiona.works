import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import utils from "/styles/utils.module.css";

export default function Overview() {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 1200,
        marginTop: "1.2rem",
        marginBottom: "15px",
        backgroundColor: "hsla(0, 100%, 0%, 0.7)",
        color: "white",
      }}
    >
      <CardContent>
        <Typography variant="body2" className={utils.descriptionText}>
          👋🏽&nbsp;&nbsp;I&apos;m a collaborative and committed full-stack
          software engineer passionate about using my skills to equip
          organizations with the technology they need to better serve their
          communities. My work experiences span non-profits, government
          consulting firms, and mid- to late-stage startups.
        </Typography>
        <br />
        <Typography variant="body2" className={utils.descriptionText}>
          💬&nbsp;&nbsp;I’m looking to collaborate on: climate action, civic
          tech, public interest and social impact projects.
        </Typography>
        <Typography variant="body2" className={utils.descriptionText}>
          📫&nbsp;&nbsp;Write to me at{" "}
          <a href="mailto: fionatang@alum.berkeley.edu" className={utils.email}>
            fionatang@alum.berkeley.edu
          </a>
          .
        </Typography>
      </CardContent>
    </Card>
  );
}
