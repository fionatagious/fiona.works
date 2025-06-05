import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { leadershipData } from "../consts";

const Leadership = () => {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 1200,
        backgroundColor: "hsla(0, 100%, 0%, 0.7)",
        color: "white",
      }}
      className="mb-2"
    >
      <CardContent>
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
          {leadershipData.map((item, id) => (
            <div className="w-full" key={id}>
              <div className="text-md font-mono mt-2 text-pink leading-7">
                {item.role}
              </div>
              <Typography variant="subtitle2">{item.organization}</Typography>
              <Typography variant="subtitle2">{item.date}</Typography>
              <div className="text-sm sm:text-md text-white mt-2">
                {item.description}
              </div>
              {id != leadershipData.length - 1 ? <hr className="mt-3" /> : null}
            </div>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Leadership;
