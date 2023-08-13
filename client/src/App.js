import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";

import { useSelector } from "react-redux";
import ConditionalRoute from "./routes/conditionalRoute"
import AdminLogin from './containers/admin/auth/login';

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
      <ConditionalRoute />
    </>
  );
}

export default App;
