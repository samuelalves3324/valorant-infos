import React from 'react';
import Header from '../components/Header';
import '../styles/NotFoundPage.css';

class NotFoundPage extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <div className='not-found-page'>
          <h1>
            Página não encontrada
          </h1>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
