import React from 'react';
import './App.css';
import Header from './Header';
import Card from './Card';
import { getAgentByName, getAgentsList } from './data';

class App extends React.Component {
state = {
  agentes: []
}


data = async () => {
  const agents = await getAgentsList();
  this.setState({
    agentes: agents
  })
}

  render() {
    this.data()
    const { agentes } = this.state;
    return (
      <div className="App">
        <Header />
        <div className='section'>
          { agentes.map((agente) => <Card obj={ agente }/>) }
        </div>
      </div>
    );
  }
}

export default App;
