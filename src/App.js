import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Agentes from './pages/Agentes';

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <Router>
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/agentes" element={ <Agentes /> }/>
          </Routes>
       </Router>
      </div>
    );
  }
}

export default App;
