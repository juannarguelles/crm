import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/index';
import Home from './pages/home';
import Simulador from './pages/Simulador';
import Estado from './pages/Estado';
import Solicitud from './pages/Solicitud';
import CoSolicitante from './pages/CoSolicitante';

function App() {
  return (
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/' exact component={Home} />      
            <Route path='/simulador' component={Simulador} />
            <Route path='/solicitud' component={Solicitud} />
            <Route path='/cosolicitante' component={CoSolicitante} />       
            <Route path='/estado' component={Estado} />           
          </Switch>
      </Router>
  );
}

export default App;