import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function TMPCard() {
  return (
    <Card mt={5} sx={{ minWidth: 275, maxWidth: 1200, marginTop: '10px' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          Software Engineer
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          The Mom Project
        </Typography>
        <Typography variant="body2">
          <ul>
            <li>Built features to enhance user flows impacting acquisition and retention: log in, sign up, and job post creation (Rails).</li>
            <li>Served as a technical bridge between Product and Engineering for new features, synthesizing feature requests and
clarifying engineering effort and scope. Led technical planning and documented technical specifications.</li>
            <li>Worked in a monolithic codebase (Rails) to migrate to a brand new front-end architecture (Next.js, TypeScript), leveraging
integrations between our data structures, microservices, and APIs.</li>
            <li>Contributed to the creation and maintenance of a new design system and component UI library (Material UI, Storybook).</li>
            <li>Participated in feature prioritization, architecture discussions, and code reviews across four distinct repositories.</li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}