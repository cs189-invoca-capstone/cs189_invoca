
import './App.css';
import {useState} from 'react';
import './App.scss';
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
  const [user, setUser] = useState(null);
  const [loggedin, setLoggedin]  = useState(false);
  const [thisRoute, setThisRoute] = useState('login');
  
  const [transactionId, setTransactionId] = useState('');

  function handleLogIn(user) {
    setLoggedin(true);
    setUser(user);
  };

  function handleRouteChange(route){
    console.log(route);
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
    <div class = "w-screen h-screen">
      <Navbar loggedin={loggedin} handleRouteChange = {handleRouteChange}/>
      { thisRoute === 'home'
        ? <CallTable user = {user} handleRouteChange = {handleRouteChange}/>
        : ( thisRoute === 'profile' 
          ?  <ProfilePage user = {user} loggedin = {loggedin}/>
          : ( thisRoute === 'add-new' 
            ? <SubmitForm user = {user} handleRouteChange = {handleRouteChange}/>
            : ( thisRoute === 'login'
                ? <LoginPage handleLogIn = {handleLogIn} handleRouteChange = {handleRouteChange} />
                : <RegisterPage handleLogIn = {handleLogIn} handleRouteChange = {handleRouteChange} />
              )
        ))}
    </div>
  );
}

export default App;
