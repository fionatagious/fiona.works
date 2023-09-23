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
      <Toolbar variant='regular' sx={{ position: 'sticky', zIndex: '5', backgroundColor: 'hsla(0, 100%, 0%, 0.8)' }}>
        <Image
          priority
          src="/images/headshot.jpg"
          className={utils.borderCircle}
          height={60}
          width={60}
          alt="profile-image"
        />
        <h2 className={utils.descriptionText}>Fiona Tang</h2>
      </Toolbar>
      <Container maxWidth={false} sx={{ position: 'relative', minHeight: '90vh', background: 'linear-gradient(155deg, #F79256 10%, #FBD1A2 30%, #7DCFB6 50%, #00B2CA 100%)' }}>
        <Grid container rowSpacing={{ xs: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3} sx={{ maxHeight: '100vh', overflow: 'auto', marginTop: '24px', paddingBottom: '24px' }}>
            <Typography variant="h6">Skills</Typography>
            <Skills />
          </Grid>
          <Grid item xs={9} sx={{ maxHeight: '100vh', overflow: 'auto', marginTop: '24px', paddingBottom: '24px' }}>
            <Typography variant="h6">Overview</Typography>
            <Overview />
            <Typography variant="h6">Work Experience</Typography>
            <TMPCard />
            <CFACard />
            <AcumenCard />
            <UberCard />
            <CMCard />
            <Typography variant="h6">Education</Typography>
            <Education />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}


    // <div>
    //   {
    //     ['left', 'right', 'top', 'bottom'].map((anchor) => (
    //     <React.Fragment key={anchor}>
    //       {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
    //       {/* <Drawer
    //         anchor={anchor}
    //         open={state[anchor]}
    //         onClose={toggleDrawer(anchor, false)}
    //       >
    //         {list(anchor)}
    //       </Drawer> */}
    //     </React.Fragment>
    //   ))
    //   }
    // </div>