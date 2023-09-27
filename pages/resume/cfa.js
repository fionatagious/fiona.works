import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import utils from "/styles/utils.module.css";
import ListItem from "@mui/material/ListItem";
export default function CFACard() {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 1200,
        backgroundColor: "hsla(0, 100%, 0%, 0.7)",
        color: "white",
      }}
      className=" my-2"
    >
      <CardContent>
        <Grid container sx={{ display: "flex" }}>
          <Grid item>
            <Image
              priority
              src="/images/cfa-logo.jpg"
              className={utils.borderLogo}
              height={80}
              width={80}
              alt="cfa-logo"
            />
          </Grid>
          <Grid item sx={{ marginLeft: "0.75rem", alignSelf: "center" }}>
            <Typography
              variant="h6"
              component="div"
              className={utils.positionTitleText}
            >
              Software Engineering Fellow
            </Typography>
            <Typography variant="subtitle2">Code for America</Typography>
            <Typography variant="subtitle2">10/2020 – 7/2021</Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ display: "flex" }}>
          <Grid item className="text-sm mt-2">
            <ListItem sx={{ display: "list-item" }}>
              Researched, project managed, designed, and developed a web app
              that streamlines the intake process to help people experiencing
              homelessness access shelter during cold weather periods, in
              partnership with Adams County, Colorado.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Expanded the app&apos;s admin functionality to allow for storage
              of non-contiguous intake periods (Rails).
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Wrote unit tests and validations for program activation dates and
              intake dates to expand application test coverage (Rails).
            </ListItem>
            {/* <CardMedia component="picture" height="300" sx={{ border: 'solid white' }}>
            <source media="https://codeforamerica.org/news/limits-technology-homelessness/" />
            <img
              src="https://files.codeforamerica.org/2021/05/09204729/swap-e1621447855163.jpg"
              alt="people experiencing homelessness lined up for shelter"
              height="150"
            />
            <p>When a Cool, Shiny App Won’t Cut It: Recognizing the Limits of Technology in Addressing Homelessness — Code for America</p>
            <p>Working to find housing solutions for people experiencing homelessness shows that technology is just one piece of the puzzle</p>
          </CardMedia> */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
