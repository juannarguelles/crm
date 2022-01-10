import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar/index'

function App() {
  return (
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/' exact component={Home} />      
          </Switch>
      </Router>
  );
}

export default App; 