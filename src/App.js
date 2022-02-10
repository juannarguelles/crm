import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
          <Routes>
            <Route path='/'  element={<Home/>} />      
            <Route path='/simulador' element={<Simulador/>} />
            <Route path='/solicitud' element={<Solicitud/>} />
            <Route path='/cosolicitante' element={<CoSolicitante/>} />       
            <Route path='/estado' element={<Estado/>} />           
          </Routes>
      </Router>
  );
}

export default App;