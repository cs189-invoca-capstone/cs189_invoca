// import logo from './logo.svg';
import './App.css';
import './App.scss';
// import Dashboard from './Components/Dashboard/Dashboard';
//import Navigation from './Components/Navigation/Navigation';
// import Navbar from './Components/Navigation/Navbar'
import RegisterPage from './Components/RegisterPage/RegisterPage'
import LoginPage from './Components/LoginPage/LoginPage'
// import LandingPage from './Components/LandingPage/LandingPage'
// import Sidebar from './Components/Sidebar/Sidebar';
// import {Container, Row, Col} from 'react-bootstrap';
// import Table from './Components/Table/Table'
import Navbar from './Components/Navigation/Navbar';
// import Sidebar from './Components/Sidebar/Sidebar';
import {Container, Row, Col} from 'react-bootstrap';
import CallTable from './Components/CallTable/CallTable';
import SubmitForm from './Components/SubmitForm/SubmitForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
          <Route path="/login" exact strict component={() => <LoginPage />}/>
          <Route path="/register" exact strict component={() => <RegisterPage />}/>
            <Route path="/add-new"> 
            <Container>
              <SubmitForm />
              </Container>
            </Route>
          {/* <Route path="/" exact strict component={() => <LandingPage/>}/> */}
            <Route path="/">
              <Container>
                <Row>
                  <Navbar />
                </Row>
                <Row>
                  <Col> 
                    <CallTable />
                  </Col>
                </Row>
              </Container>
            </Route>            
          </Switch>
        </BrowserRouter>
      </div>  
  )
}

export default App;
