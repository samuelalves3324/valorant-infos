import React from 'react';
import Image from './Image';

class SkinChroma extends React.Component {
  render() {
    const { obj } = this.props;
    const { swatch, displayIcon, streamedVideo, displayName } = obj; 
    return (
      <div>
        <hr />
        <div className='skin-chroma-title-container'>
          <Image src={ swatch } className='skin-page-swatch'/>
          <h5>{ displayName }</h5>
        </div>
        { displayIcon && <Image src={ displayIcon } className='skin-level-img'/>}
        { streamedVideo ? <video controls>
          <source src={ streamedVideo }/>
        </video> : ''}
        
      </div>
    );
  }
}

export default SkinChroma;
