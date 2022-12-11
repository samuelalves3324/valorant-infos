import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';

class SkinCard extends React.Component {
  render() {
    const { obj, weaponName } = this.props;
    const { displayName, chromas } = obj;
    const { fullRender } = chromas[0];
    return (
      <div className='skin-card-link'>
        <Link to={`/armas/${ weaponName }/${ displayName.replaceAll('/', '_') }`}>
          <section id={ displayName } className='skin-card'>
              <h3>{ displayName }</h3>
              <Image src={ fullRender } className="skin-card-img"/> 
          </section>
        </Link>
      </div>
    );
  }
}

export default SkinCard;