import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export default function CFACard() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 1200, marginTop: '10px', opacity: 0.8 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          Software Engineering Fellow
        </Typography>
        <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color="text.secondary">
            Code for America
          </Typography>
          <Typography color="text.secondary">
            10/2020 – 7/2021
          </Typography>
        </Grid>
        <Typography variant="body2">
          <ul>
            <li>Researched, project managed, designed, and developed a web app that streamlines the intake process to help people experiencing homelessness access shelter during cold weather periods, in partnership with Adams County, Colorado.</li>
            <li>Expanded the app’s admin functionality to allow for storage of non-contiguous intake periods (Rails).</li>
            <li>Wrote unit tests and validations for program activation dates and intake dates to expand application test coverage (Rails).</li>
            <li>Problem solved a technical tradeoff by writing optimized SQL to query data that was unattainable using ActiveRecord.</li>
            <li>Identified/flagged a data quality issue in which a portion of intake form responses were not being collected (SQL).</li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}