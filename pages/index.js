import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Head from "next/head";
import Typography from "@mui/material/Typography";
import utils from "/styles/utils.module.css";

export default function Home() {
  return (
    <Container
      fluid={true}
      disableGutters
      maxWidth={false}
      sx={{
        height: "100vh",
        margin: 0,
        background:
          "linear-gradient(135deg, #4B3B47 20%, #7E6377 40%, #00B2CA 75%, #7DCFB6 100%)",
      }}
    >
      <Head>
        <title>Fiona Tang&apos;s site</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <main>
        <Card sx={{ opacity: "50%", maxWidth: "36rem" }}>
          <CardContent className="pt-6">
            <Grid container rowSpacing={{ xs: 1, md: 3 }}>
              <Grid item xs={12}>
                <Typography className="text-center text-3xl mt-2">
                  Hello, I&apos;m Fiona.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={utils.homepageDescriptionText}>
                  I&apos;m a software engineer based in Chicago. <br />
                  Click{" "}
                  <a href="/resume" className={utils.linkToResume}>
                    here
                  </a>{" "}
                  to learn more.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </main>

      {/* <footer>
      footer content
      </footer> */}

      <style jsx>{`
        main {
          height: 100%;
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid black;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </Container>
  );
}
