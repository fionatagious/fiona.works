import React from "react";
import PropTypes from "prop-types";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import KeyboardDoubleArrowUp from '@mui/icons-material/KeyboardDoubleArrowUp';
// import KeyboardDoubleArrowDown from '@mui/icons-material/KeyboardDoubleArrowDown';
import Grid from "@mui/material/Grid";

export default function SkillsAccordion() {
  // const [expandAll, setExpandAll] = useState(true);

  // const [doubleArrowUpIcon, setDoubleArrowUpIcon] = useState(true);

  // const handleClick = () => {
  // setExpandAll(!expandAll);
  // setDoubleArrowUpIcon(!doubleArrowUpIcon)
  // };

  const skillsData = [
    {
      name: "Languages",
      children: [
        "HTML5",
        "CSS3",
        "Javascript",
        "SQL",
        "TypeScript",
        "Ruby",
        "Python",
        "SAS",
        "R",
      ],
    },
    {
      name: "Frameworks",
      children: [
        "Tailwind",
        "Bootstrap",
        "Next.js",
        "React",
        "Ruby on Rails",
        "Material UI",
      ],
    },
    {
      name: "Tools",
      children: [
        "Jest",
        "Rspec",
        "Capybara",
        "Sidekiq",
        "Logz.io",
        "Honeybadger",
        "SendGrid",
      ],
    },
    {
      name: "Soft skills",
      children: [
        "Attention to detail",
        "Communication",
        "Curiosity",
        "Dedication",
        "Empathy ",
        "Organization",
      ],
    },
  ];

  return (
    <div>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        {/* <Grid item> */}
        <Typography className="text-xl ml-5">Skills</Typography>
        {/* </Grid> */}
        {/* <Grid item>{doubleArrowUpIcon ? (<KeyboardDoubleArrowUp onClick={handleClick} sx={{ color: 'white', marginTop: '1.2rem', cursor: 'pointer' }} />) : (<KeyboardDoubleArrowDown onClick={handleClick} sx={{ color: 'white', marginTop: '1.2rem', cursor: 'pointer' }} />)}</Grid> */}
        {/* <Grid item><button onClick={handleClick}>Expand/Collapse</button></Grid> */}
      </Grid>
      {skillsData.map((item, id) => (
        <Accordion
          defaultExpanded
          sx={{ backgroundColor: "hsla(0, 100%, 0%, 0.3)", color: "white" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel-content"
            id="panel-header"
          >
            <Typography className="text-sm" key={id}>
              {item.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.children.map((child, id) => (
              <Typography key={id} className="text-sm">
                {child}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
