import React from 'react';
import Image from './Image';

class SkinChroma extends React.Component {
  render() {
    const { obj } = this.props;
    const { swatch, displayIcon, streamedVideo } = obj; 
    return (
      <div>
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
