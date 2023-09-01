import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AdminLogin from "../containers/admin/auth/login"
import Home from '../containers/user/home'
import AdminPanel from '../containers/admin/03-editHomePage'
import Jobs from '../containers/user/jobs'
import License from '../containers/user/license'
import Apply from '../containers/user/apply'
import Gallery from '../containers/user/gallery'
import Contact from '../containers/user/contact'
import Resume from '../containers/user/resume'
import AboutNepal from '../containers/user/aboutNepal'
import Newspaper from '../containers/user/newspaper'
import WhyUs from '../containers/user/whyChooseUs'
import AboutUs from '../containers/user/aboutUs'
import Brochure from '../containers/user/brochure'

import Profile from '../containers/admin/auth/profile'
import ChangePassword from '../containers/admin/auth/changePassword'
import EditHeader from '../containers/admin/01-editHeader'
import EditNavbar from '../containers/admin/02-editNavBar'
import EditHomePage from '../containers/admin/03-editHomePage'
import EditJobsPage from '../containers/admin/04-editJobsPage'
import EditResumePage from '../containers/admin/05-editResumePage'
import EditCertificatePage from '../containers/admin/06-editCertificatePage'
import EditAboutUsPage from '../containers/admin/07-editAboutUsPage'
import EditGalleryPage from '../containers/admin/08-editGalleryPage'
import EditContactUsPage from '../containers/admin/09-editContactUsPage.js'
import EditFooter from '../containers/admin/10-editFooter'


import NavBar from '../components/navigation/navBar'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import AdminNavBar from '../components/navigation/adminNavBar'

import { useColorModeValue } from '@chakra-ui/react'

import '../App.css';


const ConditionalRoute = () => {
  const { userRole } = useSelector(state => state.user)
  if (userRole === 'admin') {
    return <AdminRoutes />
  } else {
    return <UserRoutes />
  }
}

const UserRoutes = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
      // TEMPORARY ADMIN ROUTES
        <Route path="/adminlogin" element={<AdminLogin />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about-nepal" element={<AboutNepal />} />
        <Route path="/choose-us" element={<WhyUs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newspaper" element={<Newspaper />} />
        <Route path="/license" element={<License />} />
        <Route path="/brochure" element={<Brochure />} />
      </Routes>
      <Footer />
    </>
  )
}

const AdminRoutes = () => {
  return (
    <>
      <AdminNavBar />
      <Routes bg={useColorModeValue('purple.100', 'purple.800')}>
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/password" element={<ChangePassword />} />
        <Route path="/edit-header" element={<EditHeader />} />
        <Route path="/edit-navbar" element={<EditNavbar />} />
        <Route path="/edit-homepage" element={<EditHomePage />} />
        <Route path="/edit-jobspage" element={<EditJobsPage />} />
        <Route path="/edit-footer" element={<EditFooter />} />
        <Route path="/edit-resumepage" element={<EditResumePage />} />
        <Route path="/edit-certificatepage" element={<EditCertificatePage />} />
        <Route path="/edit-aboutuspage" element={<EditAboutUsPage />} />
        <Route path="/edit-gallerypage" element={<EditGalleryPage />} />
        <Route path="/edit-contactuspage" element={<EditContactUsPage />} />
        <Route path="/edit-footer" element={<EditFooter />} />
      </Routes>
    </>
  )
}

export default ConditionalRoute
