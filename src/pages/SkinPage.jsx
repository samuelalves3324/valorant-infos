import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SkinInfo from '../components/SkinInfo';

function SkinPage() {
  const { weapon, skin } = useParams();
  return (
    <div>
      <Header />
      <SkinInfo weaponName={ weapon } skinName={ skin.replaceAll('_', '/') }/>
      <Footer />
    </div>
  );
}

export default SkinPage;