import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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

export default function Resume() {
  return (
    <Container maxWidth={false} sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #ef745c 40%, #34073d 60%, #34073d 100%)'}}>
      <Grid container rowSpacing={{ xs: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={8} sx={{ maxHeight: '100vh', overflow: 'auto', marginTop: '24px', paddingBottom: '24px' }}>
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
        <Grid item xs={4} sx={{ maxHeight: '100vh', overflow: 'auto', marginTop: '24px', paddingBottom: '24px' }}>
          <Typography variant="h6">Skills</Typography>
          <Skills />
        </Grid>
      </Grid>
    </Container>
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