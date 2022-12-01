import React from "react";

class Image extends React.Component {
  render() {
    const { src, alt, className } = this.props;
    return (
      <img src={ src } alt={ alt } className={ className }/>
    );
  }
}

export default Image;
