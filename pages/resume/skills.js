import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function Skills() {
  return (
    <Card sx={{ maxHeight: '95vh', overflow: 'auto' }}>
      <CardContent>
        <List>
          <h4>Languages</h4>
          {['HTML5', 'CSS3', 'Javascript', 'SQL', 'TypeScript', 'Ruby', 'Python', 'SAS', 'R'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemText primary={text} />
          </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <h4>Frameworks</h4>
          {['Ruby on Rails', 'Next.js, React.js, Material UI'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemText primary={text} />
          </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <h4>Testing</h4>
          {['Jest', 'Rspec', 'Capybara'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemText primary={text} />
          </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <h4>Soft Skills</h4>
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