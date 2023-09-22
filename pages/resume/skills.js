import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import SkillsAccordion from '/components/accordion';

export default function Skills() {
  return (
    <Card sx={{ overflow: 'auto', opacity: 0.8 }}>
      <CardContent sx={{ pb: 0 }}>
        <SkillsAccordion/>
      </CardContent>
    </Card>
  )
}