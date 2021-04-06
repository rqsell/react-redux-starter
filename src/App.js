import Navbar from "./components/Navbar"
import Home from "./components/Home"
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  useHistory,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <Home/>
    </div>

    </BrowserRouter>
  );
}

export default App;
