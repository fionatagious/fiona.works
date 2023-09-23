import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SkillsAccordion from '/components/accordion';

export default function Skills() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 1200, marginTop: '10px', backgroundColor: 'hsla(0, 100%, 0%, 0.7)' }}>
      <CardContent sx={{ pb: 0 }}>
        <SkillsAccordion/>
      </CardContent>
    </Card>
  )
}