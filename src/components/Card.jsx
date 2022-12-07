import React from 'react';
import Image from './Image';
import '../styles/Card.css';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { obj, onClick } = this.props;
    const { displayName, displayIcon } = obj;
    return (
      <section className='card' onClick={ onClick } id={ displayName }>
        <Link to={`/agentes/${ displayName === 'KAY/O' ? 'KAY-O' : displayName }`}>
          <h3 id={ displayName }>{ displayName }</h3>
          <Image src={ displayIcon } alt={ displayName } className='card-image'id={ displayName }/>
        </Link>
      </section>
    );
  }
}

export default Card;
