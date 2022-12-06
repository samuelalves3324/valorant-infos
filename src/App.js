import React from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import { getAgentByName, getAgentsList } from './data';
import AgentInfo from './components/AgentInfo';

class App extends React.Component {
state = {
  agentes: [],
  reload: 0,
  agent: {}
}


data = async () => {
  const agents = await getAgentsList();
  const { reload } = this.state;
  if (reload === 0) {
    this.setState({
      agentes: agents,
      reload: 1,
    })
  }
}

onClick = async ({ target }) => {
  const { id } = target;
  const agent = await getAgentByName(id);
  this.setState({
    agentes: [],
    agent: agent
  })
}

returnButton = () => {
  this.setState({
    reload: 0,
    agent: {}
  }, () => this.data())
}

  render() {
    this.data()
    const { agentes, agent } = this.state;
    return (
      <div className="App">
        <Header />
        <div className='section'>
          { agentes.map((agente) => <Card obj={ agente } onClick={ this.onClick } key={ agente.displayName }/>) }
        </div>
        <AgentInfo obj={ agent } onClick={ this.returnButton }/>
      </div>
    );
  }
}

export default App;
