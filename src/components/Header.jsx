import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Image from './Image';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className='title-and-icon'>
          <Link to="/">
            <Image 
            src='https://img.icons8.com/color/480/valorant.png' 
            alt='Valorant Icon' 
            className='valorant-icon'
            />
          </Link>
            <h1>vALORANT INFOS</h1>
        </div>
        <div className='header-buttons-div'>
          <Link to="/agentes">
            <Button type='button' text='Agentes' className='header-buttons' />
          </Link>
          <Button type='button' text='Armas' className='header-buttons' />
          <Button type='button' text='Skins' className='header-buttons' />
        </div>
      </header>
    );
  }
}

export default Header;
