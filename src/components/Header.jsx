
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkIcon from '@mui/icons-material/Work';
import { Link } from 'react-router-dom'
import NavbarDrop from './NavbarDrop'
import { Bars3Icon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/20/solid';
import HouseSharpIcon from '@mui/icons-material/HouseSharp';

import logo from "../components/techjobs-logo-zip-file/png/logo-no-background.png"

import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import DashboardCustomize from '@mui/icons-material/DashboardCustomize';
import { getUserDetail } from '../redux/user/userActions';
import { useDispatch } from 'react-redux';



export default function Header() {
  const dispatch=useDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header   className=" bg-white shadow-sm " style={{ position:"sticky" ,top:0 ,right:0,left:0, zIndex: 1000}}>
      <nav className=" mx-auto flex max-w-7xl items-center justify-between p-4 md:px-8 " aria-label="Global" >
        <div className="flex md:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 ">
            <span className="sr-only">Your Company</span>
            <img className="h-9 w-auto" src={logo} alt="" />
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
              onClick={() => {
                dispatch(getUserDetail())
                 setMobileMenuOpen(false)}}
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