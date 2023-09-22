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

// Work Experience Cards
import Overview from './overview'
import TMPCard from './tmp'
import CFACard from './cfa'
import AcumenCard from './acumen'
import UberCard from './uber'
import CMCard from './cm'

// Skills section
import Skills from './skills'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: true,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h4>Languages</h4>
        {['HTML5', 'CSS3', 'Javascript', 'SQL', 'TypeScript', 'Ruby', 'Python', 'SAS', 'R'].map((text, index) => (
          <ListItem key={text} disablePadding>
              <ListItemIcon>
                {index % 2 === 0 ? <ListItemIcon /> : <ListItemIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <h4>Full-stack Frameworks</h4>
        {['Ruby on Rails', 'Next.js'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemIcon>
              {index % 2 === 0 ? <ListItemIcon /> : <ListItemIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        <h4>Testing Frameworks</h4>
        {['Jest', 'Rspec', 'Capybara'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemIcon>
              {index % 2 === 0 ? <ListItemIcon /> : <ListItemIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        <h4>Soft Skills</h4>
        {['Attention to detail', 'Communication', 'Curiosity', 'Dedication', 'Empathy', 'Organization'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemIcon>
              {index % 2 === 0 ? <ListItemIcon /> : <ListItemIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Container maxWidth={false} sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #4aeadc 0%, #9778d1 20%, #cf2aba 40%, #ee2c82 60%,#fb6962 80%,#fef84c 100%)'}}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={9} sx={{ marginTop: '20px' }}>
          <Overview />
          <TMPCard />
          <CFACard />
          <AcumenCard />
          <UberCard />
          <CMCard />
        </Grid>
        <Grid item xs={3} sx={{ marginTop: '20px' }}>
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