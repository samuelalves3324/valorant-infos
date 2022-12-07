import React from 'react';
import { useParams } from 'react-router-dom';
import SkinInfo from '../components/SkinInfo';

function SkinPage() {
  const { weapon, skin } = useParams();
  return (
    <SkinInfo weaponName={ weapon } skinName={ skin.replaceAll('_', '/') }/>
  );
}

export default SkinPage;