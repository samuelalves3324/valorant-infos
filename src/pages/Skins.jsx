import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WeaponCard from '../components/WeaponCard';
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
          { weaponList.map((weaopn) => <WeaponCard obj={ weaopn } key={ weaopn.displayName }/>) }
        </main>
        <Footer />
      </div>
    );
  }
}

export default Skins;
