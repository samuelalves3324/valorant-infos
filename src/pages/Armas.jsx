import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WeaponCard from '../components/WeaponCard';
import { getWeaponsList } from '../data';
import '../styles/Armas.css';

class Armas extends React.Component {
  state = {
    smgList: [],
    heavyList: [],
    sidearmList: [],
    knife: [],
    riflesList: [],
    shotgunsList: [],
    snipersList: []
  }

  componentDidMount() {
    this.loadWeapons();
  }

  loadWeapons = async () => {
    const weapons = await getWeaponsList();
    const smgList = weapons.filter((weapon) => weapon.category === 'EEquippableCategory::SMG');
    const heavyList = weapons.filter((weapon) => weapon.category === 'EEquippableCategory::Heavy');
    const riflesList = weapons.filter((weapon) => weapon.category === 'EEquippableCategory::Rifle');
    const shotgunsList = weapons.filter((weapon) => weapon.category === 'EEquippableCategory::Shotgun');
    const snipersList = weapons.filter((weapon) => weapon.category === 'EEquippableCategory::Sniper');
    const sidearmList = weapons.filter((weapon) => weapon.category === 'EEquippableCategory::Sidearm');
    const knife = weapons.filter((weapon) => weapon.category === 'EEquippableCategory::Melee');
    this.setState({
      smgList,
      heavyList,
      riflesList,
      shotgunsList,
      snipersList,
      sidearmList,
      knife,
    })
  }

  render() {
    const { smgList, heavyList, sidearmList, knife, riflesList, shotgunsList, snipersList } = this.state;
    return (
      <div>
        <Header />
        <main>
          <div className='weapons-container'>
            <section>
              <h2>Faca</h2>
              <div className="weapons-list">
                {knife.map((weapon) => <WeaponCard obj={weapon} key={weapon.displayName} />)}
              </div>
            </section>
            <section>
              <h2>Submetralhadoras</h2>
              <div className="weapons-list">
                {smgList.map((weapon) => <WeaponCard obj={weapon} key={weapon.displayName} />)}
              </div>
            </section>
            <section>
              <h2>Armas Pesadas</h2>
              <div className="weapons-list">
                {heavyList.map((weapon) => <WeaponCard obj={weapon} key={weapon.displayName} />)}
              </div>
            </section>
            <section>
              <h2>Fuzis de Precisão</h2>
              <div className="weapons-list">
                {snipersList.map((weapon) => <WeaponCard obj={weapon} key={weapon.displayName} />)}
              </div>
            </section>
            <section>
              <h2>Escopetas</h2>
              <div className="weapons-list">
                {shotgunsList.map((weapon) => <WeaponCard obj={weapon} key={weapon.displayName} />)}
              </div>
            </section>
            <section>
              <h2>Fuzis de Assalto</h2>
              <div className="weapons-list">
                {riflesList.map((weapon) => <WeaponCard obj={weapon} key={weapon.displayName} />)}
              </div>
            </section>
            <section>
              <h2>Pistolas</h2>
              <div className="weapons-list">
                {sidearmList.map((weapon) => <WeaponCard obj={weapon} key={weapon.displayName} />)}
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Armas;
