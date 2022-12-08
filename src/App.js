import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Agentes from './pages/Agentes';
import AgentPage from './pages/AgentPage';
import Armas from './pages/Armas';
import WeaponPage from './pages/WeaponPage';
import SkinPage from './pages/SkinPage';

class App extends React.Component {
  render() {
    return ( 
       <Router>
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/agentes" element={ <Agentes /> }/>
            <Route path="/agentes/:agent" element={ <AgentPage /> }/>
            <Route path="/armas" element={ <Armas /> }/>
            <Route path="/armas/:weapon" element={ <WeaponPage /> }/>
            <Route path="/armas/:weapon/:skin" element={ <SkinPage /> }/>
          </Routes>
       </Router>
    );
  }
}

export default App;
