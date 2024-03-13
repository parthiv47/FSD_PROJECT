
// // import { AppBar, Toolbar, styled } from "@mui/material";
// // import { routePath } from "../routes/route";
// // import { Link } from "react-router-dom";


// // const StyledAppBar = styled(AppBar)({
// //     background: '/2d2d2d',
// //     height: 64,
// //     '& > div > *': {
// //         marginRight: 20,
// //         fontSize: 18,
// //         color: 'inherit',
// //         textDecoration: 'none'
// //     }
// // })

// // const Header = () => {
// //     const logoStyle = {
// //         // Background color
// //         padding: '10px',             // Padding around the logo
// //         borderRadius: '5px',         // Rounded corners
// //         display: 'inline-block'      // Display inline to fit the text
// //       };
    
// //       const textStyle = {
// //         color: '/ffffff',             // Text color
// //         fontSize: '24px',             // Font size
// //         fontWeight: 'bold',           // Font weight
// //         letterSpacing: '2px'          // Letter spacing for style
// //       };
// //    // const logo = "https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png";

// //     return (
// //         <StyledAppBar>
// //             <Toolbar>
// //                 <Link to={routePath.home}>
// //                 <div style={logoStyle}>
// //                 <span style={textStyle}>JobFinder</span>
// //               </div>
// //                 </Link>
// //                 <Link to={routePath.create}>Post a job</Link>
// //                 <Link to={routePath.posts}>Find jobs</Link>
// //                 <Link to={routePath.login}>Login</Link>
// //                 <Link to={routePath.signup}>SignUp</Link>
// //             </Toolbar>
// //         </StyledAppBar>
// //     )
// // }

// // export default Header;

// import * as React from 'react';
// import AppBar from '@mui/material/LinkppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Linkvatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Linkdb';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function Header() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const [isClicked, setIsClicked] = React.useState(false);
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//     setIsClicked(true);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <LinkppBar position="sticky">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
          
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             to="/Linkpp-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             hello
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
              
//                 <MenuItem  onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">Product</Typography>
//                 </MenuItem>
//                 <MenuItem  onClick={handleCloseNavMenu}>
//                 <Typography textAlign="center">Product</Typography>
//               </MenuItem>
//             </Menu>
//           </Box>
//           <LinkdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             to="/Linkpp-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
              
//              <Typography onClick={handleOpenUserMenu} sx={{ p: 0 ,   transition: 'background-color 0.3s',
//              '&:hover': {
//                backgroundColor: isClicked ? 'lightgray' : 'inherit',
//              }, }}>
//                 Login
//              </Typography>
              
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
             
//                 <MenuItem  onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">hello </Typography>
//                 </MenuItem>
           
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </LinkppBar>
//   );
// }
// export default Header;
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkIcon from '@mui/icons-material/Work';
import { Link } from 'react-router-dom'
import NavbarDrop from './NavbarDrop'
import { Bars3Icon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/20/solid';
import HouseSharpIcon from '@mui/icons-material/HouseSharp';

import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import DashboardCustomize from '@mui/icons-material/DashboardCustomize';



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header   className=" bg-white shadow-sm " style={{ position:"sticky" ,top:0 ,right:0,left:0, zIndex: 1000}}>
      <nav className=" mx-auto flex max-w-7xl items-center justify-between p-4 md:px-8 " aria-label="Global" >
        <div className="flex md:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </Link>
        </div>
        <div className="flex md:hidden">
       
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
             {mobileMenuOpen ?(<XMarkIcon className="h-9 w-9" aria-hidden="true" />): (<Bars3Icon className="h-8 w-9" aria-hidden="true" />)}
          </button>
        </div>
        <Popover.Group className="hidden md:flex md:justify-start md:gap-x-12">
         

          <Link to="/" className="text-center font-medium leading-6 text-gray-900">
            
          <HouseSharpIcon  fontSize="medium"/>
          <div className="text-xs">Home</div>
          </Link>
          
          <Link to="/findjob" className="text-base font-medium leading-6 text-gray-900">
          <WorkIcon fontSize="medium"/>
          <div className="text-xs">Jobs</div>
          </Link>
          
            
         
          
          <Link to="/employeedashboard" className="text-center font-medium leading-6 text-gray-900">
          <DashboardCustomize fontSize="medium"/>
          <div className="text-xs">Dashboard</div>
          </Link>
          <NavbarDrop/>
        </Popover.Group>
       
      </nav>
      <Dialog as="div" className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 base:max-w-base base:ring-1 base:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
            <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
             
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-9 w-9" aria-hidden="true" />
          </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
               
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                >
                 Home
                </Link>
                <Link
                  to="/findjob"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                >
                Jobs
                </Link>
                <Link
                  to="/creatpost"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                >
                 Post-Jobs
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                >
                 SignUp
                </Link>
                <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
              >
                Login
              </Link>
              <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
            >
              Logout
            </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

// <Link to="/" className="text-base font-medium leading-6 text-gray-900">
// Log in <span aria-hidden="true">&rarr;</span>
// </Link>