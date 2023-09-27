import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import utils from "/styles/utils.module.css";
import ListItem from "@mui/material/ListItem";
export default function CMCard() {
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
              src="/images/cm-logo.jpg"
              className={utils.borderLogo}
              height={80}
              width={80}
              alt="change-machine-logo"
            />
          </Grid>
          <Grid item sx={{ marginLeft: "0.75rem", alignSelf: "center" }}>
            <Typography
              variant="h6"
              component="div"
              className={utils.positionTitleText}
            >
              Data Associate
            </Typography>
            <Typography variant="subtitle2">
              Change Machine (formerly The Financial Clinic)
            </Typography>
            <Typography variant="subtitle2">10/2017 – 4/2018</Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ display: "flex" }}>
          <Grid item className="text-sm mt-2">
            <ListItem sx={{ display: "list-item" }}>
              Developed reports to track achievement in financial outcomes of
              70,000 low-income New York City residents. Created dashboards on
              deliverables to support continued funding and partnerships
              (Salesforce, Excel, SQL).
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Queried and visualized financial-coaching data to aid in the
              production of fact sheets, publications, and policy proposals.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Clarified and fulfilled data requests from Direct Services,
              Product, and Executive teams, juggling competing priorities.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Examined financial-coaching data for trends in consumer behavior
              (Python) to develop the Clinic’s policy agenda.
            </ListItem>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
