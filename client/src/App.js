import './App.css';
import { useSelector } from "react-redux";
import ConditionalRoute from "./routes/conditionalRoute"
import NavBar from './components/header/navBar';
import Header from './components/header/header';
import Footer from './components/footer/footer';

// import NavBar from './components/header/navBar';


function App() {
  const { userRole } = useSelector(state => state.user)

  return (<>
    <div className="App">
      <Header/>
      <NavBar/>
      <ConditionalRoute/>
      {/* <NotificationBar/> */}
      <Footer/>
    </div>
  </>
  );
}

export default App