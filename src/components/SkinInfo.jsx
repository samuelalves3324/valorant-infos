import React from 'react';
import { getSkinByName } from '../data';
import Image from './Image';
import SkinChroma from './SkinChroma';
import SkinLevel from './SkinLevel';

class SkinInfo extends React.Component {
  state = {
    skinObj: {}
  }

  componentDidMount() {
    this.loadSkin();
  }

  loadSkin = async () => {
    const { weaponName, skinName } = this.props;
    const skinObj = await getSkinByName(weaponName, skinName);
    this.setState({
      skinObj: skinObj
    })
  }

  render() {
    const { skinObj } = this.state;
    const { displayName, levels, chromas } = skinObj;
    const fullRender  = chromas ? chromas[0].fullRender : '';
    const chromasList = chromas ? chromas : [];
    const skinLevels = levels ? levels : [];
    return(
      <div>
        <main>
          <div className='skin-page'>
            <h1>{ displayName }</h1>
            <Image src={ fullRender } className='skin-page-img'/>
            { skinLevels.length > 1 ? skinLevels.map((level, index) => <SkinLevel obj={ level } index={ index } key={`${ displayName } ${index}`}/>) : <h2>Essa skin não possui upgrades</h2>}
            <section className='skin-chromas-section'>
              { chromasList.length > 1 ? <h2>Variantes</h2> : <h2>Essa skin não possui variantes</h2> }
              { chromasList
              .filter((chroma, index) => index !== 0)
              .map((chroma) => <SkinChroma obj={ chroma } key={ chroma.displayName }/>) }
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default SkinInfo;
