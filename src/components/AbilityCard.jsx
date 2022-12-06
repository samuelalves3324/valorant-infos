import React from 'react';
import Image from './Image';

class AbilityCard extends React.Component {
  render() {
    const { displayName, displayIcon, description, slot } = this.props;
    let abilityHotkey = '';
    if (slot === "Ability1") {
      abilityHotkey = 'Q';
    } else if (slot === "Ability2") {
      abilityHotkey = 'E';
    } else if (slot === "Grenade") {
      abilityHotkey = 'C';
    } else if (slot === "Ultimate") {
      abilityHotkey = 'X';
    } 
    return (
      <div className='ability-card'>
        <h4>{ displayName }</h4>
        <span>{ abilityHotkey }</span>
        <Image src={ displayIcon } alt={ displayName } className="ability-img"/>
        <p>{ description }</p>
      </div>
    );
  }
}

export default AbilityCard;
