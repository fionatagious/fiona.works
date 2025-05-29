import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { skillsData } from "../../../consts";

export default function SkillsAccordion() {
  return (
    <div>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography className="hidden sm:inline sm:text-xl sm:ml-3">
          Skills
        </Typography>
      </Grid>
      {skillsData.map((item) => (
        <Accordion
          defaultExpanded
          key={item.name}
          sx={{ backgroundColor: "hsla(0, 100%, 0%, 0.3)", color: "white" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel-content"
            id="panel-header"
          >
            <Typography className="text-sm">{item.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.children.map((child) => (
              <Typography key={child.id} className="text-sm">
                {child.name}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
