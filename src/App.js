import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Agents from './pages/Agents';
import AgentPage from './pages/AgentPage';
import Weapons from './pages/Weapons';
import WeaponPage from './pages/WeaponPage';
import SkinPage from './pages/SkinPage';
import NotFoundPage from './pages/NotFoundPage';

class App extends React.Component {
  render() {
    return ( 
       <Router>
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/agentes" element={ <Agents /> }/>
            <Route path="/agentes/:agent" element={ <AgentPage /> }/>
            <Route path="/armas" element={ <Weapons /> }/>
            <Route path="/armas/:weapon" element={ <WeaponPage /> }/>
            <Route path="/armas/:weapon/:skin" element={ <SkinPage /> }/>
            <Route path="/*" element={ <NotFoundPage /> }/>
          </Routes>
       </Router>
    );
  }
}

export default App;
