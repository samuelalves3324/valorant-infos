import React from 'react';
import { getAgentsList } from '../data';
import Header from '../components/Header';
import Card from '../components/Card';
import '../styles/Agents.css';

class Agentes extends React.Component {
  state = {
    agentsList: [],
  }

  loadAgents = async () => {
    const agents = await getAgentsList();
    this.setState({
      agentsList: agents,
    })
  }

  render() {
    this.loadAgents();
    const { agentsList } = this.state;
    return (
      <div className='agents-page'>
        <Header />
        <main>
          <div className='card-agents-section'>
            { agentsList.map((agent) => <Card obj={ agent } key={ agent.displayName }/>) }
          </div>
        </main>
      </div>
    );
  }
}

export default Agentes;
