import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import utils from '/styles/utils.module.css'

export default function CFACard() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 1200, marginTop: '10px', backgroundColor: 'hsla(0, 100%, 0%, 0.7)' }}>
      <CardContent>
        <Grid container sx={{ display: 'flex' }}>
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
          <Grid item sx={{ marginLeft: '10px'}}>
            <Typography variant="h6" component="div" className={utils.descriptionText}>
              Software Engineering Fellow
            </Typography>
            <Typography variant="subtitle2" className={utils.descriptionText}>
              Code for America
            </Typography>
            <Typography variant="subtitle2" className={utils.descriptionText}>
              10/2020 – 7/2021
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" className={utils.descriptionText}>
          <ul>
            <li>Researched, project managed, designed, and developed a web app that streamlines the intake process to help people experiencing homelessness access shelter during cold weather periods, in partnership with Adams County, Colorado.</li>
            <li>Expanded the app&apos;s admin functionality to allow for storage of non-contiguous intake periods (Rails).</li>
            <li>Wrote unit tests and validations for program activation dates and intake dates to expand application test coverage (Rails).</li>
            <li>Problem solved a technical tradeoff by writing optimized SQL to query data that was unattainable using ActiveRecord.</li>
            <li>Identified/flagged a data quality issue in which a portion of intake form responses were not being collected (SQL).</li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}