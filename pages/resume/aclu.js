import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { aclu } from "../../consts";
import Typography from "@mui/material/Typography";

export default function ACLUCard() {
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
              src="/images/aclu-logo.jpg"
              className="company-logo"
              height={65}
              width={65}
              alt="aclu-logo"
            />
          </Grid>
          <Grid item sx={{ marginLeft: "0.75rem" }}>
            <div className="text-lg sm:text-xl text-pink leading-7">
              {aclu.jobTitle}
            </div>
            <Typography variant="subtitle2">{aclu.organization}</Typography>
            <Typography variant="subtitle2">{aclu.team}</Typography>
            <Typography variant="subtitle2">{aclu.datesWorked}</Typography>
          </Grid>
        </Grid>
        <div className="text-sm sm:text-md text-white pl-3 mt-2">
          <ul className="list-disc">
            {aclu.children.map((child) => (
              <li key={child.id}>{child.bullet}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
