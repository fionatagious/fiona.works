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
      {/* <Container maxWidth={false} sx={{ position: 'relative', minHeight: '90vh', background: 'linear-gradient(155deg, #7DCFB6 30%, #7DCFB6 30%, #00B2CA 40%, #7E6377 80%, #4B3B47 100%)' }}> */}
      <Container fluid disableGutters maxWidth={false} sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #4B3B47 20%, #7E6377 40%, #00B2CA 60%, #7DCFB6 80%, #7DCFB6 100%)' }}>
        <Toolbar variant='regular' sx={{ position: 'sticky', zIndex: '15', backgroundColor: 'hsla(0, 100%, 0%, 0.8)' }}>
          <Image
            priority
            src="/images/headshot.jpg"
            className={utils.borderCircle}
            height={60}
            width={60}
            alt="profile-image"
          />
          <div className="marginLeft: 10px">
            <h2 className={utils.descriptionText}>Fiona Tang</h2>
          </div>
        </Toolbar>
        <Grid container rowSpacing={{ xs: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3} sx={{ maxHeight: '100vh', overflow: 'auto' }}>
            <Skills />
          </Grid>
          <Grid item xs={9} sx={{ maxHeight: '100vh', overflow: 'auto' }}>
            <Overview />
            <Typography className={utils.headingMd}>Work Experience</Typography>
            <TMPCard />
            <CFACard />
            <AcumenCard />
            <UberCard />
            <CMCard />
            <Typography className={utils.headingMd}>Education</Typography>
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