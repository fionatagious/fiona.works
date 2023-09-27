import * as React from "react";
import Container from "@mui/material/Container";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// Work Experience Cards
import Overview from "./overview";
import TMPCard from "./tmp";
import CFACard from "./cfa";
import AcumenCard from "./acumen";
import UberCard from "./uber";
import CMCard from "./cm";
import ACLUCard from "./aclu";
// Skills section
import Skills from "./skills";
// Education section
import Education from "./education";
// Media Carousel
// import MediaCarousel from 'components/carousel'
// Top-level header
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import utils from "/styles/utils.module.css";

export default function Resume() {
  return (
    <>
      <Container
        fluid={true}
        disableGutters
        maxWidth={false}
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #4B3B47 20%, #7E6377 40%, #00B2CA 75%, #7DCFB6 100%)",
        }}
      >
        <Toolbar
          variant="regular"
          sx={{
            position: "sticky",
            zIndex: "15",
            backgroundColor: "hsla(0, 100%, 0%, 0.8)",
          }}
        >
          <Image
            priority
            src="/images/headshot.jpg"
            className={utils.borderCircle}
            height={50}
            width={50}
            alt="profile-image"
          />
          <h2 className={utils.fullNameText}>Fiona Tang</h2>
        </Toolbar>
        <Grid container>
          <Grid item xs={2} className="max-h-screen overflow-auto">
            <Skills />
          </Grid>
          <Grid
            container
            xs={10}
            className="grid justify-center max-h-screen pb-3 text-white overflow-auto"
          >
            <Grid item>
              <Overview className="mt-3" />
            </Grid>
            <Grid item>
              <Typography className="text-xl mt-2 pt-2">Experience</Typography>
            </Grid>
            <Grid item>
              <TMPCard className="min-h-full" />
            </Grid>
            <Grid item>
              <CFACard className="min-h-full" />
            </Grid>

            <Grid item>
              <AcumenCard className="min-h-full" />
            </Grid>

            <Grid item>
              <UberCard className="min-h-full" />
            </Grid>

            <Grid item>
              <CMCard className="min-h-full" />
            </Grid>

            <Grid item>
              <ACLUCard className="min-h-full" />
            </Grid>

            <Grid item>
              <Typography className="text-xl mt-2 pt-2">Education</Typography>

              <Education />
            </Grid>

            {/* <Typography className="text-2xl">Media</Typography> */}
            {/* <MediaCarousel /> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
