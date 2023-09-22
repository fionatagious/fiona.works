import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function Skills() {
  return (
    <Card sx={{ overflow: 'auto', opacity: 0.8 }}>
      <CardContent sx={{ pb: 0 }}>
        <Typography variant="h6">Skills</Typography>
        <List>
          <p>Languages</p>
          {['HTML5', 'CSS3', 'Javascript', 'SQL', 'TypeScript', 'Ruby', 'Python', 'SAS', 'R'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemText primary={text} />
          </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <p>Full-stack Frameworks</p>
          {['Ruby on Rails', 'Next.js, React.js, Material UI'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemText primary={text} />
          </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <p>Testing</p>
          {['Jest', 'Rspec', 'Capybara'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemText primary={text} />
          </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <p>Soft Skills</p>
          {['Attention to detail', 'Communication', 'Curiosity', 'Dedication', 'Empathy', 'Organization'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemText primary={text} />
          </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}