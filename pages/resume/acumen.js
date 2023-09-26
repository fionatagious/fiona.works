import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import utils from "/styles/utils.module.css";

export default function AcumenCard() {
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
              src="/images/acumen-logo.jpg"
              className={utils.borderLogo}
              height={80}
              width={80}
              alt="acumen-logo"
            />
          </Grid>
          <Grid item sx={{ marginLeft: "0.75rem", alignSelf: "center" }}>
            <Typography
              variant="h6"
              component="div"
              className={utils.positionTitleText}
            >
              Data and Policy Analyst—Statistical Programmer
            </Typography>
            <Typography variant="subtitle2" className={utils.descriptionText}>
              Acumen, LLC
            </Typography>
            <Typography variant="subtitle2" className={utils.descriptionText}>
              1/2020 – 2/2021
            </Typography>
          </Grid>
        </Grid>
        <Typography className="text-sm">
          <ul>
            <li>
              Analyzed claim line-level data to produce summary statistics (SAS)
              pertaining to weight loss and attendance outcomes under the
              Medicare Diabetes Prevention Program, administered by the Centers
              for Medicare and Medicaid Services.
            </li>
            <li>
              Produced reports to monitor beneficiary and claim trends, flag
              adverse/positive selection by suppliers, and audit program
              compliance. Conducted outreach to suppliers to clarify compliance
              requirements and offer support during the Covid-19 pandemic (SQL,
              SAS).
            </li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}
