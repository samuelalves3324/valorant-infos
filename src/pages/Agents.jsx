import React from 'react';
import { getAgentsList } from '../data';
import Header from '../components/Header';
import AgentCard from '../components/AgentCard';
import '../styles/Agents.css';
import FormFilter from '../components/FormFilter';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

class Agents extends React.Component {
  state = {
    agentsList: [],
    filterInput: '',
    filterSelect: '',
    loading: true,
  }

  componentDidMount() {
    this.loadAgents();
  }

  loadAgents = async () => {
    const agents = await getAgentsList();
    this.setState({
      agentsList: agents,
      loading: false,
    })
  }

  onFilterChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { agentsList, filterInput, filterSelect, loading } = this.state;

    if(loading) {
      return <Loading />
    }
    return (
      <div>
        <Header />
        <div className='agents-page'>
          <main>
            <div className='filter-section'>
              <FormFilter onChange={ this.onFilterChange } valueSelect={ filterSelect } valueInput={ filterInput }/> 
            </div>
            <div className='card-agents-section'>
              { agentsList
              .filter((agent) => agent.displayName.toLowerCase().includes(filterInput.toLowerCase()))
              .filter((agent) => (filterSelect === '' || filterSelect === 'Selecione uma função' || filterSelect === agent.role.displayName ))
              .map((agent) => <AgentCard obj={ agent } key={ agent.displayName }/>) }
            </div>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Agents;
