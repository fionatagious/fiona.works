import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import utils from "/styles/utils.module.css";
import ListItem from "@mui/material/ListItem";

export default function UberCard() {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 1200,
        backgroundColor: "hsla(0, 100%, 0%, 0.7)",
      }}
      className="text-white my-2"
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
            <Typography variant="subtitle2">Uber</Typography>
            <Typography variant="subtitle2">9/2018 – 3/2019</Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ display: "flex" }}>
          <Grid item className="text-sm mt-2">
            <ListItem sx={{ display: "list-item" }}>
              Wrote advanced queries to build dashboard on growth KPIs, such as
              retention and average revenue per user (SQL).
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Visualized platform activity of engaged users. Informed decision
              on whether to pursue targeted marketing (SQL, Tableau).
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Analyzed week-over-week onboarding of Uber Eats sellers to better
              understand ramp time, enabling Sales Operations team to establish
              reasonable quota (SQL, Python).
            </ListItem>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
