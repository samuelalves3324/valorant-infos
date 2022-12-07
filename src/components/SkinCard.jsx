import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';

class SkinCard extends React.Component {
  render() {
    const { obj, weaponName } = this.props;
    const { displayName, displayIcon, chromas } = obj;
    return (
      <section id={ displayName } className='card'>
        <Link to={`/skins/${ weaponName }/${ displayName.replaceAll('/', '_') }`}>
          <h3>{ displayName }</h3>
          <Image src={ displayIcon ? displayIcon : chromas[0].displayIcon }/>
        </Link>
      </section>
    );
  }
}

export default SkinCard;