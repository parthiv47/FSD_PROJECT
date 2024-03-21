import { Box, Typography, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../routes/route';
import image from "../components/techjobs-logo-zip-file/business-leader-consulting-hr-expert/21207.jpg";
import { useSelector } from 'react-redux';

const Component = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
 
    '& > p': {
        fontSize: 30,
        lineHeight: 1.25,
        letterSpacing: -1,
        marginBottom: 20,
    },
    '& > button': {
        width: 190,
        height: 50,
        background: 'rgb(37, 87, 167)',
        textTransform: 'none',
        fontSize: 16,
        fontWeight: 700,
        marginTop: 20,
    }
});

const Home = () => {
    const navigate = useNavigate();
    const {user,userRole}=useSelector((state)=>state.user)

    return (
        <div className='bg-stone-100'>
            <Box
                display="flex"
                flexDirection={{ xs: 'column', md: 'row' }} // Flex direction changes based on screen size
                alignItems="center"
                height="80%"
                margin="0  auto"
                justifyContent="space-between" 
                padding="15px"
                // Center the component horizontally
                maxWidth={{ md: 1100 }} // Adjusted maxWidth for medium screens
             // Adjusted padding for small and medium screens
            >
                <Box
                    flex="1"
                  
                    maxWidth={{ xs: '100%', md: 600 }} // Adjusted maxWidth for smaller screens
                    mb={{ xs: 4, md: 0 }} // Adjusted margin bottom for small screens
                >
                    <img src={image} alt="homeimage" style={{ width: '100%' }} />
                </Box>
                <Component>
                    <Typography>Experience the Ultimate Platform  <br/>for Employers  to Post Jobs and <br/> Job Seekers to Find Their Perfect Fit!</Typography>
                   {userRole === "Jobseeker" &&   <Button
                   variant="contained"
                   onClick={() => navigate("/findjob")}
               >Find job</Button>}
                 {userRole === "Employer" &&   <Button
                  variant="contained"
                 onClick={() => navigate()}
                  >Post job</Button>}
                  {!user &&   <Button
                  variant="contained"
                  onClick={() => navigate("/login")}
              >Start Exploring</Button>}
                  
                </Component>
            </Box>
        </div>
    );
};

export default Home;
