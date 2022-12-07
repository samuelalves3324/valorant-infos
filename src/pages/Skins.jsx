import React from 'react';
import Header from '../components/Header';
import WeaoponCard from '../components/WeaponCard';
import { getWeaponsList } from '../data';

class Skins extends React.Component {
  state = {
    weaponList: []
  }

  loadWeapons = async () => {
    const weapons = await getWeaponsList();
    this.setState({
      weaponList: weapons
    })
  }

  render() {
    this.loadWeapons();
    const { weaponList } = this.state;
    return (
      <div>
        <Header />
        <main>
          { weaponList.map((weaopn) => <WeaoponCard obj={ weaopn } key={ weaopn.displayName }/>) }
        </main>
      </div>
    );
  }
}

export default Skins;