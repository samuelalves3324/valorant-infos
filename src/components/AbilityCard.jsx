import React from 'react';
import Image from './Image';

class AbilityCard extends React.Component {
  render() {
    const { displayName, displayIcon, description, slot } = this.props;
    const abilities = {
      Ability1: 'Q -',
      Ability2: 'E -',
      Grenade: 'C -',
      Ultimate: 'X -'
    };
    const abilityHotkey = abilities[slot] || 'Passiva -';
    return (
      <div className='ability-card'>
        <div className='ability-title'>
          <Image src={ displayIcon } className="ability-img"/>
          <h4>{ `${abilityHotkey} ${displayName}` }</h4>
        </div>
        <div className='ability-items'>
          <p>{ description }</p>
        </div>
      </div>
    );
  }
}

export default AbilityCard;
