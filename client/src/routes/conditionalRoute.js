import { Routes, Route } from 'react-router-dom'
import AdminLogin from "../containers/admin/auth/login"
import Home from '../containers/user/home'
import About from '../containers/user/about'
import Jobs from '../containers/user/jobs'
import Docs from '../containers/user/docs'
import Apply from '../containers/user/apply'
import Gallery from '../containers/user/gallery'
import Contact from '../containers/user/contact'
import Resume from '../containers/user/resume'
import { useSelector } from 'react-redux'
import PhotoUploader from '../components/uploader/photoUpload'

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
      <Route path="/post-resume" element={<Resume />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/upload" element={<PhotoUploader />} />
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
