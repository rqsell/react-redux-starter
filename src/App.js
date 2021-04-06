import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Cart from "./components/Cart"

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
     {/* <Home/> */}
    </div>
<Switch>
<Route exact path="/" render={(props) => <Home {...props} />} />
<Route
          exact
          path="/cart"
          render={(props) => <Cart {...props}  />}
        />
</Switch>
    </BrowserRouter>
  );
}

export default App;
