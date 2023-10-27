import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import utils from "/styles/utils.module.css";

export default function CFACard() {
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
              src="/images/cfa.jpg"
              className={utils.borderLogo}
              height={65}
              width={65}
              alt="cfa-logo"
            />
          </Grid>
          <Grid item sx={{ marginLeft: "0.75rem" }}>
            <div className="text-lg sm:text-xl text-pink leading-7">
              Software Engineering Fellow
            </div>
            <Typography variant="subtitle2">Code for America</Typography>
            <Typography variant="subtitle2">10/2020 – 7/2021</Typography>
          </Grid>
        </Grid>
        <div className="text-sm sm:text-md text-white pl-3 mt-2">
          <ul className="list-disc">
            <li>
              Researched, project managed, designed, and developed a web app
              that streamlines the intake process to help people experiencing
              homelessness access shelter during cold weather periods, in
              partnership with Adams County, Colorado.
            </li>
            <li>
              Performed user research to better understand the social services
              needs of people experiencing homelessness, and to better
              understand the technology needs of caseworkers working to help the
              unhoused.
            </li>
            <li>
              Investigated customer issues and supported data integrity of our
              database. Identified and addressed a data quality issue in which a
              portion of intake form responses were not being collected (SQL).
            </li>
            <li>
              Expanded the app&apos;s admin functionality to allow for storage
              of non-contiguous intake periods (Rails).
            </li>
            <li>
              Wrote unit tests and validations for program activation dates and
              intake dates to expand application test coverage (Rails).
            </li>
            <li>
              Problem solved a technical tradeoff by writing optimized SQL to
              query data that was unattainable using ActiveRecord.
            </li>
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
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
