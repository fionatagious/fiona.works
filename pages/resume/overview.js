import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Overview() {
  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          maxWidth: 1200,
          backgroundColor: "hsla(0, 100%, 0%, 0.7)",
          color: "white",
        }}
        className="mt-3 mb-2"
      >
        <CardContent className="d-flex pb-6">
          <div className="text-sm sm:text-md">
            👋🏽&nbsp;&nbsp;I&apos;m a collaborative and committed full-stack
            software engineer passionate about using my skills to equip
            organizations with the technology they need to better serve their
            communities. My work experiences span non-profits, government
            consulting firms, and startups.
            <br />
            <br />
            💬&nbsp;&nbsp;I’m looking to collaborate on: climate action, civic
            tech, public interest and social impact projects.
            <br />
            📫&nbsp;&nbsp;Write to me at&nbsp;
            <a
              href="mailto: fionatang@alum.berkeley.edu"
              className="text-pink font-semibold"
            >
              fionatang@alum.berkeley.edu
            </a>
            .
          </div>
        </CardContent>
      </Card>
    </>
  );
}
