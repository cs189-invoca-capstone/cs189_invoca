// import logo from './logo.svg';
import './App.css';
import './App.scss';
// import Dashboard from './Components/Dashboard/Dashboard';
//import Navigation from './Components/Navigation/Navigation';
// import Navbar from './Components/Navigation/Navbar'
import RegisterPage from './Components/RegisterPage/RegisterPage'
import LoginPage from './Components/LoginPage/LoginPage'
import LandingPage from './Components/LandingPage/LandingPage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Sidebar from './Components/Sidebar/Sidebar';
// import {Container, Row, Col} from 'react-bootstrap';
// import Table from './Components/Table/Table'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact strict component={() => <LoginPage />}/>
        <Route path="/register" exact strict component={() => <RegisterPage />}/>
        <Route path="/" exact strict component={() => <LandingPage/>}/>
      </Switch>
    </Router>
  );
}

export default App;
