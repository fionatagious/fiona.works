import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// Work Experience Cards
import Overview from "./overview";
import TMPCard from "./tmp";
import CFACard from "./cfa";
import AcumenCard from "./acumen";
import UberCard from "./uber-card";
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
    <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            laptop: 1024,
            tablet: 640,
            mobile: 0,
            desktop: 1280,
          },
        },
      })}
    >
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
        <Grid container class="flex flex-column xs:flex-row">
          <Grid
            item
            xs={2}
            className="hidden xs:flex xs:max-h-screen xs:overflow-auto"
          >
            <Skills />
          </Grid>
          <Grid
            item
            mobile={12}
            xs={10}
            className="grid justify-center max-h-screen pb-2 overflow-auto"
          >
            <Grid item xs={12}>
              <Overview className="min-h-full mt-3" />
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{ width: "100%" }}
                class="text-white text-xl pt-2 mt-2 ml-5"
                // className={utils.sectionHeadingText}
              >
                Experience
              </Typography>
              <TMPCard className="min-h-full" />
              <CFACard className="min-h-full" />
              <AcumenCard className="min-h-full" />
              <UberCard className="min-h-full" />
              <CMCard className="min-h-full" />
              <ACLUCard className="min-h-full" />
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{ width: "100%" }}
                class="text-white text-xl pt-2 mt-2 ml-5"
                // className={utils.sectionHeadingText}
              >
                Education
              </Typography>
              <Education className="min-h-full" />
            </Grid>

            {/* <Typography className="text-2xl">Media</Typography> */}
            {/* <MediaCarousel /> */}
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
