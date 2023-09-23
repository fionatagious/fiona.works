import * as React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Work Experience Cards
import Overview from './overview'
import TMPCard from './tmp'
import CFACard from './cfa'
import AcumenCard from './acumen'
import UberCard from './uber'
import CMCard from './cm'
import ACLUCard from './aclu'
// Skills section
import Skills from './skills'
// Education section
import Education from './education'
// Top-level header
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import utils from '/styles/utils.module.css'

export default function Resume() {
  return (
    <>
      <Container fluid disableGutters maxWidth={false} sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #4B3B47 20%, #7E6377 40%, #00B2CA 75%, #7DCFB6 100%)' }}>
        <Toolbar variant='regular' sx={{ position: 'sticky', zIndex: '15', backgroundColor: 'hsla(0, 100%, 0%, 0.8)' }}>
          <Image
            priority
            src="/images/headshot.jpg"
            className={utils.borderCircle}
            height={50}
            width={50}
            alt="profile-image"
          />
          <div>
            <h2 className={utils.fullNameText}>Fiona Tang</h2>
          </div>
        </Toolbar>
        <Grid container rowSpacing={{ xs: 2, md: 3 }} columnSpacing={{ xs: 2, sm: 3, md: 5 }}>
          <Grid item xs={3} sx={{ maxHeight: '100vh', overflow: 'auto' }}>
            <Skills />
          </Grid>
          <Grid item xs={9} sx={{ maxHeight: '100vh', overflow: 'auto', paddingRight: '2.3rem' }}>
            <Overview />
            <Typography className={utils.headingMd}>Work Experience</Typography>
            <TMPCard />
            <CFACard />
            <AcumenCard />
            <UberCard />
            <CMCard />
            <ACLUCard />
            <Typography className={utils.headingMd}>Education</Typography>
            <Education />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}