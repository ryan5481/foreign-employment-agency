import './App.css';
import { useSelector } from "react-redux";
import ConditionalRoute from "./routes/conditionalRoute"
import NavBar from './components/header/navBar';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import AdminLogin from './containers/admin/auth/login';
import { Route, Routes } from 'react-router-dom';

function App() {
  const { userRole } = useSelector(state => state.user)

  return (
    <div className="App" data-theme={userRole === 'admin' ? 'purple' : ''}>
      <Routes>
        <Route path="/adminlogin/*" element={<AdminLogin />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </div>
  );
}

// Create a Layout component to wrap the common components (Header, NavBar, ConditionalRoute, Footer)
function Layout() {
  return (
    <>
      <Header />
      <NavBar />
      <ConditionalRoute />
      <Footer />
    </>
  );
}

export default App;
