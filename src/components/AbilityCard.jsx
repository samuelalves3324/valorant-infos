import React from 'react';
import Image from './Image';

class AbilityCard extends React.Component {
  render() {
    const { displayName, displayIcon, description, slot } = this.props;
    let abilityHotkey = '';
    if (slot === "Ability1") {
      abilityHotkey = 'Q -';
    } else if (slot === "Ability2") {
      abilityHotkey = 'E -';
    } else if (slot === "Grenade") {
      abilityHotkey = 'C -';
    } else if (slot === "Ultimate") {
      abilityHotkey = 'X -';
    } else {
      abilityHotkey = 'Passiva -'
    }
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
