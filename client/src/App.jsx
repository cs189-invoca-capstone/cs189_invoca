
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
import EditForm from "./Components/EditForm/EditForm";
import CallTable from './Components/CallTable/CallTable';
import LandingPage from './Components/LandingPage/LandingPage';



function App() {
  const [user, setUser] = useState(null);
  const handleLogIn = (user) => {
    console.log(user);
    sessionStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };
  const clearUser = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('lastId');
    sessionStorage.removeItem('callLog');
    sessionStorage.removeItem('transactions');
    setUser(null);
  };
  const getUser = () => {
    const userString = sessionStorage.getItem('user');
    const userParsed = JSON.parse(userString);
    if(userParsed != null){
      setUser(userParsed);
    }
  };


  const [currCallLog, setCurrCallLog] = useState(null);
  const handleCallLog = (callLog) => {
    console.log(callLog);
    sessionStorage.setItem('callLog', JSON.stringify(callLog));
    setCurrCallLog(callLog);
  };

  const clearCallLog = () => {
    sessionStorage.removeItem('callLog');
    setCurrCallLog(null);
  };

  const getCallLog = () => {
    const callLogString = sessionStorage.getItem('callLog');
    console.log(callLogString);
    const callLogParsed = JSON.parse(callLogString);
    console.log(callLogParsed);
    if(callLogParsed != null){
      console.log("not null");
      setCurrCallLog(callLogParsed);
    }
  };


  useEffect(() => {
    console.log("use effect");
    getUser();
    getCallLog();
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
              <Route exact path = "/editProfile">
                <EditProfilePage user = {user} handleLogIn = {handleLogIn} clearUser = {clearUser}/>
              </Route>
              <Route path = "/add">
                <SubmitForm user = {user} />
              </Route>
              <Route path = "/callLogs">
                <CallTable user = {user} handleCallLog={handleCallLog} clearCallLog={clearCallLog} />
              </Route>
              {currCallLog != null 
                &&
                <Route exact path = "/editCall">
                  <EditForm user = {user} currCallLog = {currCallLog}/>
                </Route>
              }
            </>
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
