import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SkillsAccordion from '/components/accordion';
import KeyboardDoubleArrowUp from '@mui/icons-material/KeyboardDoubleArrowUp';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import utils from '/styles/utils.module.css'

  export default function Skills() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 1200, marginTop: '10px', backgroundColor: 'hsla(0, 100%, 0%, 0.7)' }}>
      <CardContent>
        <SkillsAccordion />
      </CardContent>
    </Card>
  )
};

Skills.PropTypes = {
  expanded: PropTypes.boolean
};