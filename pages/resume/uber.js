import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import utils from "/styles/utils.module.css";

export default function UberCard() {
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
              src="/images/uber-eats-logo.jpg"
              className={utils.borderLogo}
              height={80}
              width={80}
              alt="uber-eats-logo"
            />
          </Grid>
          <Grid item sx={{ marginLeft: "0.75rem", alignSelf: "center" }}>
            <Typography
              variant="h6"
              component="div"
              className={utils.positionTitleText}
            >
              Data Analyst
            </Typography>
            <Typography variant="subtitle2" className={utils.descriptionText}>
              Uber
            </Typography>
            <Typography variant="subtitle2" className={utils.descriptionText}>
              9/2018 – 3/2019
            </Typography>
          </Grid>
        </Grid>
        <Typography className="text-sm">
          <ul>
            <li>
              Wrote advanced queries to build dashboard on growth KPIs, such as
              retention and average revenue per user (SQL).
            </li>
            <li>
              Visualized platform activity of engaged users. Informed decision
              on whether to pursue targeted marketing (SQL, Tableau).
            </li>
            <li>
              Analyzed week-over-week onboarding of Uber Eats sellers to better
              understand ramp time, enabling Sales Operations team to establish
              reasonable quota (SQL, Python).
            </li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}
