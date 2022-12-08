import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';

class WeaponCard extends React.Component {
  render() {
    const { obj } = this.props;
    const { displayName, displayIcon } = obj;
    return (
      <Link to={`/armas/${ displayName }`} className="weapon-card">
        <h3>{ displayName }</h3>
        <Image src={ displayIcon } alt={ displayName } className="weapon-card-img"/>
      </Link>
    );
  }
}

export default WeaponCard;
