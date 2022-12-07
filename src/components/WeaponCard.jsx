import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';

class WeaoponCard extends React.Component {
  render() {
    const { obj } = this.props;
    const { displayName, displayIcon } = obj;
    return (
      <section id={ displayName } className="card">
        <Link to={`/skins/${ displayName }`}>
          <h3>{ displayName }</h3>
          <Image src={ displayIcon } alt={ displayName }/>
        </Link>
      </section>
    );
  }
}

export default WeaoponCard;
