// import logo from './logo.svg';
import './App.css';
import './App.scss';
// import Dashboard from './Components/Dashboard/Dashboard';
//import Navigation from './Components/Navigation/Navigation';
import Navbar from './Components/Navigation/Navbar'
// import Sidebar from './Components/Sidebar/Sidebar';
import {Container, Row, Col} from 'react-bootstrap';
import Table from './Components/Table/Table'
import SubmitForm from './Components/SubmitForm/SubmitForm'

function App() {
  return (
    <>
      <div className="wrapper">
        <Container>
          <Row>
            <Navbar />
          </Row>
          <br/>
          <Row>
            <Col> 
              <Table />
            </Col>
          </Row>
          {/* <SubmitForm /> */}
        </Container>
      </div>  
    </>
  );
}

export default App;
