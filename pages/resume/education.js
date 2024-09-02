import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";

export default function Education() {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 1200,
        backgroundColor: "hsla(0, 100%, 0%, 0.7)",
        color: "white",
      }}
      className="mb-2"
    >
      <CardContent>
        <Grid
          container
          sx={{ display: "flex", flexWrap: "nowrap", alignItems: "center" }}
        >
          <Grid item>
            <Image
              priority
              src="/images/ucb.png"
              className="company-logo"
              height={65}
              width={65}
              alt="uc-berkeley-logo"
            />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "0.75rem",
            }}
          >
            <div className="text-md font-mono text-pink">
              University of California, Berkeley
            </div>
            <Typography variant="subtitle2">B.A. Legal Studies</Typography>
            <Typography variant="subtitle2">3.76/4.00, cum laude</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
