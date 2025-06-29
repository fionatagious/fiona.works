import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface ResumeOverviewProps {
  className?: string;
}

const ResumeOverview = ({ className }: ResumeOverviewProps) => {
  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          maxWidth: 1200,
          backgroundColor: "hsla(0, 100%, 0%, 0.7)",
          color: "white",
        }}
        className={`mt-3 mb-2 ${className}`}
      >
        <CardContent className="d-flex pb-6">
          <div className="text-sm sm:text-md calibre">
            👋🏽&nbsp;&nbsp;I&apos;m a collaborative and dedicated full-stack
            software engineer passionate about using my skills to equip
            organizations with the technology they need to better serve their
            communities. My work experiences span non-profits, government
            consulting firms, and startups.
            <br />
            <br />
            📫&nbsp;&nbsp;Write to me at&nbsp;
            <a
              href="mailto:fionatagious@gmail.com"
              className="text-pink font-semibold"
            >
              fionatagious@gmail.com
            </a>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ResumeOverview;
