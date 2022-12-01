import React from 'react';

class Button extends React.Component {
  render() {
    const { type, text, className } = this.props
    return (
      <button type={ type } className={ className }>{ text }</button>
    );
  }
}

export default Button;
