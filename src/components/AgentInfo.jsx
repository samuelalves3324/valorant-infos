import React from 'react';
import Image from './Image';
import Button from './Button';
import RoleCard from './RoleCard';
import AbilityCard from './AbilityCard';

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
        <h1>{ displayName }</h1>
        <Image src={ fullPortrait } alt={ displayName } className="agent-img"/>
        <p>{ description }</p>
        { mediaList ? <audio controls><source src={ wave } type="audio/wav"/></audio> : '' }
        <RoleCard displayName={ roleName } displayIcon={ roleIcon } description={ roleDescription }/>
        { abilities ? abilities.map((ability) => <AbilityCard key={ ability.displayName } displayName={ ability.displayName } displayIcon={ ability.displayIcon } description={ ability.description } slot={ ability.slot }/>) : "" }
        { displayName ? <Button type="button" className="return-button" text="Voltar" onClick={ onClick }/> : '' }
      </section>
    );
  }
}

export default AgentInfo;
