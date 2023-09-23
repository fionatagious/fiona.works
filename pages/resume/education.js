import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import utils from '/styles/utils.module.css'

export default function Education() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 1200, marginTop: '10px', opacity: 0.8, backgroundColor: 'hsla(0, 100%, 0%, 0.7)' }}>
      <CardContent>
        <Grid container sx={{ display: 'flex' }}>
          <Grid item>
            <Image
              priority
              src="/images/ucb.png"
              className={utils.borderLogo}
              height={80}
              width={80}
              alt="uc-berkeley-logo"
            />
          </Grid>
          <Grid item sx={{ marginLeft: '10px'}}>
            <Typography variant="h6" component="div" className={utils.descriptionText}>
              University of California, Berkeley
            </Typography>
            <Typography variant="subtitle2" className={utils.descriptionText}>
              B.A. Legal Studies
            </Typography>
            <Typography variant="subtitle2" className={utils.descriptionText}>
              3.76/4.00, cum laude
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}