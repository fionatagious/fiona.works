import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SkillsAccordion from '/components/accordion';
import KeyboardDoubleArrowUp from '@mui/icons-material/KeyboardDoubleArrowUp';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import utils from '/styles/utils.module.css'

// const [expanded, setExpanded] = React.useState(true);

const handleClick = () => {
  setExpanded(!expanded);
}

export default function Skills() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 1200, marginTop: '10px', paddingTop: '20px', backgroundColor: 'hsla(0, 100%, 0%, 0.7)' }}>
      <CardContent sx={{ pb: 0 }}>
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Grid item>
            <Typography className={utils.headingMd}>Skills</Typography>
          </Grid>
          <Grid item>
            <KeyboardDoubleArrowUp sx={{ color: 'white' }} onClick={handleClick}/>
          </Grid>
        </Grid>
        <SkillsAccordion/>
      </CardContent>
    </Card>
  )
}