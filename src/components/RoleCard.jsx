import React from 'react';
import Image from './Image';

class RoleCard extends React.Component {
  render() {
    const { displayName, displayIcon, description } = this.props;
    return (
      <div className='role-card'>
        <h3>{ displayName }</h3>
        <Image src={ displayIcon } alt={ displayName } className="role-img"/>
        <p>{ description }</p>
      </div>
    );
  }
}

export default RoleCard;
