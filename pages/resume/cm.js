import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import utils from "/styles/utils.module.css";

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
              className={utils.borderLogo}
              height={65}
              width={65}
              alt="change-machine-logo"
            />
          </Grid>
          <Grid item sx={{ marginLeft: "0.75rem" }}>
          <div className="text-xl text-pink leading-7">Data Associate</div>
            <Typography variant="subtitle2">
              Change Machine (formerly The Financial Clinic)
            </Typography>
            <Typography variant="subtitle2">10/2017 – 4/2018</Typography>
          </Grid>
        </Grid>
        <div className="text-sm text-white pl-3 mt-2">
          <ul>
            <li>
              Developed reports to track achievement in financial outcomes of
              70,000 low-income New York City residents. Created dashboards on
              deliverables to support continued funding and partnerships
              (Salesforce, Excel, SQL).
            </li>
            <li>
              Queried and visualized financial-coaching data to aid in the
              production of fact sheets, publications, and policy proposals.
            </li>
            <li>
              Clarified and fulfilled data requests from Direct Services,
              Product, and Executive teams, juggling competing priorities.
            </li>
            <li>
              Examined financial-coaching data for trends in consumer behavior
              (Python) to develop the Clinic’s policy agenda.
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
