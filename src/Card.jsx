import React from 'react';
import Image from './Image';

class Card extends React.Component {
  render() {
    const { obj } = this.props;
    return (
      <section className='card'>
        <h3>{ obj.displayName }</h3>
        <Image src={ obj.displayIcon } alt={ obj.displayName } className='card-image'/>
      </section>
    );
  }
}

export default Card;
