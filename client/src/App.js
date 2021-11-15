// import logo from './logo.svg';
import './App.css';
import './App.scss';
// import Dashboard from './Components/Dashboard/Dashboard';
//import Navigation from './Components/Navigation/Navigation';
import Navbar from './Components/Navigation/Navbar';
// import Sidebar from './Components/Sidebar/Sidebar';
import {Container, Row, Col} from 'react-bootstrap';
import Table from './Components/Table/Table';
import SubmitForm from './Components/SubmitForm/SubmitForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/add-new"> 
              <SubmitForm />
            </Route>
            <Route path="/">
              <Container>
                <Row>
                  <Navbar />
                </Row>
                {/* <br/> */}
                <Row>
                  <Col> 
                    <Table />
                  </Col>
                </Row>
              </Container>
            </Route>            
          </Switch>
        </BrowserRouter>
      </div>  
  );
}

export default App;
