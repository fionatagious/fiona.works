import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SkillsAccordion() {
    const [expanded, setExpanded] = React.useState(true);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="languages-content"
            id="languages-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Languages
            </Typography>
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
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="languages-content"
            id="languages-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Frameworks
            </Typography>
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
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="languages-content"
            id="languages-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Tools
            </Typography>
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
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="languages-content"
            id="languages-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Soft Skills
            </Typography>
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