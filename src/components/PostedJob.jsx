import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Header from './Header';
import { Button } from '@mui/material';


import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import Updatejobpost from './Updatejobpost';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function UpdatePost() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color='success' onClick={handleClickOpen}>
        Update
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar style={{backgroundColor: "rgb(3 7 18)"}} sx={{ position: 'relative' }}>
          <Toolbar>
            
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Update Posted Job
            </Typography>
            
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
       <Updatejobpost/> 
      </Dialog>
    </React.Fragment>
  );
}







const rows = [
    {
        address
            :
            "modasa india",
    companyname
            :
            "infotech.pvt.ltd",
    date
            :
            "06/03/2024",
    description
            :
            "mongodb is one database that is used to store data a",
    experience
            :
            "0-2 Years",
   
    profile
            :
            "React devloper",
    salary
            :
            "Rs 300000-500000",
    technology
            :
            "java,react",
    type
            :
            "Online",
    },
    {
        address
            :
            "modasa india",
    companyname
            :
            "infotech.pvt.ltd",
    date
            :
            "06/03/2024",
    description
            :
            "mongodb is one database that is used to store data a",
    experience
            :
            "0-2 Years",
   
    profile
            :
            "React devloper",
    salary
            :
            "Rs 300000-500000",
    technology
            :
            "java,react",
    type
            :
            "Online",
    },
    { name: "hello", email: "parthiv@gmail.com", contactNumber: 7016676270, Jobpost: "devloper", resume: "link" }

];

export default function Postedjob() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>

            <Paper sx={{ width: '99%', overflow: 'hidden', marginTop: "10px" ,marginLeft:"10px",}}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >
                            <TableRow >

                                <TableCell

                                    align="left"
                                    style={{ minWidth: "3rem", backgroundColor: "rgb(3 7 18)", color: "white", fontSize: "1rem" }}
                                >
                                    Jobprofile
                                </TableCell>
                                <TableCell

                                    align="left"
                                    style={{ minWidth: "3rem", backgroundColor: "rgb(3 7 18)", color: "white", fontSize: "1rem" }}
                                >
                                    Compnayname
                                </TableCell>
                                <TableCell

                                    align="left"
                                    style={{ minWidth: "3rem", backgroundColor: "rgb(3 7 18)", color: "white", fontSize: "1rem" }}
                                >
                                    Address
                                </TableCell>
                                <TableCell

                                    align="left"
                                    style={{ minWidth: "3rem", backgroundColor: "rgb(3 7 18)", color: "white", fontSize: "1rem" }}
                                >
                                    Salary
                                </TableCell>
                                <TableCell

                                    align="left"
                                    style={{ minWidth: "3rem", backgroundColor: "rgb(3 7 18)", color: "white", fontSize: "1rem" }}
                                >
                                    Jobtype
                                </TableCell>
                                <TableCell

                                    align="left"
                                    style={{ minWidth: "3rem", backgroundColor: "rgb(3 7 18)", color: "white", fontSize: "1rem" }}
                                >
                                    Experience
                                </TableCell>
                                <TableCell

                                    align="left"
                                    style={{ minWidth: "3rem", backgroundColor: "rgb(3 7 18)", color: "white", fontSize: "1rem" }}
                                >
                                    Technology
                                </TableCell>
                                <TableCell

                                    align="left"
                                    style={{ minWidth: "3rem", backgroundColor: "rgb(3 7 18)", color: "white", fontSize: "1rem" }}
                                >
                                    Description
                                </TableCell>
                                <TableCell

                                    align="left"
                                    style={{ minWidth: "3rem", backgroundColor: "rgb(3 7 18)", color: "white", fontSize: "1rem" }}
                                >
                                    PostedOn
                                </TableCell>
                                <TableCell

                                    align="left"
                                    style={{ Width: "3rem", backgroundColor: "rgb(3 7 18)", color: "white", fontSize: "1rem" }}
                                >

                                </TableCell>
                                <TableCell

                                align="left"
                                style={{ minWidth: "3rem", backgroundColor: "rgb(3 7 18)", color: "white", fontSize: "1rem" }}
                            >

                            </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>

                                            <TableCell align="left">
                                                {row.profile}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.companyname}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.address}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.salary}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.type}
                                            </TableCell>
                                            <TableCell align="left">
                                               {row.experience}
                                            </TableCell>
                                            <TableCell align="left">
                                               {row.technology}
                                            </TableCell>
                                            <TableCell align="left">
                                            {row.description}
                                            </TableCell>

                                            <TableCell align="left">
                                            {row.date}
                                            </TableCell>
                                            <TableCell align="left"  >
                                             <UpdatePost/>
                                            
                                            </TableCell>
                                            <TableCell align="left"  >
                                            
                                            <Button variant="contained" onClick="hello" color="error">Delete</Button>
                                            </TableCell>



                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
}