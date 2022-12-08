import React from 'react';
import Image from './Image';

class SkinChroma extends React.Component {
  render() {
    const { obj } = this.props;
    const { swatch, displayIcon, streamedVideo, displayName } = obj; 
    return (
      <div>
        <h3>{ displayName }</h3>
        <Image src={ swatch }/>
        { displayIcon ? <Image src={ displayIcon }/> : '' }
        { streamedVideo ? <video controls>
          <source src={ streamedVideo }/>
        </video> : ''}
      </div>
    );
  }
}

export default SkinChroma;
