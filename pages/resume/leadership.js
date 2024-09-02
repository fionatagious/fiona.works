import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const leadershipData = [
  {
    role: "Member",
    organization: "Chicago Hack Night",
    date: "9/2023 – Present",
    description:
      "Work on public service projects with a community of civic-minded technologists. Build user-focused apps to enhance public services in Chicago.",
  },
  {
    role: "Web Developer",
    organization: "Radical Engineers",
    date: "9/2023 – Present",
    description:
      "Partner with social impact organizations to build software that helps them achieve their missions.",
  },
  {
    role: "Finance and Advancement Chair",
    organization: "New Leaders Council",
    date: "7/2021 – Present",
    description:
      "Lead the Fundraiser & Capstone components of the NLC Oakland fellowship. Collaborate with Board members on recruitment and selections of fellows. Develop curriculum content, plan events and fundraisers, and connect with local political leaders.",
  },
  {
    role: "Tapistry Founder & Co-Chair",
    organization: "The Mom Project",
    date: "1/2023 – 9/2023",
    description:
      "Founded the first AAPI employee resource group at The Mom Project. Recruited new members and organized company-wide events to build community and bring awareness to issues impacting the AAPI community.",
  },
  {
    role: "Community Organizer & Canvasser",
    organization: "Community Democracy Project",
    date: "6/2019 – 8/2022",
    description:
      "Gathered signatures for a grassroots campaign to amend the City of Oakland charter to enable participatory budgeting.",
  },
];

export default function Leadership() {
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
}
