import React from 'react';
import Image from './Image';
import RoleCard from './RoleCard';
import AbilityCard from './AbilityCard';
import { getAgentByName } from '../data';
import Loading from './Loading';

class AgentInfo extends React.Component {
  state = {
    agentObj: {},
    loading: true,
  }

  componentDidMount() {
    const { name } = this.props;
    this.loadAgent(name);
  }

  loadAgent = async (name) => {
    const agentObj = await getAgentByName(name);
    this.setState({
      agentObj: agentObj,
      loading: false
    })
  }
  render() {
    const { agentObj, loading } = this.state;
    const { displayName, description, fullPortrait, role, abilities, voiceLine } = agentObj;
    const mediaList = voiceLine ? voiceLine.mediaList : undefined;
    const wave = mediaList ? mediaList[0].wave : "";
    const roleName = role ? role.displayName : "";
    const roleIcon = role ? role.displayIcon : "";
    const roleDescription = role ? role.description : "";

    if(loading) {
      return <Loading />
    }
    return (
      <section className='agent-info'>
        <div className='agent-curiosities'>
          <div>
            <h1>{ displayName }</h1>
            <Image src={ fullPortrait } alt={ displayName } className="agent-img"/>
          </div>
          <div className='agent-description'>
            <span className='agent-details'>// FUNÇÃO</span>
            <RoleCard displayName={ roleName } displayIcon={ roleIcon } description={ roleDescription }/>
            <span className='agent-details'>// BIOGRAFIA</span>
            <p className='agent-bio'>{ description }</p>
            <div className='agent-audio agent-details'>// ÁUDIO</div>
            { mediaList ? <audio controls><source src={ wave } type="audio/wav"/></audio> : '' }
          </div>
        </div>
        <h2 className='agent-skills'>HABILIDADES</h2>
        <div className='abilities-section'>
          { abilities ? abilities.map((ability) => <AbilityCard key={ ability.displayName } displayName={ ability.displayName } displayIcon={ ability.displayIcon } description={ ability.description } slot={ ability.slot }/>) : "" }
        </div>
      </section>
    );
  }
}

export default AgentInfo;
