import { useState, useEffect } from 'react';
import { Box, InputBase, Button, styled, Card, CardContent, Typography } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import Header from '../../src/components/Header';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
// import { getAllPosts } from '../../../server/target/api';

const SearchContainer = styled(Box)({
    marginTop:10,
    display: 'flex',
    justifyContent: 'center',
   
    '& > div': {
        width: 500,
        height: 45,
        border: '1px solid #767676',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        marginRight: 20
    },
    '& > div > div': {
        width: '85%',
        margin: '0 20px'
    }
})

const FindButton = styled(Button)({
    background: '#2557a7',
    textTransform: 'none',
    height: 45,
    borderRadius: 10,
    width: 100
})

const PostWrapper = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 50,
    '& > div': {
      border: '1px solid #d4d2d0',
      borderRadius: 10,
      margin: 10,
      width: '30%',
      height: 300,
    },
    '@media (max-width: 1200px)': {
      '& > div': {
        width: '45%', // Adjust the width for screens up to 1200px wide
      },
    },
    '@media (max-width: 768px)': {
      '& > div': {
        width: '100%', // Adjust the width for screens up to 768px wide
      },
    },
  });

const AllPosts = () => {

    const [posts, setPosts] = useState([]);
    const [text, setText] = useState("");
    
        const getData = async () => {
            try{
            const API_URL = 'http://localhost:8090/api';
            const respon = await axios.get(`${API_URL}/jobposts`);
            console.log(respon.data);
            setPosts(respon.data);
            }
         catch(err)
         {
            console.log(err.response) 
         }
        }
    
    useEffect(() => {
        
        getData();
    }, [])

    return (
        <>
        <div className='bg-stone-100 h-screen '>
            
            
            <SearchContainer>
                <Box>
                    <InputBase 
                        placeholder='Job title'
                        onChange={(e) => setText(e.target.value)}
                    />
                    <SearchIcon />
                </Box>
                <FindButton
                    variant="contained"
                >Find Jobs</FindButton>
            </SearchContainer>
        
            <PostWrapper>
                {
                    posts.filter(post => post.profile.toLowerCase().includes(text.toLowerCase()) ||
                    post.companyname.toLowerCase().includes(text.toLowerCase()) ||
                    post.address.toLowerCase().includes(text.toLowerCase())).map(post => (
                        <Card style={{ height: 'auto' }}>
                            <CardContent>
                                <Typography variant="h5" style={{ fontWeight:500}}>{post.profile}</Typography>
                                <Typography>{post.companyname} </Typography>
                                <Typography style={{marginBottom:"5px"}}>{post.address}</Typography>
                              
                                <Typography><b>Salary</b>: {post.salary}</Typography>
                                <Typography><b>{post.type === "Offline" ? "Remote" : "Office"}</b></Typography>
                                <Typography><b>Experience</b>: {post.experience}</Typography>
                                <Typography><b>Technology</b>: {post.technology}</Typography>
                                <Typography 
                                    style={{ color: '#6f6f6f', margin: '7px 0px ' }}
                                >
                                 <ArrowRightOutlinedIcon />{post.description.length > 150 ? post.description.substring(0, 150) + "..." : post.description}
                                </Typography>
                                <Button variant="outlined"  startIcon={<SendIcon/>}>
                                Apply here
                                </Button>
                                
                                <Typography style={{ color: '#6f6f6f', marginTop: '15px' }}>
                                    posted on {post.date}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                }
            </PostWrapper>
            </div>
        </>
    )
}

export default AllPosts;