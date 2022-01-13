
import './App.css';
import React, {useState, useEffect} from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './Components/Navigation/Navbar'
import RegisterPage from './Components/RegisterPage/RegisterPage'
import ProfilePage from './Components/ProfilePage/ProfilePage'
import LoginPage from './Components/LoginPage/LoginPage'

import SubmitForm from './Components/SubmitForm/SubmitForm';
import CallTable from './Components/CallTable/CallTable';
import LandingPage from './Components/LandingPage/LandingPage'
// import Sidebar from './Components/Sidebar/Sidebar';
// import {Container, Row, Col} from 'react-bootstrap';
// import Table from './Components/Table/Table'

function App() {
  const getUser = () => {
    console.log("get user");
    const userString = sessionStorage.getItem('user');
    console.log(userString);
    const userParsed = JSON.parse(userString);
    console.log(userParsed);
    // if(userParsed != null){
    //   setUser(userParsed);
    // }
    
    return userParsed;
  };

  const [user, setUser] = useState(getUser());
  const [loggedin, setLoggedin]  = useState(false);
  const [thisRoute, setThisRoute] = useState('login');
  
  const [transactionId, setTransactionId] = useState('');

  function handleLogIn(user) {
    console.log(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  };

  const clearUser = () => {
    sessionStorage.removeItem('user');
    setUser(null);
  };

  return (
    <Router>
      <Navbar loggedin={loggedin} clearUser={clearUser}/>
      <Switch>
        <Route exact path = "/">
          { user === null
            ? <CallTable user = {user} />
            : <LoginPage handleLogIn = {handleLogIn} />
          }
        </Route>
        <Route path = "/profile">
          <ProfilePage user = {user} loggedin = {loggedin}/>
        </Route>
        <Route path = "/add">
          <SubmitForm user = {user} />
        </Route>
        <Route path = "/login">
          <LoginPage handleLogIn = {handleLogIn} />
        </Route>
        <Route path = "/register">
          <RegisterPage handleLogIn = {handleLogIn} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
