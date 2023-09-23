import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import utils from '/styles/utils.module.css'

export default function Overview() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 1200, opacity: 0.8, backgroundColor: 'hsla(0, 100%, 0%, 0.7)' }}>
      <CardContent sx={{ pb: 0 }}>
        <Typography className={utils.overviewText}>
          👋🏽&nbsp;&nbsp;I&apos;m a collaborative and committed full-stack software engineer passionate about using my skills to to equip governments and non-profits with the technology they need to better serve their communities. My work experiences span non-profit organizations, government consulting firms, and mid- to late-stage startups.
        </Typography>
        <Typography className={utils.overviewText}>
          📫&nbsp;&nbsp;I&apos;m excited to collaborate on civic tech and sustainability. Write to me at <a href="mailto: fionatang@alum.berkeley.edu">fionatang@alum.berkeley.edu</a>
        </Typography>
      </CardContent>
    </Card>
  );
}