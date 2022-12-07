import React from 'react';
import { getSkinByName } from '../data';
import Image from './Image';
import SkinChroma from './SkinChroma';
import SkinLevel from './SkinLevel';

class SkinInfo extends React.Component {
  state = {
    skinObj: {}
  }

  loadSkin = async () => {
    const { weaponName, skinName } = this.props;
    const skinObj = await getSkinByName(weaponName, skinName);
    this.setState({
      skinObj: skinObj
    })
  }

  render() {
    this.loadSkin();
    const { skinObj } = this.state;
    const { displayName, levels, displayIcon, chromas } = skinObj;
    const secondImage = chromas ? chromas[0].displayIcon : '';
    const chromasList = chromas ? chromas : [];
    return(
      <div>
        <main>
          <h1>{ displayName }</h1>
          <Image src={ displayIcon ? displayIcon : secondImage }/>
          { levels ? levels.map((level, index) => <SkinLevel obj={ level } index={ index } key={`${ displayName } ${index}`}/>) : ''}
          <section>
            { chromasList.length > 1 ? <h2>Variantes</h2> : '' }
            { chromasList
            .filter((chroma, index) => index !== 0)
            .map((chroma) => <SkinChroma obj={ chroma } key={ chroma.displayName }/>) }
          </section>
        </main>
      </div>
    );
  }
}

export default SkinInfo;
