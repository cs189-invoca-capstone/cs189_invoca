import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div className="wrapper">
      <div className = "dashboard">
        <Navigation />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
