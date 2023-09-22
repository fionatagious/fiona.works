import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Overview() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 1200 }}>
      <CardContent sx={{ pb: 0 }} >
        <div class="text-2xl">2xl</div>
        <div class="text-3xl">3xl</div>
        <Typography variant="h6" component="div">
          Overview
        </Typography>
        <Typography color="text.secondary">
            I am a collaborative and committed full-stack engineer passionate about using my software skills to improve public service delivery and to equip governments with the technology they need to better serve their communities.
        </Typography>
        <Typography variant="body2">

        </Typography>
      </CardContent>
    </Card>
  );
}