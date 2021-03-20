import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import VechicleDetails from './components/VechicleDetails/VechicleDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route path="/vehicle/:vehicleType">
            <VechicleDetails></VechicleDetails>
        </Route>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route exact path="*">
            <h1>Not Found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
