import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AdminLogin from "../containers/admin/auth/login"
import Home from '../containers/user/home'
import AdminPanel from '../containers/admin/home'
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
import Profile from '../containers/admin/profile'
import ChangePassword from '../containers/admin/auth/changePassword'
const ConditionalRoute = () => {
  const {userRole} = useSelector(state => state.user)
  if (userRole === 'admin') {
    return <AdminRoutes />
  } else{
    return <UserRoutes/>
  }
}

const UserRoutes = () => {
  return (
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
  )
}

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/adminpanel" element={<AdminPanel />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/password" element={<ChangePassword />} />
     
    </Routes>
  )
}

export default ConditionalRoute
