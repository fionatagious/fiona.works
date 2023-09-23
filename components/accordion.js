import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import utils from '/styles/utils.module.css'

export default function SkillsAccordion() {
  return (
    <div>
      <Accordion defaultExpanded sx={{ backgroundColor: 'hsla(0, 100%, 0%, 0.3)' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={utils.descriptionText}>Languages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={utils.descriptionText}>HTML5</Typography>
          <Typography className={utils.descriptionText}>CSS3</Typography>
          <Typography className={utils.descriptionText}>Javascript</Typography>
          <Typography className={utils.descriptionText}>SQL</Typography>
          <Typography className={utils.descriptionText}>TypeScript</Typography>
          <Typography className={utils.descriptionText}>Ruby</Typography>
          <Typography className={utils.descriptionText}>Python</Typography>
          <Typography className={utils.descriptionText}>SAS</Typography>
          <Typography className={utils.descriptionText}>R</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={utils.descriptionText}>Frameworks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={utils.descriptionText}>Tailwind</Typography>
          <Typography className={utils.descriptionText}>Bootstrap</Typography>
          <Typography className={utils.descriptionText}>Next.js</Typography>
          <Typography className={utils.descriptionText}>React</Typography>
          <Typography className={utils.descriptionText}>Ruby on Rails</Typography>
          <Typography className={utils.descriptionText}>Material UI</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={utils.descriptionText}>Tools</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={utils.descriptionText}>Jest</Typography>
          <Typography className={utils.descriptionText}>Rspec</Typography>
          <Typography className={utils.descriptionText}>Capybara</Typography>
          <Typography className={utils.descriptionText}>Sidekiq</Typography>
          <Typography className={utils.descriptionText}>Logz.io</Typography>
          <Typography className={utils.descriptionText}>Honeybadger</Typography>
          <Typography className={utils.descriptionText}>SendGrid</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={utils.descriptionText}>Soft Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={utils.descriptionText}>Attention to detail</Typography>
          <Typography className={utils.descriptionText}>Communication</Typography>
          <Typography className={utils.descriptionText}>Curiosity</Typography>
          <Typography className={utils.descriptionText}>Dedication</Typography>
          <Typography className={utils.descriptionText}>Empathy</Typography>
          <Typography className={utils.descriptionText}>Organization</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
