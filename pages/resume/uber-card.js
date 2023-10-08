import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import utils from "/styles/utils.module.css";

export default function UberCard() {
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
              src="/images/uber-eats-logo.jpg"
              className={utils.borderLogo}
              height={65}
              width={65}
              alt="uber-eats-logo"
            />
          </Grid>
          <Grid item sx={{ marginLeft: "0.75rem" }}>
            <div className="text-lg sm:text-xl text-pink leading-7">
              Data Analyst
            </div>
            <Typography variant="subtitle2">Uber (Sales Operations)</Typography>
            <Typography variant="subtitle2">9/2018 – 3/2019</Typography>
          </Grid>
        </Grid>
        <div className="text-sm sm:text-md text-white pl-3 mt-2">
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
        </div>
      </CardContent>
    </Card>
  );
}
