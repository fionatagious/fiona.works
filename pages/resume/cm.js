import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { cm } from "../../consts";
import Typography from "@mui/material/Typography";

export default function CMCard() {
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
              src="/images/cm-logo.jpg"
              className="company-logo"
              height={65}
              width={65}
              alt="change-machine-logo"
            />
          </Grid>
          <Grid item sx={{ marginLeft: "0.75rem" }}>
            <div className="text-lg sm:text-xl text-pink leading-7">
              {cm.jobTitle}
            </div>
            <Typography variant="subtitle2">{cm.organization}</Typography>
            <Typography variant="subtitle2">{cm.datesWorked}</Typography>
          </Grid>
        </Grid>
        <div className="text-sm sm:text-md text-white pl-3 mt-2">
          <ul className="list-disc">
            {cm.children.map((child) => (
              <li key={child.id}>{child.bullet}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
