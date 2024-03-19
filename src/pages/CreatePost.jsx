import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Typography, styled, Box, TextField, Button } from '@mui/material';
import Dropdown from "../components/Dropdown";
import { useNavigate } from "react-router-dom";
import { routePath } from "../routes/route";
import axios from "axios";

const Component = styled(Box)({
    
    background: '#F5F5F5',
    padding: '30px 20px', // Adjusted padding for smaller screens
    '@media (min-width: 1024px)': {
        padding: '30px 200px', // Original padding for larger screens
    },
})

const Container = styled(Box)({
    display: 'flex',
    flexDirection: 'column', // Stack items vertically on smaller screens
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px', // Adjusted padding for smaller screens
    background: '#FFFFFF',
    borderRadius: 20,
    '& > p': {
        fontSize: 25, // Adjusted font size for smaller screens
        fontWeight: 700
    },
    '& > img': {
        width: '100%', // Make image responsive
        maxWidth: '300px', // Limit maximum width on larger screens
        margin: '20px 0', // Add some margin for spacing
    },
    '@media (min-width: 1024px)': {
        flexDirection: 'row', // Display items side by side on larger screens
        padding: '0 70px', // Original padding for larger screens
        '& > p': {
            fontSize: 35, // Original font size for larger screens
        },
    },
})

const FormWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    padding: '20px', // Adjusted padding for smaller screens
    background: '#FFFFFF',
    borderRadius: 20,
    '& > *': {
        marginTop: '20px !important'
    }
})

const CreatePost = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const formatDate = (date) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Intl.DateTimeFormat('en-GB', options).format(date);
    };
    const defaultObj = {
        profile: '',
        type: '',
        description: '',
        experience: '',
        technology: "",
        salary: '',
        companyname:"",
        address:"",
        date: formatDate(currentDate)
    }

    const [data, setData] = useState(defaultObj);

    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";

    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const saveJob = async (e) => {
        e.preventDefault();
        try {
            const API_URL = 'http://localhost:8090/api/v1';
            const responce = await axios.post(`${API_URL}/jobposts`, data)
            console.log(responce)
            navigate("/");
        }
        catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <Component>
                <Container>
                    <Typography sx={{padding:2}} >Create a job post</Typography>
                    
                </Container>
                <form onSubmit={saveJob}>
                <FormWrapper >
                    <TextField
                        placeholder="Job title"
                        onChange={handleChange}
                        name="profile"
                        required
                    />
                    <TextField
                        placeholder="Company name"
                        onChange={handleChange}
                        name="companyname"
                        required
                    />
                    <TextField
                        placeholder="Address"
                        onChange={  handleChange}
                        name="address"
                        required
                    />
                    <Dropdown
                        id='job-type-label'
                        value={data.type}
                        handleChange={handleChange}
                        name="type"
                        label="Job Type"
                        options={['Online', 'Offline']}
                    />
                    <TextField
                        placeholder="Job description"
                        onChange={handleChange}
                        name="description"
                    />
                    <Dropdown
                        id='experience-label'
                        value={data.experience}
                        handleChange={handleChange}
                        name="experience"
                        label="Experience"
                        options={['0-2 Years', '3-5 Years', '5 Years or more']}
                    />
                    <TextField
                        label="Technology"
                        placeholder="technology"
                        onChange={handleChange}
                        name="technology"
                    />
                    <Dropdown
                        id='salary-label'
                        value={data.salary}
                        handleChange={handleChange}
                        name="salary"
                        label="Salary"
                        options={['Rs 0-300000', 'Rs 300000-500000', 'Rs 500000-800000', 'Rs 800000-1000000', 'Rs 1000000-1500000', 'Rs 1500000-2000000', 'Rs 2000000 or more']}
                    />
                    <Button variant="contained" type="submit">Save Job</Button>
                </FormWrapper>
                </form>
            </Component>
        </>
    )
}

export default CreatePost;
// <img src={image} alt="create" />