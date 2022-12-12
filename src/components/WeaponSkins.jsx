import React from 'react';
import { getWeaponSkinsByName } from '../data';
import SkinCard from './SkinCard';
import '../styles/Skins.css';
import Loading from './Loading';

class WeaponSkins extends React.Component {
  state = {
    weaponSkinsArray: [],
    loading: true,
  }

  componentDidMount() {
    const { name } = this.props;
    this.loadWeapon(name);
  }

  loadWeapon = async (name) => {
    const weaponSkinsArray = await getWeaponSkinsByName(name);
    const filtredArray =  weaponSkinsArray.filter((skin) => !skin.displayName.includes('Padrão') & !skin.displayName.includes('favorita') & !skin.displayName.includes('Confronto'))
    this.setState({
      weaponSkinsArray: filtredArray,
      loading: false
    })
  }
  render() {
    const { name } = this.props;
    const { weaponSkinsArray, loading } = this.state;

    if(loading) {
      return <Loading />
    }
    return (
      <section className='weapons-section'>
        { weaponSkinsArray.map((skin, index) => <SkinCard obj={ skin } weaponName={ name } key={`${skin.displayName} ${index}`}/>) }
      </section>
    );
  }
}

export default WeaponSkins;
