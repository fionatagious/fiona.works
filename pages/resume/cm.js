import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import utils from '/styles/utils.module.css'

export default function CMCard() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 1200, marginTop: '10px', backgroundColor: 'hsla(0, 100%, 0%, 0.7)' }}>
      <CardContent>
        <Grid container sx={{ display: 'flex' }}>
          <Grid item>
            <Image
              priority
              src="/images/cm-logo.jpg"
              className={utils.borderLogo}
              height={80}
              width={80}
              alt="profile-image"
            />
          </Grid>
          <Grid item sx={{ marginLeft: '10px'}}>
            <Typography variant="h6" component="div" className={utils.descriptionText}>
              Data Associate
            </Typography>
            <Typography variant="body3" className={utils.descriptionText}>
              Change Machine (formerly The Financial Clinic)
            </Typography>
            <Typography variant="body3" className={utils.descriptionText}>
              10/2017 – 4/2018
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" className={utils.descriptionText}>
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