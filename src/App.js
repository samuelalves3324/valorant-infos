import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Agentes from './pages/Agentes';
import AgentPage from './pages/AgentPage';
import Skins from './pages/Skins';
import WeaponPage from './pages/WeaponPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <Router>
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/agentes" element={ <Agentes /> }/>
            <Route path="/agentes/:agent" element={ <AgentPage /> }/>
            <Route path="/skins" element={ <Skins /> }/>
            <Route path="/skins/:weapon" element={ <WeaponPage /> }/>
            <Route path="/skins/:weapon/:skin"/>
          </Routes>
       </Router>
      </div>
    );
  }
}

export default App;
