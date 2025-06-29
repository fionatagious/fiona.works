import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { resumeBullets } from "../consts";
import Typography from "@mui/material/Typography";

interface ExperienceCardsProps {
  className?: string;
}

const ExperienceCards = ({ className }: ExperienceCardsProps) => {
  return (
    <>
      {resumeBullets.map((item) => (
        <Card
          key={item.index}
          className={`my-2 ${className}`}
          sx={{
            minWidth: 275,
            maxWidth: 1200,
            backgroundColor: "hsla(0, 100%, 0%, 0.7)",
            color: "white",
          }}
        >
          <CardContent key={item.index}>
            <Grid
              container
              sx={{ display: "flex", flexWrap: "nowrap", alignItems: "center" }}
            >
              <Grid item className="shrink-0">
                <Image
                  priority
                  src={`/images/${item.alias}-logo.jpg`}
                  className="company-logo"
                  height={65}
                  width={65}
                  alt={`${item.alias}-logo`}
                />
              </Grid>
              <Grid item sx={{ marginLeft: "0.75rem" }}>
                <div className="text-md text-pink font-mono leading-7">
                  {item.jobTitle}
                </div>
                <Typography variant="subtitle2">{item.organization}</Typography>
                <Typography variant="subtitle2">{item.team}</Typography>
                <Typography variant="subtitle2">{item.datesWorked}</Typography>
              </Grid>
            </Grid>
            <div className="text-sm sm:text-md text-white pl-3 mt-2">
              <ul className="list-disc">
                {item.children.map((child) => (
                  <li key={child.id}>{child.bullet}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default ExperienceCards;
