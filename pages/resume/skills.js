import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SkillsAccordion from "/components/accordion";

export default function Skills() {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 1200,
        backgroundColor: "hsla(0, 100%, 0%, 0.7)",
        color: "white",
      }}
    >
      <CardContent>
        <SkillsAccordion />
      </CardContent>
    </Card>
  );
}
