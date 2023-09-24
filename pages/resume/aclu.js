import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import utils from '/styles/utils.module.css'

export default function ACLUCard() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 1200, marginTop: '10px', marginBottom: '10px', backgroundColor: 'hsla(0, 100%, 0%, 0.7)' }}>
      <CardContent>
        <Grid container sx={{ display: 'flex' }}>
          <Grid item>
            <Image
              priority
              src="/images/aclu-logo.jpg"
              className={utils.borderLogo}
              height={80}
              width={80}
              alt="aclu-logo"
            />
        </Grid>
        <Grid item sx={{ marginLeft: '10px'}}>
          <Typography variant="h6" component="div" className={utils.positionTitleText}>
            Paralegal
          </Typography>
          <Typography variant="subtitle2" className={utils.descriptionText}>
            American Civil Liberties Union
          </Typography>
          <Typography variant="subtitle2" className={utils.descriptionText}>
            4/2016 – 10/2017
          </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" className={utils.descriptionText}>
          <ul>
            <li>Edited and cite-checked legal briefs, adhering to the a detailed system of citation rules. Wrote and filed Freedom of Information Act requests and appeals with over 30 government agencies.</li>
            <li>Validated data claims made by the ACLU in <i>U.S. v. Gilton</i> and in the U.S. Supreme Court case, <i>U.S. v. Carpenter</i>, through analysis of cell site location information and electronic search warrant notifications, respectively (Excel, python).</li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}