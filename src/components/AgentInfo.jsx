import React from 'react';
import Image from './Image';
import Button from './Button';
import RoleCard from './RoleCard';
import AbilityCard from './AbilityCard';
import '../styles/AgentInfo.css';

class AgentInfo extends React.Component {
  render() {
    const { obj, onClick } = this.props;
    const { displayName, description, fullPortrait, role, abilities, voiceLine } = obj;
    const mediaList = voiceLine ? voiceLine.mediaList : undefined;
    const wave = mediaList ? mediaList[0].wave : "";
    const roleName = role ? role.displayName : "";
    const roleIcon = role ? role.displayIcon : "";
    const roleDescription = role ? role.description : "";
    return (
      <section className='agent-info'>
        { displayName ? <Button type="button" className="return-button buttons" text="VOLTAR" onClick={ onClick }/> : '' }
        <div className='agent-curiosities'>
          <div>
            <h1>{ displayName }</h1>
            <Image src={ fullPortrait } alt={ displayName } className="agent-img"/>
          </div>
          <div className='agent-description'>
            <span>// FUNÇÃO</span>
            <RoleCard displayName={ roleName } displayIcon={ roleIcon } description={ roleDescription }/>
            <span>// BIOGRAFIA</span>
            <p className='agent-bio'>{ description }</p>
            <div className='agent-audio'>// ÁUDIO</div>
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
