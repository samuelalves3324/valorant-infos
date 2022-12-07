import React from 'react';
import Image from './Image';

class SkinCard extends React.Component {
  render() {
    const { obj } = this.props;
    const { displayName, displayIcon } = obj;
    return (
      <section id={ displayName }>
          <h3>{ displayName }</h3>
          <Image src={ displayIcon }/>
      </section>
    );
  }
}

export default SkinCard;