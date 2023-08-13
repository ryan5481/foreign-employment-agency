import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AdminLogin from "../containers/admin/auth/login"
import Home from '../containers/user/home'
import AdminPanel from '../containers/admin/03-editHomePage'
import Jobs from '../containers/user/jobs'
import JobDescription from '../containers/user/jobDescription'
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

import EditHeader from '../containers/admin/01-editHeader'
import Profile from '../containers/admin/auth/profile'
import ChangePassword from '../containers/admin/auth/changePassword'

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
        <Route path="/job-description" element={<JobDescription />} />
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
      </Routes>
    </>
  )
}

export default ConditionalRoute
