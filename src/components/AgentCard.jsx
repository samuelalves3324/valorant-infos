import React from 'react';
import Image from './Image';
import '../styles/Card.css';
import { Link } from 'react-router-dom';

class AgentCard extends React.Component {
  render() {
    const { obj } = this.props;
    const { displayName, displayIcon } = obj;
    return (
      <section className='card' id={ displayName }>
        <Link to={`/agentes/${ displayName === 'KAY/O' ? 'KAY-O' : displayName }`}>
          <h3>{ displayName }</h3>
          <Image src={ displayIcon } alt={ displayName } className='card-image'/>
        </Link>
      </section>
    );
  }
}

export default AgentCard;
