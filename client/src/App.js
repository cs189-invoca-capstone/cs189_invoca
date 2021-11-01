// import logo from './logo.svg';
import './App.css';
import './App.scss';
import Dashboard from './Components/Dashboard/Dashboard';
import Navigation from './Components/Navigation/Navigation';
import Sidebar from './Components/Sidebar/Sidebar';
import {Container, Row, Col} from 'react-bootstrap';
import Table from './Components/Table/Table'

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Row>
          <Navigation />
        </Row>
        <br/>
        <Row>
          <Col sm={2} >
            <Sidebar />
          </Col>
          <Col sm={10} > 
            {/* <Dashboard /> */}
            <Table />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
