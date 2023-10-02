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
// Top-level header
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import utils from "/styles/utils.module.css";
// Media Carousel
// import MediaCarousel from 'components/carousel'

export default function Resume() {
  return (
    <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
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
        <Grid container sx={{ display: "flex", flexDirection: { xs: "column-reverse", sm: "row" }, flexWrap: "nowrap" }}>
          <Grid item xs={12} sm={4} md={3} sx={{ height: "100vh", overflow: "auto" }}>
            <Skills />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={9}
            sx={{ display: "grid", height: "100vh", overflowY: "auto", overflowX: "hidden", justifyContent: "center", paddingBottom: 2 }}
          >
            <Grid item xs={12}>
              <Overview className="min-h-full" />
            </Grid>
            <Grid item xs={12}>
              <Typography
                className="text-xl text-white ml-3 lg:ml-2 xxl:ml-0"
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
                className="text-xl text-white ml-3 lg:ml-2 xxl:ml-0"
              >
                Education
              </Typography>
              <Education className="min-h-full" />
            </Grid>
            <Grid item xs={12}>
              <Typography
                className="inline sm:hidden text-xl text-white ml-3 lg:ml-2 xxl:ml-0"
              >
                Skills
              </Typography>
            </Grid>

            {/* <Typography className="text-2xl">Media</Typography> */}
            {/* <MediaCarousel /> */}
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
