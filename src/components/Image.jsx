import React from "react";

class Image extends React.Component {
  render() {
    const { src, alt, className, id } = this.props;
    return (
      <img src={ src } alt={ alt } className={ className } id={ id }/>
    );
  }
}

export default Image;
