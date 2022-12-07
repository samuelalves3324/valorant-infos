import React from 'react';
import { getAgentsList } from '../data';
import Header from '../components/Header';
import AgentCard from '../components/AgentCard';
import '../styles/Agents.css';
import FormFilter from '../components/FormFilter';
import Footer from '../components/Footer';

class Agentes extends React.Component {
  state = {
    agentsList: [],
    filterInput: '',
  }

  loadAgents = async () => {
    const agents = await getAgentsList();
    this.setState({
      agentsList: agents,
    })
  }

  onFilterChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  }

  render() {
    this.loadAgents();
    const { agentsList, filterInput } = this.state;
    return (
      <div className='agents-page'>
        <Header />
        <main>
          <div className='filter-section'>
            <FormFilter onChange={ this.onFilterChange } value={ filterInput }/> 
          </div>
          <div className='card-agents-section'>
            { agentsList
            .filter((agent) => agent.displayName.toLowerCase().includes(filterInput.toLowerCase()))
            .map((agent) => <AgentCard obj={ agent } key={ agent.displayName }/>) }
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Agentes;
