import React from 'react';
import Image from './Image';

class Card extends React.Component {
  render() {
    const { obj, onClick } = this.props;
    const { displayName, displayIcon } = obj;
    return (
      <section className='card' onClick={ onClick } id={ displayName }>
        <h3 id={ displayName }>{ displayName }</h3>
        <Image src={ displayIcon } alt={ displayName } className='card-image'id={ displayName }/>
      </section>
    );
  }
}

export default Card;
