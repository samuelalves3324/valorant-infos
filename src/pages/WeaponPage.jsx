import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import WeaponSkins from '../components/WeaponSkins';

function WeaponPage() {
  const { weapon } = useParams();
  return (
    <div>
      <Header />
      <main>
        <WeaponSkins name={ weapon }/>
      </main>
    </div>
  );
}

export default WeaponPage;
