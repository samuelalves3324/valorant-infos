import React from 'react';
import { getWeaponSkinsByName } from '../data';
import SkinCard from './SkinCard';

class WeaponSkins extends React.Component {
  state = {
    weaponSkinsArray: [],
  }

  loadWeapon = async (name) => {
    const weaponSkinsArray = await getWeaponSkinsByName(name);
    const filtredArray =  weaponSkinsArray.filter((skin) => !skin.displayName.includes('Padrão') & !skin.displayName.includes('favorita') & !skin.displayName.includes('Confronto'))
    this.setState({
      weaponSkinsArray: filtredArray
    })
  }
  render() {
    const { name } = this.props;
    this.loadWeapon(name);
    const { weaponSkinsArray } = this.state;
    return (
      <section>
        { weaponSkinsArray.map((skin) => <SkinCard obj={ skin }/>) }
      </section>
    );
  }
}

export default WeaponSkins;
