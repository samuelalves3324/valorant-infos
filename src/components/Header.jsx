import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Image from './Image';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/">
          <div className='logo-container'>
              <Image 
              src='https://img.icons8.com/color/480/valorant.png' 
              alt='Valorant Icon' 
              className='valorant-icon'
              />
              <h1>vALORANT INFOS</h1>
          </div>
        </Link>
        <nav>
          <Link to="/agentes">
            <Button type='button' text='AGENTES' className='buttons' />
          </Link>
          <Link to="/armas">
            <Button type='button' text='ARMAS' className='buttons' />
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
