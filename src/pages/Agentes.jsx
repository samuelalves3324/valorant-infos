import React from 'react';
import { getAgentByName, getAgentsList } from '../data';
import Header from '../components/Header';
import Card from '../components/Card';
import AgentInfo from '../components/AgentInfo';

class Agentes extends React.Component {
  state = {
    agentsList: [],
    reload: 0,
    selectedAgent: {}
  }

  loadAgents = async () => {
    const agents = await getAgentsList();
    const { reload } = this.state;
    if (reload === 0) {
      this.setState({
        agentsList: agents,
        reload: 1,
      })
    }
  }

  onReturnButtonClick = () => {
    this.setState({
      reload: 0,
      selectedAgent: {}
    }, () => this.loadAgents())
  }

  onAgentCardClick = async ({ target }) => {
    const { id } = target;
    const agent = await getAgentByName(id);
    this.setState({
      agentsList: [],
      selectedAgent: agent
    })
  }
  render() {
    this.loadAgents();
    const { agentsList, selectedAgent } = this.state;
    return (
      <div>
        <Header />
        <div className='card-agents-section'>
          { agentsList.map((agent) => <Card obj={ agent } onClick={ this.onAgentCardClick } key={ agent.displayName }/>) }
        </div>
        <AgentInfo obj={ selectedAgent } onClick={ this.onReturnButtonClick }/>
      </div>
    );
  }
}

export default Agentes;
