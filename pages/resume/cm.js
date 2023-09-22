import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function CMCard() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 1200, marginTop: '10px', opacity: 0.8 }}>
      <CardContent>
        <Typography variant="h6" component="div">
            Data Associate
        </Typography>
        <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color="text.secondary">
            Change Machine (formerly The Financial Clinic)
          </Typography>
          <Typography color="text.secondary">
            10/2017 – 4/2018
          </Typography>
        </Grid>
        <Typography variant="body2">
          <ul>
            <li>Developed reports to track achievement in financial outcomes of 70,000 low-income New York City residents. Created dashboards on deliverables to support continued funding and partnerships (Salesforce, Excel, SQL).</li>
            <li>Queried and visualized financial-coaching data to aid in the production of fact sheets, publications, and policy proposals.</li>
            <li>Clarified and fulfilled data requests from Direct Services, Product, and Executive teams, juggling competing priorities.</li>
            <li>Examined financial-coaching data for trends in consumer behavior (Python) to develop the Clinic’s policy agenda.</li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}