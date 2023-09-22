import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function CFACard() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 1200, marginTop: '10px' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          Software Engineering Fellow
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Code for America
        </Typography>
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