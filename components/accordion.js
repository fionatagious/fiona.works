import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SkillsAccordion() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Languages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>HTML5</Typography>
          <Typography>CSS3</Typography>
          <Typography>Javascript</Typography>
          <Typography>SQL</Typography>
          <Typography>TypeScript</Typography>
          <Typography>Ruby</Typography>
          <Typography>Python</Typography>
          <Typography>SAS</Typography>
          <Typography>R</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Frameworks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Tailwind</Typography>
          <Typography>Bootstrap</Typography>
          <Typography>Next.js</Typography>
          <Typography>React</Typography>
          <Typography>Ruby on Rails</Typography>
          <Typography>Material UI</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Tools</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Jest</Typography>
          <Typography>Rspec</Typography>
          <Typography>Capybara</Typography>
          <Typography>Sidekiq</Typography>
          <Typography>Logz.io</Typography>
          <Typography>Honeybadger</Typography>
          <Typography>SendGrid</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Soft Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Attention to detail</Typography>
          <Typography>Communication</Typography>
          <Typography>Curiosity</Typography>
          <Typography>Dedication</Typography>
          <Typography>Empathy</Typography>
          <Typography>Organization</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
