import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export default function AcumenCard() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 1200, marginTop: '10px', opacity: 0.8 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          Data and Policy Analyst - Statistical Programmer
        </Typography>
        <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color="text.secondary">
            Acumen, LLC
          </Typography>
          <Typography color="text.secondary">
            1/2020 – 2/2021
          </Typography>
        </Grid>
        <Typography variant="body2">
          <ul>
            <li>Analyzed claim line-level data to produce summary statistics (SAS) pertaining to weight loss and attendance outcomes under the Medicare Diabetes Prevention Program, administered by the Centers for Medicare and Medicaid Services.</li>
            <li>Produced reports to monitor beneficiary and claim trends, flag adverse/positive selection by suppliers, and audit program compliance. Conduct outreach to suppliers to clarify compliance requirements and offer support (SQL, SAS).</li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}