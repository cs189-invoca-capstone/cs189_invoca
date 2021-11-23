// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import './App.scss';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Navigation from './Components/Navigation/Navigation';
// import Navbar from './Components/Navigation/Navbar'
import RegisterPage from './Components/RegisterPage/RegisterPage'
import ProfilePage from './Components/ProfilePage/ProfilePage'
import LoginPage from './Components/LoginPage/LoginPage'
import LandingPage from './Components/LandingPage/LandingPage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Sidebar from './Components/Sidebar/Sidebar';
// import {Container, Row, Col} from 'react-bootstrap';
// import Table from './Components/Table/Table'
import axios from 'axios'

function App() {
  const [loggedin, setLoggedin]  = useState(false);
  function handleLogIn(user) {
    setLoggedin(user);
  };

  useEffect(() => { 
    console.log(loggedin)

  }, [loggedin])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {loggedin === false && <LoginPage handleLogIn = {handleLogIn} />}
          {loggedin === true && <ProfilePage loggedin={loggedin} onChange={handleLogIn}/>}
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
