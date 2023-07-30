import './App.css';
import { useSelector } from "react-redux";
import ConditionalRoute from "./routes/conditionalRoute"
// import NavBar from './components/header/navBar';


function App() {
  const { userRole } = useSelector(state => state.user)

  return (<>
     
    <div className="App">
      <ConditionalRoute/>
      {/* <NotificationBar/> */}
    </div>
  </>
  );
}

export default App