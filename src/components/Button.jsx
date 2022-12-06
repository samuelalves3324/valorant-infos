import React from 'react';

class Button extends React.Component {
  render() {
    const { type, text, className, onClick } = this.props
    return (
      <button type={ type } className={ className } onClick={ onClick }>{ text }</button>
    );
  }
}

export default Button;
