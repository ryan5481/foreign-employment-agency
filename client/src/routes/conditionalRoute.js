import { Routes, Route } from 'react-router-dom'
import AdminSignUp from '../containers/admin/auth/signUp'
import AdminLogin from "../containers/admin/auth/login"
import Home from '../containers/user/home'
import About from '../containers/user/aboutNepal'
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
import { useSelector } from 'react-redux'
const ConditionalRoute = () => {
  // if (userRole === 'admin') {
  //   return <AdminRoutes />
  // } else{
    return <UserRoutes/>
  // }
}

const UserRoutes = () => {
  return (
    <Routes>
      // TEMPORARY ADMIN ROUTES
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/adminsignup" element={<AdminSignUp />} />

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
       <Route path="/admin" element={<AdminLogin />} />
     {/*<Route path="/home" element={<EditHomepage />} />
      <Route path="/postjob" element={<PostJob />} />
      <Route path="/resumes" element={<GetResumes />} />
      <Route path="/post-gallery" element={<PostGallery />} />
      <Route path="/messages" element={<Messages />} />  */}
    </Routes>
  )
}

export default ConditionalRoute
