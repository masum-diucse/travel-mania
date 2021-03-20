import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import VechicleDetails from './components/VechicleDetails/VechicleDetails';
import Login from './components/Login/Login';
import { createContext,useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext=createContext();
function App() {
  const [loggedInUser,setLoggedInUser]=useState({signedInUser:false,name:""});
  
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
      <Switch>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route path="/login">
            <Login></Login>
        </Route>
        <PrivateRoute path="/vehicle/:vehicleType">
            <VechicleDetails></VechicleDetails>
        </PrivateRoute>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route exact path="*">
            <h1>Not Found</h1>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
