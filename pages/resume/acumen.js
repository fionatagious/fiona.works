import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { acumen } from "../../consts";

export default function AcumenCard() {
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
              src="/images/acumen-logo.jpg"
              className="company-logo"
              height={65}
              width={65}
              alt="acumen-logo"
            />
          </Grid>
          <Grid item sx={{ marginLeft: "0.75rem" }}>
            <div className="hidden sm:block sm:text-xl sm:text-pink sm:leading-7">
              {acumen.jobTitle}
            </div>
            <div className="block sm:hidden text-lg sm:text-xl text-pink leading-7">
              {acumen.jobTitle}
            </div>
            <Typography variant="subtitle2">{acumen.organization}</Typography>
            <Typography variant="subtitle2">{acumen.datesWorked}</Typography>
          </Grid>
        </Grid>
        <div className="text-sm sm:text-md text-white pl-3 mt-2">
          <ul className="list-disc">
            {acumen.children.map((child) => (
              <li key={child.id}>{child.bullet}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
