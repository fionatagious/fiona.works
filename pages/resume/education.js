import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Education() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 1200, marginTop: '10px', opacity: 0.8 }}>
        <CardContent>
        <Typography variant="h6" component="div">
          University of California, Berkeley
        </Typography>
        <Grid>
          <Typography color="text.secondary">
            B.A. Legal Studies
          </Typography>
          <Typography color="text.secondary">
            3.76/4.00, cum laude
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}