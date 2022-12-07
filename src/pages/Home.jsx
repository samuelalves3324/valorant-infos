import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
            <div className='home-page'>
              <div className='home-container'>
                <h1>vALORANT INFOS</h1>
                <p>Aqui você encontra informações atualizadas sobre valorant!</p>
                <div>
                  <Link to="/agentes">
                    <Button type='button' text='AGENTES' className='home-page-button' />
                  </Link>
                  <Button type='button' text='ARMAS' className='home-page-button' />
                </div>
              </div>
            </div>
          </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
