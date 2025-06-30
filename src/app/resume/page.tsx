"use client";

import React from "react";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import ResumeOverview from "./ResumeOverview";
import ExperienceCards from "../components/ExperienceCards";
import ResumeSkills from "./ResumeSkills";
import ResumeEducation from "./ResumeEducation";
import ResumeLeadership from "./ResumeLeadership";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume - Fiona Tang</title>
      </Head>
      <ThemeProvider
        theme={createTheme({
          palette: {
            primary: {
              main: "#d79eff",
            },
          },
          breakpoints: {
            values: {
              xs: 0,
              sm: 640,
              md: 768,
              lg: 1024,
              xl: 1280,
            },
          },
        })}
      >
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            minHeight: "100vh",
            margin: 0,
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
              paddingTop: "0.3rem",
              paddingBottom: "0.3rem",
              justifyContent: "space-between",
            }}
          >
            <div className="full-name-text flex flex-row w-full justify-center">
              Fiona Tang
            </div>
          </Toolbar>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", sm: "row" },
              flexWrap: "nowrap",
            }}
          >
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              sx={{ height: "100vh", overflow: "auto" }}
            >
              <ResumeSkills />
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={9}
              sx={{
                display: "grid",
                height: "100vh",
                overflowY: "auto",
                overflowX: "hidden",
                justifyContent: "center",
                paddingBottom: "0.5rem",
              }}
            >
              <Grid item xs={12}>
                <ResumeOverview className="min-h-full" />
              </Grid>
              <Grid item xs={12}>
                <div className="text-xl text-white ml-3 3xl:ml-0 my-2">
                  Experience
                </div>
                <ExperienceCards className="min-h-full" />
              </Grid>
              <Grid item xs={12}>
                <div className="text-xl text-white my-2 ml-3 sm:ml-2 2xl:ml-0">
                  Leadership and Volunteering
                </div>
                <ResumeLeadership className="min-h-full" />
              </Grid>
              <Grid item xs={12}>
                <div className="text-xl text-white my-2 ml-3 sm:ml-2 2xl:ml-0">
                  Education
                </div>
                <ResumeEducation className="min-h-full" />
              </Grid>
              <Grid item xs={12}>
                <div className="block sm:hidden text-xl text-white mt-3 ml-3 lg:ml-2 xxl:ml-0">
                  Skills
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}
