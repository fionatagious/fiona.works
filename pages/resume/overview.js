import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import utils from '/styles/utils.module.css'

export default function Overview() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 1200, opacity: 0.8, backgroundColor: 'hsla(0, 100%, 0%, 0.7)' }}>
      <CardContent sx={{ pb: 0 }}>
        <Typography className={utils.descriptionText}>
            I&apos;m a collaborative and committed full-stack software engineer passionate about using my skills to to equip governments and non-profits with the technology they need to better serve their communities.
        </Typography>
      </CardContent>
    </Card>
  );
}