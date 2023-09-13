import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ConditionalRoute from "./routes/conditionalRoute"
import AdminLogin from './containers/admin/auth/login';

function App() {

  return (
    <div className="App" style={{width:"100%"}} >
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
