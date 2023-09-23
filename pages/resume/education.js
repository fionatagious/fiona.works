import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import utils from '/styles/utils.module.css'

export default function Education() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 1200, marginTop: '10px', opacity: 0.8, backgroundColor: 'hsla(0, 100%, 0%, 0.7)' }}>
      <CardContent>
        <Typography variant="h6" component="div" className={utils.descriptionText}>
          University of California, Berkeley
        </Typography>
        <Grid>
          <Typography variant="subtitle2" className={utils.descriptionText}>
            B.A. Legal Studies
          </Typography>
          <Typography variant="subtitle2" className={utils.descriptionText}>
            3.76/4.00, cum laude
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}