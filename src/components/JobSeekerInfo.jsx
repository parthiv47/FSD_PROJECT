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



import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" color='success'  onClick={handleClickOpen}>
        contect
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Send Mail</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="from"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="to"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Subject"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            type="text"
            name="compose email"
            label="compose email"
            multiline
            rows={4}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}






const rows = [
 { name:"hello",email:"parthiv@gmail.com",contactNumber:7016676270,Jobpost:"devloper",resume:"link"},
 { name:"hello",email:"parthiv@gmail.com",contactNumber:7016676270,Jobpost:"devloper",resume:"link"}
 
];

export default function JobSeekerInfo() {
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
    
    <Paper sx={{ width: '100%', overflow: 'hidden', marginTop:"10px", marginLeft:"10px" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
             
                <TableCell
                  
                  align="left"  
                  style={{ minWidth: "3rem" ,backgroundColor: "rgb(3 7 18)",color:"white",fontSize:"1rem"}}
                >
                  Name
                </TableCell>
                <TableCell
                  
                  align="left"  
                  style={{ minWidth: "3rem" ,backgroundColor: "rgb(3 7 18)",color:"white",fontSize:"1rem"}}
                >
                  Email
                </TableCell>
                <TableCell
                  
                  align="left"  
                  style={{ minWidth: "3rem" ,backgroundColor: "rgb(3 7 18)",color:"white",fontSize:"1rem"}}
                >
                  Contact Number
                </TableCell>
                <TableCell
                  
                align="left"  
                style={{ minWidth: "3rem" ,backgroundColor: "rgb(3 7 18)",color:"white",fontSize:"1rem"}}
              >
                Job Post
              </TableCell>
              <TableCell
                  
                  align="left"  
                  style={{ minWidth: "3rem" ,backgroundColor: "rgb(3 7 18)",color:"white",fontSize:"1rem"}}
                >
                  Resume
                </TableCell>
                <TableCell
                  
                  align="left"  
                  style={{ Width: "30px" ,backgroundColor: "rgb(3 7 18)",color:"white",fontSize:"0.8rem"}}
                >
                  
                </TableCell>
                <TableCell
                  
                  align="left"  
                  style={{ Width: "30px" ,backgroundColor: "rgb(3 7 18)",color:"white",fontSize:"1rem"}}
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
                    
                        <TableCell  align="left">
                          {row.name}
                          </TableCell>
                          <TableCell  align="left">
                          {row.email}
                          </TableCell>
                          <TableCell  align="left">
                          {row.contactNumber}
                          </TableCell>
                          <TableCell  align="left">
                          {row.Jobpost}
                          </TableCell>
                          <TableCell  align="left">
                        <a href={row.resume}>Resume</a>
                          </TableCell>  
                          <TableCell  align="left">
                          <FormDialog />
                          </TableCell>
                          <TableCell  align="left">
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

// <Button variant="contained" color="success"><a href="mailto:parthivp039@gmail.com">Send Email</a>

// {columns.map((column) => (
//   <TableCell
//     key={column.id}
//     align={column.align}  
//     style={{ minWidth: column.minWidth ,backgroundColor: "rgb(3 7 18)",color:"white"}}
//   >
//     {column.label}
//   </TableCell>
// ))}

// <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
// {columns.map((column) => {
//   const value = row[column.id];
//   return (
//     <TableCell key={column.id} align={column.align}>
//       {column.format && typeof value === 'number'
//         ? column.format(value)
//         : value}
//       </TableCell>
//   );
// })}
// </TableRow>