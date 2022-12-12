import React from 'react';

class SkinLevel extends React.Component {
  render() {
    const { obj, index } = this.props;
    const { streamedVideo } = obj;
    return(
      <section>
        <h2>{`Nível ${index + 1}`}</h2>
        { streamedVideo && <video controls>
          <source src={ streamedVideo }/>
        </video>}
      </section>
    );
  }
}

export default SkinLevel;
