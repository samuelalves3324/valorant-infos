import React from 'react';
import Button from './Button';
import Image from './Image';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className='title-and-icon'>
          <Image 
          src='https://img.icons8.com/color/480/valorant.png' 
          alt='Valorant Icon' 
          className='valorant-icon'
          />
          <h1>vALORANT INFOS</h1>
        </div>
        <div className='header-buttons-div'>
          <Button type='button' text='Agentes' className='header-buttons' />
          <Button type='button' text='Armas' className='header-buttons' />
          <Button type='button' text='Skins' className='header-buttons' />
        </div>
      </header>
    );
  }
}

export default Header;
