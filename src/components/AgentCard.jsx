import React from 'react';
import Image from './Image';
import '../styles/AgentCard.css';
import { Link } from 'react-router-dom';

class AgentCard extends React.Component {
  render() {
    const { obj } = this.props;
    const { displayName, displayIcon } = obj;
    return (
      <div className='agent-card'>
        <Link to={`/agentes/${ displayName === 'KAY/O' ? 'KAY-O' : displayName }`}>
          <h3 className='agent-card-title'>{ displayName }</h3>
          <Image src={ displayIcon } alt={ displayName } className='agent-card-image'/>
        </Link>
      </div>
    );
  }
}

export default AgentCard;
