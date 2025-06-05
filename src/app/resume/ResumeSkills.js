import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SkillsAccordion from "@/app/components/SkillsAccordion";

const ResumeSkills = () => {
  return (
    <Card
      sx={{
        backgroundColor: "hsla(0, 100%, 0%, 0.7)",
        color: "white",
      }}
    >
      <CardContent>
        <SkillsAccordion />
      </CardContent>
    </Card>
  );
};

export default ResumeSkills;
