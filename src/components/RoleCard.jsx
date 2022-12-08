import React from 'react';
import Image from './Image';

class RoleCard extends React.Component {
  render() {
    const { displayName, displayIcon, description } = this.props;
    return (
      <div className='role-card'>
        <div className='role-card-items'>
          <h3>{ displayName }</h3>
          <Image src={ displayIcon } alt={ displayName } className="role-img"/>
        </div>
        <p>{ description }</p>
      </div>
    );
  }
}

export default RoleCard;
