
import './App.css';
import {useState, useEffect} from 'react';
import './App.scss';
import Dashboard from './Components/Dashboard/Dashboard';
// import Navigation from './Components/Navigation/Navigation';
import Navbar from './Components/Navigation/Navbar'
import RegisterPage from './Components/RegisterPage/RegisterPage'
import ProfilePage from './Components/ProfilePage/ProfilePage'
import LoginPage from './Components/LoginPage/LoginPage'
import LandingPage from './Components/LandingPage/LandingPage'
// import Sidebar from './Components/Sidebar/Sidebar';
// import {Container, Row, Col} from 'react-bootstrap';
// import Table from './Components/Table/Table'

function App() {
  const [user, setUser] = useState(null);
  const [loggedin, setLoggedin]  = useState(false);
  const [thisRoute, setThisRoute] = useState('login');
  
  function handleLogIn(user) {
    setLoggedin(true);
    setUser(user);
  };

  function handleRouteChange(route){
    if(route === 'logout'){
      setUser(null)
      setLoggedin(false)
      setThisRoute('login')
    }
    else{
      console.log(route);
      setThisRoute(route);
    }
  };

  return (
    <>
      <Navbar loggedin={loggedin} handleRouteChange = {handleRouteChange}/>
      { thisRoute === 'home'
        ? <>
            <Dashboard />
          </>
        :
        ( thisRoute === 'profile' 
          ?  <ProfilePage user = {user} loggedin = {loggedin}/>
          : ( thisRoute === 'login'
              ? <LoginPage handleLogIn = {handleLogIn} handleRouteChange = {handleRouteChange} />
              : <RegisterPage handleLogIn = {handleLogIn} handleRouteChange = {handleRouteChange} />
            )
        )}
    </>

  );
}

export default App;
