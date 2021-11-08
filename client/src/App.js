// import logo from './logo.svg';
import './App.css';
import './App.scss';
import Dashboard from './Components/Dashboard/Dashboard';
import Navigation from './Components/Navigation/Navigation';
import Navbar from './Components/Navigation/Navbar'
import Sidebar from './Components/Sidebar/Sidebar';
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    // <div className="wrapper">
    //   <Container>
    //     <Row>
    //       <Navbar/>
    //     </Row>
    //     <br/>
    //     <Row>
    //       <Col sm={2} >
    //         <Sidebar />
    //       </Col>
    //       <Col sm={10} > 
    //         <Dashboard />
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
    <Navbar/>
  );
}

export default App;
