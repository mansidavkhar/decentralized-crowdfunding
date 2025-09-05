import './tailwind.css'
import Navbar from './components/navbar/MainNavbar'
import LoginRegister from './pages/LoginRegister'
import MainLandingPage from './pages/MainLandingPage'
import Footer from './components/Footer'
import ContactUs from './pages/ContactUs'
import HowDoWeWork from './pages/HowDoWeWork'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import StartAProject from './pages/StartAProject'
import NewProjectDetails from './pages/NewProjectDetails'
import ProjectOwnerNavbar from './components/navbar/ProjectOwnerNavbar'
import MyProjects from './components/MyProject'
//import Profile from './pages/Profile'
//import Network from './pages/Network'
import BrowseProjects from './pages/BrowseProjects'
import BrowseProjectsStatic from './pages/BrowseProjectsStatic'
import BackerNavbar from './components/navbar/BackerNavbar'
import MyInvestments from './pages/MyInvestments'
import ProjectDescription from './pages/ProjectDescription'
//import SelectAmount from './pages/SelectAmount'
//import ConfirmAmount from './pages/ConfirmAmount'
//import PaymentFailed from './pages/PaymentFailed'
//import MessageBar from './pages/MessageBar'


const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar /><MainLandingPage /><Footer/></>
  },
  {
    path: '/login',
    element: <><Navbar /><LoginRegister /><Footer/></>
  },
  {
    path: '/howdowework',
    element: <><Navbar /><HowDoWeWork/><Footer/></>
  },
  {
    path: '/contactus',
    element: <><Navbar /><ContactUs /><Footer/></>
  },



  {/*backer pages*/},
  {
    path: '/backer/home',
    element: <><BackerNavbar /><MainLandingPage /><Footer /></>
  },
  {
    path: '/backer/browseprojects',
    element: <><BackerNavbar /><BrowseProjects /><Footer /></>
  },
  {
    path: '/backer/myinvestments',
    element: <><BackerNavbar /><MyInvestments /><Footer /></>
  },
  {
    path: '/backer/browseprojectsstatic',
    element: <><BackerNavbar /><BrowseProjectsStatic /><Footer /></>
  },
  // {
  //   path: '/backer/profile',
  //   element: <><BackerNavbar /><Profile /><Footer /></>
  // },
  // {
  //   path: '/backer/network',
  //   element: <><BackerNavbar /><Network /><Footer /></>
  // },
  // {
  //   path: '/network/chats',
  //   element: <><BackerNavbar /><MessageBar /><Footer /></>
  // },
  {
    path: '/backer/projectdescription',
    element: <><BackerNavbar /><ProjectDescription /><Footer /></>
  },
  // {
  //   path: '/backer/selectamount',
  //   element: <><BackerNavbar /><SelectAmount /><Footer /></>
  // },
  // {
  //   path: '/backer/confirmamount',
  //   element: <><BackerNavbar /><ConfirmAmount /><Footer /></>
  // },

  {/*ProjectOwner pages*/},
  {
    path: '/projectowner/home',
    element: <><ProjectOwnerNavbar /><MainLandingPage /><Footer /></>
  },
  {
    path: '/projectowner/startaproject',
    element: <><ProjectOwnerNavbar /><StartAProject /><Footer /></>
  },
  {
    path: '/projectowner/newprojectdetails',
    element: <><ProjectOwnerNavbar /><NewProjectDetails /><Footer /></>
  },
  {
    path: '/projectowner/myprojects',
    element: <><ProjectOwnerNavbar /><MyProjects /><Footer /></>
  },
  // {
  //   path: '/projectowner/profile',
  //   element: <><ProjectOwnerNavbar /><Profile /><Footer /></>
  // },
  // {
  //   path: '/projectowner/network',
  //   element: <><ProjectOwnerNavbar /><Network /><Footer /></>
  // },
])



function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;