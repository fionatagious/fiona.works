import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function CFACard() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 1200, marginTop: '10px' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          Data Analyst
        </Typography>
        <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color="text.secondary">
            Uber
          </Typography>
          <Typography color="text.secondary">
            9/2018 – 3/2019
          </Typography>
        </Grid>
        <Typography variant="body2">
          <ul>
            <li>Wrote advanced queries to build dashboard on growth KPIs, such as retention and average revenue per user (SQL).</li>
            <li>Visualized platform activity of engaged users. Informed decision on whether to pursue targeted marketing (SQL, Tableau).</li>
            <li>Analyzed week-over-week onboarding of Uber Eats sellers to better understand ramp time, enabling Sales Operations
team to establish reasonable quota (SQL, Python).</li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}
