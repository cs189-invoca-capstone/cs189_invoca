
import './App.css';
import React, {useState, useEffect} from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './Components/Navigation/Navbar';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import LoginPage from './Components/LoginPage/LoginPage';
import EditProfilePage from './Components/EditProfilePage/EditProfilePage';

import SubmitForm from './Components/SubmitForm/SubmitForm';
import CallTable from './Components/CallTable/CallTable';
import LandingPage from './Components/LandingPage/LandingPage';
// import Sidebar from './Components/Sidebar/Sidebar';
// import {Container, Row, Col} from 'react-bootstrap';
// import Table from './Components/Table/Table'


function App() {
  const [user, setUser] = useState(null);
  
  const [transactionId, setTransactionId] = useState('');

  const handleLogIn = (user) => {
    console.log(user);
    sessionStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  const clearUser = () => {
    sessionStorage.removeItem('user');
    setUser(null);
  };

  const getUser = () => {
    console.log("get user");
    const userString = sessionStorage.getItem('user');
    console.log(userString);
    const userParsed = JSON.parse(userString);
    console.log(userParsed);
    if(userParsed != null){
      setUser(userParsed);
    }
  };


  useEffect(() => {
    console.log("use effect");
    getUser();
  }, []);

  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
      </style>

      <Router>
        <Navbar user = {user} clearUser={clearUser} />
        <Switch>
          <Route exact path = "/">
            <LandingPage />
          </Route>
          <Route path = "/login">
            <LoginPage handleLogIn = {handleLogIn} />
          </Route>
          <Route path = "/register">
            <RegisterPage handleLogIn = {handleLogIn} />
          </Route>
          {user != null
            &&
            <>
              <Route path = "/profile">
                <ProfilePage user = {user} />
              </Route>
              <Route path = "/editProfile">
                <EditProfilePage user = {user} handleLogIn = {handleLogIn} clearUser = {clearUser}/>
              </Route>
              <Route path = "/add">
                <SubmitForm user = {user} />
              </Route>
              <Route path = "/callLogs">
                <CallTable user = {user} />
              </Route>
            </>
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
