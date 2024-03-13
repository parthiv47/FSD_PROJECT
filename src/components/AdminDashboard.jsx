import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import JobSeekerInfo from './JobSeekerInfo';
import CreatePost from '../pages/CreatePost';
import Postedjob from './PostedJob';

export default function AdminDashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Employer Requests" />
        <Tab label="Posted job" />  
        <Tab label="Creat Jobpost" /> 
      </Tabs>
      {value === 0 && <JobSeekerInfo />}
      {value === 1 && <Postedjob />}
      {value === 2 && <CreatePost />}
    </Box>
  );
}
