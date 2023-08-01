import { Routes, Route } from 'react-router-dom'
import AdminLogin from "../containers/admin/auth/login"
import Home from '../containers/user/home'
import About from '../containers/user/nepal'
import Jobs from '../containers/user/jobs'
import License from '../containers/user/License'
import Apply from '../containers/user/apply'
import Gallery from '../containers/user/gallery'
import Contact from '../containers/user/contact'
import Resume from '../containers/user/resume'
import Nepal from '../containers/user/nepal'
import Newspaper from '../containers/user/newspaper'
import WhyUs from '../containers/user/whyChooseUs'
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
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/nepal" element={<Nepal />} />
      <Route path="/choose-us" element={<WhyUs />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/newspaper" element={<Newspaper />} />
      <Route path="/license" element={<License />} />
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
