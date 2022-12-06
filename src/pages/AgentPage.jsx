import React from 'react';
import { useParams } from 'react-router-dom';
import AgentInfo from '../components/AgentInfo';
import Header from '../components/Header';

function AgentPage() {
  const { agent } = useParams();
  return(
    <div>
      <Header />
      <main>
        <AgentInfo name={ agent === 'KAY-O' ? agent.replaceAll('-', '/') : agent}/>
      </main>
    </div>
  );
}

export default AgentPage;
