// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import './App.scss';
// import Dashboard from './Components/Dashboard/Dashboard';
//import Navigation from './Components/Navigation/Navigation';
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

  const [loggedin, setLoggedin]  = useState(false)

  // async function loginUser(gmail, password){
  //   setLoggedin(true);
  //   try{
  //       const res = await axios.post('/users/login', {
  //           email: gmail,
  //           password: password
  //       });
  //       // localStorage.setItem('user', res.data)
  //       console.log(res);
  //   }catch(err){
  //       console.log(err);
  //   }
  //   console.log(loggedin);
  // }

  function handleloggedin(boolean) {
    setLoggedin(boolean);
  }

  return (
    <Router>
      <Switch>
        <Route path="/login" 
        exact 
        strict 
        component={(props) => (
        <LoginPage {...props} loggedin = {loggedin} loginUser = {handleloggedin} />
        )}
        />
        <Route path="/register" exact strict component={() => <RegisterPage />}/>
        <Route path="/" exact strict component={() => <LandingPage/>}/>
        <Route path="/profile" 
        exact
        strict
        component={(props) => (
          <div>
            <ProfilePage {...props} loggedin={loggedin} />
          </div>
        )} 
        />
      </Switch>
    </Router>
  );
}

export default App;
