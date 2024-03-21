import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import JobSeekerInfo from './JobSeekerInfo';
import CreatePost from '../pages/CreatePost';
import Postedjob from './PostedJob';
import { useParams } from 'react-router-dom'; // Import useParams from React Router

export default function AdminDashboard() {
  const { tab } = useParams(); // Get the tab parameter from the URL
  const [value, setValue] =React.useState(0);

  React.useEffect(() => {
    // Update the tab value based on the URL parameter
    if (tab === 'postedjob') {
      setValue(1);
    } else if (tab === 'createpost') {
      setValue(2);
    } else {
      setValue(0); // Default to the first tab if no parameter is provided
    }
  }, [tab]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
      
        <Tab label="Posted job" to="/postedjob" />  
        <Tab label="Create Job Post" to="/createpost" /> 
      </Tabs>
      
      {value === 0 && <Postedjob />}
      {value === 1 && <CreatePost />}
    </Box>
  );
}
// {value === 0 && <JobSeekerInfo />}     
  // <Tab label="Employer Requests" to="/" />
