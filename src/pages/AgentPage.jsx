import React from 'react';
import { useParams } from 'react-router-dom';
import AgentInfo from '../components/AgentInfo';
import Footer from '../components/Footer';
import Header from '../components/Header';

function AgentPage() {
  const { agent } = useParams();
  return(
    <div>
      <Header />
      <main>
        <AgentInfo name={ agent === 'KAY-O' ? 'KAY/O' : agent}/>
      </main>
      <Footer />
    </div>
  );
}

export default AgentPage;
